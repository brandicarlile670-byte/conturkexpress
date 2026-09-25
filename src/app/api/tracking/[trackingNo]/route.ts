import { NextResponse } from "next/server";
import { deleteTracking, getTrackingByNo, updateTracking } from "@/lib/tracking-repository";
import { isAdminAuthenticated } from "@/lib/admin-auth";
export const runtime="nodejs";
type Params={params:Promise<{trackingNo:string}>};
export async function GET(_request:Request,{params}:Params){const {trackingNo}=await params;const r=getTrackingByNo(decodeURIComponent(trackingNo));if(!r)return NextResponse.json({error:"Tracking record not found."},{status:404});return NextResponse.json(r);}
export async function PUT(request:Request,{params}:Params){if(!(await isAdminAuthenticated()))return NextResponse.json({error:"Unauthorized"},{status:401});const {trackingNo}=await params;const r=updateTracking(decodeURIComponent(trackingNo),await request.json());if(!r)return NextResponse.json({error:"Tracking record not found."},{status:404});return NextResponse.json(r);}
export async function DELETE(_request:Request,{params}:Params){if(!(await isAdminAuthenticated()))return NextResponse.json({error:"Unauthorized"},{status:401});const {trackingNo}=await params;const ok=deleteTracking(decodeURIComponent(trackingNo));if(!ok)return NextResponse.json({error:"Tracking record not found."},{status:404});return NextResponse.json({ok:true});}
