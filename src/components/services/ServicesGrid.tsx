import { services } from "@/lib/services";
import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section>
      <div className="mb-10 text-center">
        <h2 className="bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-neutral-100 dark:to-neutral-400">Our Services</h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-neutral-600 dark:text-gray-400">Flexible, solution-oriented transport services tailored to your needs.</p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => <ServiceCard key={service.number} {...service} />)}
      </div>
    </section>
  );
}
