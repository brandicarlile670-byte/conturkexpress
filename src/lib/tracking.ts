export function normalizeTrackingId(value:string){return value.trim();}
export function isValidTrackingId(value:string){const id=normalizeTrackingId(value);return id.length>0&&id.length<=64;}
export function getTrackingPath(id:string){return `/tracking?number=${encodeURIComponent(normalizeTrackingId(id))}`;}
// Future production external integration hook.
export function getTrackingUrl(id:string){const baseUrl=process.env.NEXT_PUBLIC_TRACKING_URL;if(!baseUrl)return null;const url=new URL(baseUrl);url.searchParams.set("number",normalizeTrackingId(id));return url.toString();}
