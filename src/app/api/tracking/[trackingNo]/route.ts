import { NextResponse } from "next/server";
import { deleteTracking, getTrackingByNo, updateTracking } from "@/lib/tracking-repository";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const runtime = "nodejs";

type Params = { params: Promise<{ trackingNo: string }> };

export async function GET(_request: Request, { params }: Params) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { trackingNo } = await params;
  const record = await getTrackingByNo(decodeURIComponent(trackingNo));

  if (!record) {
    return NextResponse.json({ error: "Tracking record not found." }, { status: 404 });
  }

  return NextResponse.json(record);
}

export async function PUT(request: Request, { params }: Params) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { trackingNo } = await params;

  try {
    const record = await updateTracking(decodeURIComponent(trackingNo), await request.json());

    if (!record) {
      return NextResponse.json({ error: "Tracking record not found." }, { status: 404 });
    }

    return NextResponse.json(record);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to update tracking record.";
    const conflict = /cannot be changed|already exists|duplicate|23505/i.test(message);
    const clientError = /cannot be changed/i.test(message);
    return NextResponse.json({ error: message }, { status: conflict || clientError ? 400 : 500 });
  }
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { trackingNo } = await params;
  const deleted = await deleteTracking(decodeURIComponent(trackingNo));

  if (!deleted) {
    return NextResponse.json({ error: "Tracking record not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
