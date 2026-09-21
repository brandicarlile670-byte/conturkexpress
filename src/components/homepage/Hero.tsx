import TrackingForm from "@/components/tracking/TrackingForm";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[82vh] items-center overflow-hidden md:min-h-[86vh]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <img
          src="/images/route-network.svg"
          alt=""
          draggable="false"
          className="h-full w-full object-cover object-[58%_38%] opacity-[0.42] brightness-[0.8] select-none sm:object-[72%_38%] dark:opacity-[0.6] dark:brightness-[0.3]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/55 via-transparent to-white/55 dark:from-neutral-950/60 dark:via-transparent dark:to-neutral-950/60"></div>
        <svg
          aria-hidden="true"
          width="2000"
          height="857"
          viewBox="0 0 2000 857"
          fill="none"
          className="absolute top-0 left-0 max-w-none opacity-0 motion-safe:animate-fade-in motion-reduce:opacity-100"
          style={{
            transformOrigin: "0px 0px",
            transform: "translate(-650.431px, 0px) scale(1.12719)",
          }}
        >
          <defs>
            <linearGradient id="hero-lane" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1"></stop>
              <stop offset="50%" stopColor="#f87171" stopOpacity="0.85"></stop>
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1"></stop>
            </linearGradient>
            <filter
              id="hero-pencil"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.09"
                numOctaves="3"
                seed="11"
                result="grain"
              ></feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="grain"
                scale="1.1"
                xChannelSelector="R"
                yChannelSelector="G"
              ></feDisplacementMap>
            </filter>
          </defs>
          <g>
            <path
              d="M 1645.8 301.6 Q 1405.1 180.6 1142.5 240.9"
              stroke="url(#hero-lane)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            ></path>
            <g
              className="fill-none stroke-neutral-700/70 dark:stroke-neutral-200/60"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#hero-pencil)"
            >
              <path d="M -12.5 0 L 11 0 L 8.5 5 L -7.5 5 C -10.5 5 -12 2.6 -12.5 0 Z"></path>
              <path d="M -5.5 0 L -5.5 -4.2 L 2.5 -4.2 L 2.5 0 M -1.6 -4.2 L -1.6 0"></path>
              <path d="M 4.6 0 L 4.6 -5.4 L 8.2 -5.4 L 8.2 0 M 6.6 -5.4 L 6.6 -7.6"></path>
              <path d="M 12.6 1.6 L 18.5 1.6 M 13.6 4.2 L 17.6 4.2"></path>
              <animateMotion
                dur="14.399999999999999s"
                begin="0s"
                repeatCount="indefinite"
                rotate="auto-reverse"
                path="M 1645.8 301.6 Q 1405.1 180.6 1142.5 240.9"
              ></animateMotion>
            </g>
            <circle r="3" className="fill-red-300/80">
              <animateMotion
                dur="6s"
                begin="2.5s"
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="1;0"
                keyTimes="0;1"
                path="M 1645.8 301.6 Q 1405.1 180.6 1142.5 240.9"
              ></animateMotion>
            </circle>
          </g>
          <g>
            <path
              d="M 1677.0 276.9 Q 1416.2 162.6 1142.5 240.9"
              stroke="url(#hero-lane)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            ></path>
            <g
              className="fill-none stroke-neutral-700/70 dark:stroke-neutral-200/60"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#hero-pencil)"
            >
              <path d="M -12.5 0 L 11 0 L 8.5 5 L -7.5 5 C -10.5 5 -12 2.6 -12.5 0 Z"></path>
              <path d="M -5.5 0 L -5.5 -4.2 L 2.5 -4.2 L 2.5 0 M -1.6 -4.2 L -1.6 0"></path>
              <path d="M 4.6 0 L 4.6 -5.4 L 8.2 -5.4 L 8.2 0 M 6.6 -5.4 L 6.6 -7.6"></path>
              <path d="M 12.6 1.6 L 18.5 1.6 M 13.6 4.2 L 17.6 4.2"></path>
              <animateMotion
                dur="18.24s"
                begin="1.5s"
                repeatCount="indefinite"
                rotate="auto-reverse"
                path="M 1677.0 276.9 Q 1416.2 162.6 1142.5 240.9"
              ></animateMotion>
            </g>
            <circle r="3" className="fill-red-300/80">
              <animateMotion
                dur="7.6s"
                begin="3.1666666666666665s"
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="1;0"
                keyTimes="0;1"
                path="M 1677.0 276.9 Q 1416.2 162.6 1142.5 240.9"
              ></animateMotion>
            </circle>
          </g>
          <g>
            <path
              d="M 1732.7 273.5 Q 1434.4 156.0 1129.6 255.6"
              stroke="url(#hero-lane)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            ></path>
            <g
              className="fill-none stroke-neutral-700/70 dark:stroke-neutral-200/60"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#hero-pencil)"
            >
              <path d="M -12.5 0 L 11 0 L 8.5 5 L -7.5 5 C -10.5 5 -12 2.6 -12.5 0 Z"></path>
              <path d="M -5.5 0 L -5.5 -4.2 L 2.5 -4.2 L 2.5 0 M -1.6 -4.2 L -1.6 0"></path>
              <path d="M 4.6 0 L 4.6 -5.4 L 8.2 -5.4 L 8.2 0 M 6.6 -5.4 L 6.6 -7.6"></path>
              <path d="M 12.6 1.6 L 18.5 1.6 M 13.6 4.2 L 17.6 4.2"></path>
              <animateMotion
                dur="22.08s"
                begin="3s"
                repeatCount="indefinite"
                rotate="auto-reverse"
                path="M 1732.7 273.5 Q 1434.4 156.0 1129.6 255.6"
              ></animateMotion>
            </g>
            <circle r="3" className="fill-red-300/80">
              <animateMotion
                dur="9.2s"
                begin="3.833333333333333s"
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="1;0"
                keyTimes="0;1"
                path="M 1732.7 273.5 Q 1434.4 156.0 1129.6 255.6"
              ></animateMotion>
            </circle>
          </g>
          <g>
            <path
              d="M 1592.2 539.9 Q 1430.6 327.1 1170.4 266.0"
              stroke="url(#hero-lane)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            ></path>
            <g
              className="fill-none stroke-neutral-700/70 dark:stroke-neutral-200/60"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#hero-pencil)"
            >
              <path d="M -12.5 0 L 11 0 L 8.5 5 L -7.5 5 C -10.5 5 -12 2.6 -12.5 0 Z"></path>
              <path d="M -5.5 0 L -5.5 -4.2 L 2.5 -4.2 L 2.5 0 M -1.6 -4.2 L -1.6 0"></path>
              <path d="M 4.6 0 L 4.6 -5.4 L 8.2 -5.4 L 8.2 0 M 6.6 -5.4 L 6.6 -7.6"></path>
              <path d="M 12.6 1.6 L 18.5 1.6 M 13.6 4.2 L 17.6 4.2"></path>
              <animateMotion
                dur="14.399999999999999s"
                begin="4.5s"
                repeatCount="indefinite"
                rotate="auto-reverse"
                path="M 1592.2 539.9 Q 1430.6 327.1 1170.4 266.0"
              ></animateMotion>
            </g>
            <circle r="3" className="fill-red-300/80">
              <animateMotion
                dur="6s"
                begin="2.5s"
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="1;0"
                keyTimes="0;1"
                path="M 1592.2 539.9 Q 1430.6 327.1 1170.4 266.0"
              ></animateMotion>
            </circle>
          </g>
          <g>
            <path
              d="M 1561.9 481.8 Q 1386.5 290.9 1129.6 255.6"
              stroke="url(#hero-lane)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            ></path>
            <g
              className="fill-none stroke-neutral-700/70 dark:stroke-neutral-200/60"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#hero-pencil)"
            >
              <path d="M -12.5 0 L 11 0 L 8.5 5 L -7.5 5 C -10.5 5 -12 2.6 -12.5 0 Z"></path>
              <path d="M -5.5 0 L -5.5 -4.2 L 2.5 -4.2 L 2.5 0 M -1.6 -4.2 L -1.6 0"></path>
              <path d="M 4.6 0 L 4.6 -5.4 L 8.2 -5.4 L 8.2 0 M 6.6 -5.4 L 6.6 -7.6"></path>
              <path d="M 12.6 1.6 L 18.5 1.6 M 13.6 4.2 L 17.6 4.2"></path>
              <animateMotion
                dur="18.24s"
                begin="6s"
                repeatCount="indefinite"
                rotate="auto-reverse"
                path="M 1561.9 481.8 Q 1386.5 290.9 1129.6 255.6"
              ></animateMotion>
            </g>
            <circle r="3" className="fill-red-300/80">
              <animateMotion
                dur="7.6s"
                begin="3.1666666666666665s"
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="1;0"
                keyTimes="0;1"
                path="M 1561.9 481.8 Q 1386.5 290.9 1129.6 255.6"
              ></animateMotion>
            </circle>
          </g>
          <g>
            <path
              d="M 1576.1 492.7 Q 1414.1 306.4 1170.4 266.0"
              stroke="url(#hero-lane)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            ></path>
            <g
              className="fill-none stroke-neutral-700/70 dark:stroke-neutral-200/60"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#hero-pencil)"
            >
              <path d="M -12.5 0 L 11 0 L 8.5 5 L -7.5 5 C -10.5 5 -12 2.6 -12.5 0 Z"></path>
              <path d="M -5.5 0 L -5.5 -4.2 L 2.5 -4.2 L 2.5 0 M -1.6 -4.2 L -1.6 0"></path>
              <path d="M 4.6 0 L 4.6 -5.4 L 8.2 -5.4 L 8.2 0 M 6.6 -5.4 L 6.6 -7.6"></path>
              <path d="M 12.6 1.6 L 18.5 1.6 M 13.6 4.2 L 17.6 4.2"></path>
              <animateMotion
                dur="22.08s"
                begin="7.5s"
                repeatCount="indefinite"
                rotate="auto-reverse"
                path="M 1576.1 492.7 Q 1414.1 306.4 1170.4 266.0"
              ></animateMotion>
            </g>
            <circle r="3" className="fill-red-300/80">
              <animateMotion
                dur="9.2s"
                begin="3.833333333333333s"
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="1;0"
                keyTimes="0;1"
                path="M 1576.1 492.7 Q 1414.1 306.4 1170.4 266.0"
              ></animateMotion>
            </circle>
          </g>
          <g>
            <path
              d="M 1137.3 239.2 Q 1154.0 220.0 1179.1 215.9"
              stroke="url(#hero-lane)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            ></path>
            <circle r="4.5" className="fill-red-400/90">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path="M 1137.3 239.2 Q 1154.0 220.0 1179.1 215.9"
              ></animateMotion>
            </circle>
            <circle r="3" className="fill-red-300/80">
              <animateMotion
                dur="6s"
                begin="2.5s"
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="1;0"
                keyTimes="0;1"
                path="M 1137.3 239.2 Q 1154.0 220.0 1179.1 215.9"
              ></animateMotion>
            </circle>
          </g>
          <g>
            <path
              d="M 1170.4 266.0 Q 1244.1 274.2 1295.7 327.4"
              stroke="url(#hero-lane)"
              strokeWidth="2.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            ></path>
            <circle r="4.5" className="fill-red-400/90">
              <animateMotion
                dur="7.6s"
                repeatCount="indefinite"
                path="M 1170.4 266.0 Q 1244.1 274.2 1295.7 327.4"
              ></animateMotion>
            </circle>
            <circle r="3" className="fill-red-300/80">
              <animateMotion
                dur="7.6s"
                begin="3.1666666666666665s"
                repeatCount="indefinite"
                calcMode="linear"
                keyPoints="1;0"
                keyTimes="0;1"
                path="M 1170.4 266.0 Q 1244.1 274.2 1295.7 327.4"
              ></animateMotion>
            </circle>
          </g>
        </svg>
        <span
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 shadow-[0_0_10px_2px_rgba(248,113,113,0.25)] dark:bg-red-400/60"
          style={{ left: "1204.71px", top: "339.921px" }}
        ></span>
        <span
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 shadow-[0_0_10px_2px_rgba(248,113,113,0.25)] dark:bg-red-400/60"
          style={{ left: "1239.9px", top: "312.072px" }}
        ></span>
        <span
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 shadow-[0_0_10px_2px_rgba(248,113,113,0.25)] dark:bg-red-400/60"
          style={{ left: "1302.67px", top: "308.27px" }}
        ></span>
        <span
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 shadow-[0_0_10px_2px_rgba(248,113,113,0.25)] dark:bg-red-400/60"
          style={{ left: "1144.29px", top: "608.576px" }}
        ></span>
        <span
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 shadow-[0_0_10px_2px_rgba(248,113,113,0.25)] dark:bg-red-400/60"
          style={{ left: "1126.09px", top: "555.392px" }}
        ></span>
        <span
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 shadow-[0_0_10px_2px_rgba(248,113,113,0.25)] dark:bg-red-400/60"
          style={{ left: "1110.11px", top: "543.086px" }}
        ></span>
        <span
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 shadow-[0_0_10px_2px_rgba(248,113,113,0.25)] dark:bg-red-400/60"
          style={{ left: "678.609px", top: "243.336px" }}
        ></span>
        <span
          className="absolute block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/60 shadow-[0_0_10px_2px_rgba(248,113,113,0.25)] dark:bg-red-400/60"
          style={{ left: "810.063px", top: "368.996px" }}
        ></span>
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "631.533px", top: "269.664px" }}
        >
          <span className="absolute inset-0 rounded-full bg-red-400/50 motion-safe:animate-ping [animation-duration:2.8s]"></span>
          <span className="relative block rounded-full bg-red-600 ring-2 ring-white/80 dark:bg-red-400 dark:ring-neutral-950/80 h-2.5 w-2.5"></span>
          <span className="absolute hidden w-max rounded bg-white/70 px-1 py-px text-[10px] font-semibold tracking-wide text-neutral-700 uppercase backdrop-blur-[2px] xl:block dark:bg-neutral-950/60 dark:text-neutral-200 right-full mr-2 top-1/2 -translate-y-1/2">
            Istanbul
          </span>
        </span>
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "668.876px", top: "299.877px" }}
        >
          <span className="relative block rounded-full bg-red-600 ring-2 ring-white/80 dark:bg-red-400 dark:ring-neutral-950/80 h-2 w-2"></span>
          <span className="absolute hidden w-max rounded bg-white/70 px-1 py-px text-[10px] font-semibold tracking-wide text-neutral-700 uppercase backdrop-blur-[2px] xl:block dark:bg-neutral-950/60 dark:text-neutral-200 left-1/2 -translate-x-1/2 top-full mt-1.5">
            Mersin
          </span>
        </span>
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "637.335px", top: "271.486px" }}
        >
          <span className="relative block rounded-full bg-red-600 ring-2 ring-white/80 dark:bg-red-400 dark:ring-neutral-950/80 h-2 w-2"></span>
          <span className="absolute hidden w-max rounded bg-white/70 px-1 py-px text-[10px] font-semibold tracking-wide text-neutral-700 uppercase backdrop-blur-[2px] xl:block dark:bg-neutral-950/60 dark:text-neutral-200 left-1/2 -translate-x-1/2 bottom-full mb-6">
            İzmit
          </span>
        </span>
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "622.856px", top: "288.089px" }}
        >
          <span className="relative block rounded-full bg-red-600 ring-2 ring-white/80 dark:bg-red-400 dark:ring-neutral-950/80 h-2 w-2"></span>
          <span className="absolute hidden w-max rounded bg-white/70 px-1 py-px text-[10px] font-semibold tracking-wide text-neutral-700 uppercase backdrop-blur-[2px] xl:block dark:bg-neutral-950/60 dark:text-neutral-200 right-full mr-2 top-1/2 -translate-y-1/2">
            İzmir
          </span>
        </span>
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "694.595px", top: "269.787px" }}
        >
          <span className="relative block rounded-full bg-red-600 ring-2 ring-white/80 dark:bg-red-400 dark:ring-neutral-950/80 h-2 w-2"></span>
          <span className="absolute hidden w-max rounded bg-white/70 px-1 py-px text-[10px] font-semibold tracking-wide text-neutral-700 uppercase backdrop-blur-[2px] xl:block dark:bg-neutral-950/60 dark:text-neutral-200 left-full ml-2 top-1/2 -translate-y-1/2">
            Trabzon
          </span>
        </span>
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "674.391px", top: "267.766px" }}
        >
          <span className="relative block rounded-full bg-red-600 ring-2 ring-white/80 dark:bg-red-400 dark:ring-neutral-950/80 h-2 w-2"></span>
          <span className="absolute hidden w-max rounded bg-white/70 px-1 py-px text-[10px] font-semibold tracking-wide text-neutral-700 uppercase backdrop-blur-[2px] xl:block dark:bg-neutral-950/60 dark:text-neutral-200 left-1/2 -translate-x-1/2 bottom-full mb-1">
            Samsun
          </span>
        </span>
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "678.32px", top: "301.404px" }}
        >
          <span className="relative block rounded-full bg-red-600 ring-2 ring-white/80 dark:bg-red-400 dark:ring-neutral-950/80 h-2 w-2"></span>
          <span className="absolute hidden w-max rounded bg-white/70 px-1 py-px text-[10px] font-semibold tracking-wide text-neutral-700 uppercase backdrop-blur-[2px] xl:block dark:bg-neutral-950/60 dark:text-neutral-200 left-full ml-2 top-1/2 -translate-y-1/2">
            İskenderun
          </span>
        </span>
        <span
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: "645.316px", top: "299.274px" }}
        >
          <span className="relative block rounded-full bg-red-600 ring-2 ring-white/80 dark:bg-red-400 dark:ring-neutral-950/80 h-2 w-2"></span>
          <span className="absolute hidden w-max rounded bg-white/70 px-1 py-px text-[10px] font-semibold tracking-wide text-neutral-700 uppercase backdrop-blur-[2px] xl:block dark:bg-neutral-950/60 dark:text-neutral-200 right-full mr-2 top-full mt-0.5">
            Antalya
          </span>
        </span>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ opacity: "1" }}
        >
          <div
            className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
            style={{ transform: "translateX(99.6719px)" }}
          >
            <div
              style={{
                transform: "translateY(-350px) rotate(-45deg)",
                background:
                  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
                width: "560px",
                height: "1380px",
              }}
              className="absolute top-0 left-0"
            ></div>
            <div
              style={{
                transform: "rotate(-45deg) translate(5%, -50%)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
                width: "240px",
                height: "1380px",
              }}
              className="absolute top-0 left-0 origin-top-left"
            ></div>
            <div
              style={{
                transform: "rotate(-45deg) translate(-180%, -70%)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
                width: "240px",
                height: "1380px",
              }}
              className="absolute top-0 left-0 origin-top-left"
            ></div>
          </div>
          <div
            className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
            style={{ transform: "translateX(-99.6719px)" }}
          >
            <div
              style={{
                transform: "translateY(-350px) rotate(45deg)",
                background:
                  "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
                width: "560px",
                height: "1380px",
              }}
              className="absolute top-0 right-0"
            ></div>
            <div
              style={{
                transform: "rotate(45deg) translate(-5%, -50%)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
                width: "240px",
                height: "1380px",
              }}
              className="absolute top-0 right-0 origin-top-right"
            ></div>
            <div
              style={{
                transform: "rotate(45deg) translate(180%, -70%)",
                background:
                  "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
                width: "240px",
                height: "1380px",
              }}
              className="absolute top-0 right-0 origin-top-right"
            ></div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[46rem] max-w-full -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl dark:bg-red-500/10"
        style={{
          transform:
            "translateX(-46.0274%) translateY(17.8767px) scale(1.07945)",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 right-1/4 -z-10 h-56 w-56 rounded-full bg-[#f17463]/10 blur-3xl"
        style={{
          transform:
            "translateX(14.4381px) translateY(-16.7505px) scale(0.92781)",
        }}
      ></div>
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_70%)] [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:28px_28px] dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)]"></div>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pt-28 pb-16 sm:px-6 md:pt-32 md:pb-24 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-9 xl:gap-x-16">
        <div className="flex flex-col items-center text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
          <div style={{ opacity: "1", transform: "none" }}>
            <span
              data-slot="badge"
              className="inline-flex items-center justify-center text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 rounded-full border border-neutral-200 px-3 py-1 backdrop-blur dark:border-neutral-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-ship mr-1.5 h-3.5 w-3.5 text-red-500"
                aria-hidden="true"
              >
                <path d="M12 10.189V14"></path>
                <path d="M12 2v3"></path>
                <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path>
                <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
              </svg>
              Container Shipping · NVOCC · Ship Agency
            </span>
          </div>
          <h1
            aria-label="Container shipping from Asia to Türkiye and transit onward."
            className="mt-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-neutral-800 md:text-5xl lg:text-[3.2rem] dark:text-neutral-100"
          >
            <span aria-hidden="true">
              <span className="inline-block overflow-hidden align-bottom">
                <span
                  className="inline-block"
                  style={{ opacity: "1", transform: "none" }}
                >
                  Container
                </span>
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <span
                  className="inline-block"
                  style={{ opacity: "1", transform: "none" }}
                >
                  shipping
                </span>
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <span
                  className="inline-block"
                  style={{ opacity: "1", transform: "none" }}
                >
                  from
                </span>
              </span>
              <span
                className="relative inline-block bg-gradient-to-r px-1 pb-1 rounded-lg from-red-200 to-rose-200 text-neutral-900 dark:from-red-500/70 dark:to-rose-600/70 dark:text-white"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  display: "inline",
                  backgroundSize: "100% 100%",
                }}
              >
                Asia to Türkiye
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <span
                  className="inline-block"
                  style={{ opacity: "1", transform: "none" }}
                >
                  and
                </span>
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <span
                  className="inline-block"
                  style={{ opacity: "1", transform: "none" }}
                >
                  transit
                </span>
              </span>
              <span className="inline-block overflow-hidden align-bottom">
                <span
                  className="inline-block"
                  style={{ opacity: "1", transform: "none" }}
                >
                  onward.
                </span>
              </span>
            </span>
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg dark:text-gray-400"
            style={{ opacity: "1", transform: "none" }}
          >
            FCL and LCL services from China, Korea, Vietnam, Thailand, Indonesia
            and Japan to Turkish ports — and legal, door-to-door transit through
            Mersin and Istanbul to East Europe, the Middle East and surrounding
            countries, Azerbaijan and the Arab states.
          </p>
          {/* <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center" style={{opacity: "1", transform: "none"}}>
        <a className="inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 group h-12 gap-2 rounded-xl px-7 text-base font-semibold shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5" href="#contact-strip">
          Get a Quote
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </a>
        <a href="tel:+902163252299" aria-label="Call the ConTurk operations desk" className="group flex items-center gap-3 rounded-xl border border-neutral-300 bg-white/70 px-4 py-2 text-left backdrop-blur transition-all hover:-translate-y-0.5 hover:border-red-400/60 dark:border-neutral-700 dark:bg-neutral-900/60 dark:hover:border-red-400/50">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-600 text-white transition-transform duration-300 group-hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4" aria-hidden="true">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
          </span>
          <span className="min-w-0"><span className="block text-[11px] font-medium tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Operations desk</span><span className="block text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50">+90 216 325 22 99</span></span>
        </a>
      </div> */}
          <p
            className="mt-3 text-xs text-neutral-500 dark:text-neutral-400"
            style={{ opacity: "1", transform: "none" }}
          >
            English spoken · Mon–Fri 08:30–17:30 (GMT+3)
          </p>
        </div>
        <div className="w-full lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center lg:pl-4">
          <div
            className="relative w-full"
            style={{ opacity: "1", transform: "none" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-red-500/15 blur-3xl dark:bg-red-500/20"
              style={{ transform: "scale(0.983581)" }}
            ></div>
            <div style={{ transform: "translateY(-7.97375px)" }}>
              <div className="relative overflow-hidden rounded-3xl p-px shadow-2xl shadow-red-500/10 dark:shadow-black/40">
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 aspect-square w-[150%] -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background:
                      "conic-gradient(transparent 0deg, rgba(248, 113, 113, 0) 50deg, rgba(248, 113, 113, 0.85) 130deg, rgba(255, 255, 255, 0.6) 170deg, rgba(239, 68, 68, 0.8) 215deg, rgba(248, 113, 113, 0) 300deg, transparent 360deg)",
                    transform: "rotate(86.5309deg)",
                  }}
                ></div>
                <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] border border-white/40 bg-white/70 p-5 backdrop-blur-xl sm:p-6 dark:border-white/10 dark:bg-neutral-900/60">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent dark:via-white/20"
                  ></div>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-neutral-900 sm:text-lg dark:text-neutral-50">
                        Shipment Tracking
                      </h3>
                      <p className="mt-1 text-xs text-neutral-500 sm:text-sm dark:text-neutral-400">
                        Enter a Bill of Lading or container number to see
                        real-time status.
                      </p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                      </span>
                      Online
                    </span>
                  </div>
                  <div
                    className="w-full"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <TrackingForm />
                  </div>
                  {/* Optional: uncomment to restore the Track on the go App Store / Google Play block. */}
                  {/*               <div className="mt-5 border-t border-neutral-200/70 pt-4 dark:border-white/10">
                              <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone h-3.5 w-3.5 shrink-0 text-red-600 dark:text-red-400" aria-hidden="true">
                                  <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                                  <path d="M12 18h.01"></path>
                                </svg>
                                <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-50">Track on the go</span>
                                <span className="truncate text-[11px] text-neutral-500 dark:text-neutral-400">— shipment status in the ConTurk app</span>
                              </div>
                              <div className="mt-2.5 grid grid-cols-2 gap-2">
                                <a href="https://apps.apple.com/us/app/conturk-shipping/id6752247281" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" className="group inline-flex items-center gap-3 rounded-xl border border-neutral-700/80 bg-neutral-950 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-500 hover:shadow-lg dark:border-neutral-700 dark:bg-black dark:hover:border-neutral-500 px-3 py-2 w-full">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="shrink-0 h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                                  </svg>
                                  <span className="flex flex-col text-left leading-tight"><span className="text-neutral-400 text-[9px]">Download on the</span><span className="font-semibold text-xs">App Store</span></span>
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.conturk.customersupport" target="_blank" rel="noopener noreferrer" aria-label="GET IT ON Google Play" className="group inline-flex items-center gap-3 rounded-xl border border-neutral-700/80 bg-neutral-950 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-500 hover:shadow-lg dark:border-neutral-700 dark:bg-black dark:hover:border-neutral-500 px-3 py-2 w-full">
                                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="shrink-0 h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
                                  </svg>
                                  <span className="flex flex-col text-left leading-tight"><span className="text-neutral-400 text-[9px]">GET IT ON</span><span className="font-semibold text-xs">Google Play</span></span>
                                </a>
                              </div>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center lg:col-start-1 lg:row-start-2 lg:items-start lg:text-left">
          <dl
            className="grid w-full max-w-md grid-cols-3 gap-4 sm:gap-6"
            style={{ opacity: "1", transform: "none" }}
          >
            <div className="flex flex-col">
              <dt className="sr-only">Turkish ports served</dt>
              <dd className="bg-linear-to-br from-red-600 to-rose-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-red-400 dark:to-rose-400">
                7
              </dd>
              <span className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                Turkish ports served
              </span>
            </div>
            <div className="flex flex-col border-l border-neutral-200 pl-4 sm:pl-6 dark:border-neutral-800">
              <dt className="sr-only">Countries served</dt>
              <dd className="bg-linear-to-br from-red-600 to-rose-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-red-400 dark:to-rose-400">
                30+
              </dd>
              <span className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                Countries served
              </span>
            </div>
            <div className="flex flex-col border-l border-neutral-200 pl-4 sm:pl-6 dark:border-neutral-800">
              <dt className="sr-only">Operations support</dt>
              <dd className="bg-linear-to-br from-red-600 to-rose-600 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-red-400 dark:to-rose-400">
                24/7
              </dd>
              <span className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                Operations support
              </span>
            </div>
          </dl>
          <div
            className="mt-9 w-full max-w-xl rounded-2xl border border-red-500/25 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-red-400/25 dark:bg-neutral-900/60"
            style={{ opacity: "1", transform: "none" }}
          >
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield-check h-4 w-4 shrink-0 text-red-600 dark:text-red-400"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-[11px] font-bold tracking-[0.14em] text-red-700 uppercase dark:text-red-400">
                VIP member of
              </span>
            </div>
            <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <li
                title="Financial protection programme member · Member since 2012"
                className="group flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3 py-2 transition-colors hover:border-red-400/50 dark:border-neutral-800 dark:bg-neutral-950/70 dark:hover:border-red-400/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-badge-check h-4 w-4 shrink-0 text-red-600 dark:text-red-400"
                  aria-hidden="true"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-sm leading-snug font-semibold text-balance text-neutral-900 dark:text-neutral-50">
                    WCA World
                  </span>
                  <span
                    title="Member no 69746"
                    className="block text-[10px] text-neutral-500 dark:text-neutral-400"
                  >
                    #69746
                  </span>
                </span>
                <span className="shrink-0 rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase dark:bg-red-500">
                  VIP
                </span>
              </li>
              <li
                title="Elite membership — Asia-wide vetted agent coverage · Member since 2010"
                className="group flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3 py-2 transition-colors hover:border-red-400/50 dark:border-neutral-800 dark:bg-neutral-950/70 dark:hover:border-red-400/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-badge-check h-4 w-4 shrink-0 text-red-600 dark:text-red-400"
                  aria-hidden="true"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-sm leading-snug font-semibold text-balance text-neutral-900 dark:text-neutral-50">
                    JC Trans Elite
                  </span>
                </span>
                <span className="shrink-0 rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase dark:bg-red-500">
                  VIP
                </span>
              </li>
              <li
                title="International freight forwarders alliance — vetted member network"
                className="group flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white px-3 py-2 transition-colors hover:border-red-400/50 dark:border-neutral-800 dark:bg-neutral-950/70 dark:hover:border-red-400/40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-badge-check h-4 w-4 shrink-0 text-red-600 dark:text-red-400"
                  aria-hidden="true"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="min-w-0 flex-1 text-left">
                  <span className="block text-sm leading-snug font-semibold text-balance text-neutral-900 dark:text-neutral-50">
                    WIFFA
                  </span>
                </span>
                <span className="shrink-0 rounded bg-red-600 px-1.5 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase dark:bg-red-500">
                  VIP
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center"
      >
        <div
          className="flex h-9 w-6 items-start justify-center rounded-full border border-neutral-300/70 p-1.5 dark:border-neutral-700/70"
          style={{ opacity: "1" }}
        >
          <span
            className="block h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"
            style={{ transform: "translateY(1.52695px)" }}
          ></span>
        </div>
      </div>
    </section>
  );
}
