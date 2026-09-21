import type { ServiceIconName } from "@/components/ui/Icons";

export type Service = {
  number: string;
  title: string;
  description: string;
  icon: ServiceIconName;
};

export const services: Service[] = [
  { number: "01", title: "Container Shipping", description: "Fast, secure and competitive FCL and LCL container shipping worldwide.", icon: "container" },
  { number: "02", title: "Air Freight", description: "Global air freight services for your urgent and time-sensitive shipments.", icon: "plane" },
  { number: "03", title: "Pre / On / Inland Carriage", description: "Pre-carriage, on-carriage and inland haulage as legs of a container move, so the box travels door to door.", icon: "truck" },
  { number: "04", title: "Transit Transport", description: "Regular door-to-door transit services through Mersin and Istanbul to East Europe, the Middle East and surrounding countries, Azerbaijan, Iraq and the Arab states.", icon: "route" },
  { number: "05", title: "Project / Out-of-Gauge Cargo", description: "Project and out-of-gauge cargo including Open Top, Flatrack, Platform and dry cargo.", icon: "boxes" },
  { number: "06", title: "Reefer Shipping", description: "Temperature-controlled reefer container shipping for cold-chain cargo.", icon: "snowflake" },
  { number: "07", title: "Used Container Trading", description: "Inspected used container buying and selling services tailored to your needs.", icon: "repeat" },
  { number: "08", title: "NVOCC Line Operation", description: "Flexible, cost-effective and scalable NVOCC solutions with our own line operations.", icon: "network" },
  { number: "09", title: "Ship Agency", description: "Comprehensive, fast and professional ship agency services at ports.", icon: "anchor" },
  { number: "10", title: "Customs Clearance", description: "Transit clearance, personal effects clearance, return-to-origin and clearance accompanying transport.", icon: "file-check" },
];
