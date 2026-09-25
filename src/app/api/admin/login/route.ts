import { NextResponse } from "next/server";
import { createAdminSessionToken, COOKIE_NAME } from "@/lib/admin-auth";
export const runtime="nodejs";
export async function POST(request:Request){const body=await request.json() as {username?:string;password?:string};const user=process.env.CONTURK_ADMIN_EMAIL||"admin@conturk.local";const pass=process.env.CONTURK_ADMIN_PASSWORD||"ConturkDemo123!";if(body.username?.trim()!==user||body.password!==pass)return NextResponse.json({error:"Invalid admin credentials."},{status:401});const response=NextResponse.json({ok:true});response.cookies.set({name:COOKIE_NAME,value:createAdminSessionToken(),httpOnly:true,sameSite:"lax",secure:process.env.NODE_ENV==="production",path:"/",maxAge:60*60*8});return response;}
