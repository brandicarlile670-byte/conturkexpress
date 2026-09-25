import fs from "node:fs";
import path from "node:path";
import type { TrackingRecord, TrackingEvent } from "./tracking-types";
const dataPath = path.join(process.cwd(), "src", "data", "tracking.json");
function ensureStore(){ if(!fs.existsSync(dataPath)){fs.mkdirSync(path.dirname(dataPath),{recursive:true});fs.writeFileSync(dataPath,"[]\n","utf8");} }
export function getAllTrackings(){ensureStore();return JSON.parse(fs.readFileSync(dataPath,"utf8")) as TrackingRecord[];}
export function getTrackingByNo(no:string){const n=no.trim().toUpperCase();return getAllTrackings().find(r=>r.trackingNo.trim().toUpperCase()===n)??null;}
function saveAll(records:TrackingRecord[]){ensureStore();fs.writeFileSync(dataPath,`${JSON.stringify(records,null,2)}\n`,"utf8");}
export function createTracking(input:Omit<TrackingRecord,"id"|"createdAt"|"updatedAt">){const records=getAllTrackings();if(records.some(r=>r.trackingNo.toUpperCase()===input.trackingNo.trim().toUpperCase()))throw new Error("A tracking record with that tracking number already exists.");const now=new Date().toISOString();const id=records.length?Math.max(...records.map(r=>r.id))+1:1;const record={...input,id,trackingNo:input.trackingNo.trim(),createdAt:now,updatedAt:now};records.push(record);saveAll(records);return record;}
export function updateTracking(no:string,patch:Partial<Omit<TrackingRecord,"id"|"createdAt"|"updatedAt">>){const n=no.trim().toUpperCase();const records=getAllTrackings();const i=records.findIndex(r=>r.trackingNo.toUpperCase()===n);if(i<0)return null;const e=records[i];const updated:TrackingRecord={...e,...patch,shipper:patch.shipper?{...e.shipper,...patch.shipper}:e.shipper,consignee:patch.consignee?{...e.consignee,...patch.consignee}:e.consignee,travelHistory:patch.travelHistory?patch.travelHistory.map((x:TrackingEvent)=>({...x})):e.travelHistory,updatedAt:new Date().toISOString()};records[i]=updated;saveAll(records);return updated;}
export function deleteTracking(no:string){const n=no.trim().toUpperCase();const records=getAllTrackings();const next=records.filter(r=>r.trackingNo.toUpperCase()!==n);if(next.length===records.length)return false;saveAll(next);return true;}
