import { redirect } from "next/navigation";
import type { Metadata } from "next";
import TrackingList from "@/components/admin/TrackingList";
import { getAllTrackings } from "@/lib/tracking-repository";
import { isAdminAuthenticated } from "@/lib/admin-auth";
export const metadata:Metadata={title:"Tracking List | ConTurk Admin",robots:{index:false,follow:false}};
export default async function TrackingAdminListPage(){if(!(await isAdminAuthenticated()))redirect("/admin/tracking/login");return <TrackingList initialRecords={getAllTrackings()}/>;}
