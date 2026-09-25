import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
export const COOKIE_NAME="conturk_admin_session";
function secret(){return process.env.CONTURK_ADMIN_SESSION_SECRET||"local-demo-session-secret";}
function sign(value:string){return createHmac("sha256",secret()).update(value).digest("hex");}
export function createAdminSessionToken(){const payload=`admin:${Date.now()}`;return `${payload}.${sign(payload)}`;}
export function isValidAdminSession(token?:string){if(!token)return false;const i=token.lastIndexOf(".");if(i<1)return false;const payload=token.slice(0,i),provided=token.slice(i+1),expected=sign(payload);if(provided.length!==expected.length)return false;return timingSafeEqual(Buffer.from(provided),Buffer.from(expected));}
export async function isAdminAuthenticated(){const c=await cookies();return isValidAdminSession(c.get(COOKIE_NAME)?.value);}
