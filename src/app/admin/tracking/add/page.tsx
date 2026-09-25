import { redirect } from "next/navigation";
import type { Metadata } from "next";
import TrackingEditor from "@/components/admin/TrackingEditor";
import { getTrackingByNo } from "@/lib/tracking-repository";
import { isAdminAuthenticated } from "@/lib/admin-auth";
export const metadata:Metadata={title:"Add Tracking | ConTurk Admin",robots:{index:false,follow:false}};
export default async function AddTrackingPage({searchParams}:{searchParams:Promise<{trackingNo?:string|string[]}>}){if(!(await isAdminAuthenticated()))redirect("/admin/tracking/login");const p=await searchParams;const n=Array.isArray(p.trackingNo)?p.trackingNo[0]:p.trackingNo;const r=n?getTrackingByNo(n):null;return <TrackingEditor initialRecord={r} createMode={!r}/>;}
