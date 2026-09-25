import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import TrackingEditor from "@/components/admin/TrackingEditor";
import { getTrackingByNo } from "@/lib/tracking-repository";
import { isAdminAuthenticated } from "@/lib/admin-auth";

type Params = { params: Promise<{ trackingNo: string }> };

export const metadata: Metadata = {
  title: "Tracking Details | ConTurk Admin",
  robots: { index: false, follow: false },
};

export default async function TrackingDetailsAdminPage({ params }: Params) {
  if (!(await isAdminAuthenticated())) redirect("/admin/tracking/login");

  const { trackingNo } = await params;
  const record = getTrackingByNo(decodeURIComponent(trackingNo));

  if (!record) notFound();

  return <TrackingEditor initialRecord={record} createMode={false} />;
}
