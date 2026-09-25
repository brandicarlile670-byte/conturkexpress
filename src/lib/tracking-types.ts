export type TrackingRecordStatus =
  | "Processing" | "Dispatched" | "Custom Unit" | "Departed" | "Arrived"
  | "Delivered" | "Awaiting-Departure" | string;
export type BookingMode = "Paid" | "To Pay" | string;
export type TrackingEvent = { id:string; location:string; status:string; dateTime:string; remarks:string };
export type TrackingParty = { name:string; phone:string; address:string };
export type TrackingRecord = { id:number; trackingNo:string; currentStatus:TrackingRecordStatus; bookingMode:BookingMode; scheduledDelivery:string; customerFirstName:string; customerLastName:string; origin:string; destination:string; services:string; type:string; weight:string; pickupDateTime:string; description:string; shipper:TrackingParty; consignee:TrackingParty; travelHistory:TrackingEvent[]; createdAt:string; updatedAt:string };
