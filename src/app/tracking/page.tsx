import type { Metadata } from "next";
import PublicTrackingDetails from "@/components/tracking/PublicTrackingDetails";
import PublicTrackingLookup from "@/components/tracking/PublicTrackingLookup";
import { getTrackingByNo } from "@/lib/tracking-repository";
export const metadata:Metadata={title:"Parcel Tracking | ConTurk Shipping",description:"Track a ConTurk shipment by Bill of Lading or container number."};
export const dynamic="force-dynamic";
export default async function TrackingPage({searchParams}:{searchParams:Promise<{number?:string|string[]}>}){const p=await searchParams;const n=Array.isArray(p.number)?p.number[0]:p.number;if(!n?.trim())return <PublicTrackingLookup/>;const record=await getTrackingByNo(n);if(!record)return <div className="ct-public-tracking"><div className="lookup-shell"><div className="header"><h1>Parcel Tracking</h1></div><p className="lookup-error">No tracking record was found for <strong>{n}</strong>.</p><a href="/tracking" className="tracking-back-link">Search again</a></div></div>;return <PublicTrackingDetails record={record}/>;}
