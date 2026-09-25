import { NextResponse } from "next/server";
import { createTracking, getAllTrackings } from "@/lib/tracking-repository";
import type { TrackingRecord } from "@/lib/tracking-types";
import { isAdminAuthenticated } from "@/lib/admin-auth";
export const runtime="nodejs";
export async function GET(){return NextResponse.json(getAllTrackings());}
export async function POST(request:Request){if(!(await isAdminAuthenticated()))return NextResponse.json({error:"Unauthorized"},{status:401});const body=await request.json() as Omit<TrackingRecord,"id"|"createdAt"|"updatedAt">;try{return NextResponse.json(createTracking(body),{status:201});}catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Unable to create tracking record."},{status:409});}}
