type StoryItem = {
  number?: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  imageOrder: "lg:order-1" | "lg:order-2";
};

const stories: StoryItem[] = [
  {
    title: "With our WCA World (since 2012), JC Trans Elite and WIFFA memberships, ConTurk delivers its services under international financial assurance — we are working under global liability.",
    text: "Our team is made up of young, dynamic professionals ready to respond to your demands and expectations instantly. We offer immediate solutions, a flexible and broad perspective, and a solution-oriented approach. You will be glad to have discovered the Conturk quality.",
    image: "/images/about-us-project-cargo.jpg",
    alt: "Project cargo handled at a container terminal",
    imageOrder: "lg:order-2",
  },
  {
    number: "02",
    title: "INSTANT SOLUTIONS, A FLEXIBLE AND BROAD PERSPECTIVE",
    text: "Our team is made up of young professionals who respond swiftly to your demands and requests. Today's business world has its essentials: instant solutions, a flexible and broad perspective, and a solution-oriented mindset. All of these are present in abundance among the Conturk team. Change your habits; you will not regret discovering the Conturk quality.",
    image: "/images/about-us-team-istanbul.jpg",
    alt: "The Conturk team unloading a container in Istanbul",
    imageOrder: "lg:order-1",
  },
  {
    number: "03",
    title: "MASTERING THE LOCAL MARKET, SPEAKING THE SAME LANGUAGE AS OUR CLIENTS",
    text: "Our founders are entirely local business people. Mastering the local market and speaking the same language as our target audience is what sets us apart from foreign companies; because in business, knowing the demands of the market and getting the job done is only possible through a true command of that market.",
    image: "/images/about-us-out-of-gauge.jpg",
    alt: "Out-of-gauge project cargo secured on a lowbed trailer",
    imageOrder: "lg:order-2",
  },
];

function StoryImage({ image, alt }: Pick<StoryItem, "image" | "alt">) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-linear-to-b from-gray-50 to-gray-100 p-3 shadow-xl dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950">
      <img src={image} alt={alt} className="w-full rounded-xl object-cover transition duration-300 transform blur-0 scale-100" />
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent dark:via-red-400/40" />
      <div className="absolute inset-x-10 bottom-0 mx-auto h-px w-40 bg-linear-to-r from-transparent via-red-400 to-transparent" />
    </div>
  );
}

export default function AboutStory() {
  return (
    <section className="space-y-16 md:space-y-24">
      {stories.map((story) => (
        <div key={story.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className={story.number ? story.imageOrder === "lg:order-1" ? "lg:order-2" : "lg:order-1" : "lg:order-1"}>
            {story.number && <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">{story.number}</span>}
            <h2 className={`${story.number ? "mt-3 text-xl md:text-2xl uppercase" : ""} bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text font-bold leading-tight tracking-tight text-transparent ${story.number ? "leading-snug" : "text-2xl md:text-3xl"} dark:from-neutral-100 dark:to-neutral-400`}>
              {story.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-gray-400">{story.text}</p>
          </div>
          <div className={story.imageOrder}>
            <StoryImage image={story.image} alt={story.alt} />
          </div>
        </div>
      ))}
    </section>
  );
}
