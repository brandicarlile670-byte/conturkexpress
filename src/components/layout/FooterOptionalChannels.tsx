export default function FooterOptionalChannels() {
  return (
    <div className="mt-10 max-w-xs">
      <p className="font-bold text-neutral-600 dark:text-neutral-300">Mobile App</p>
      <div className="mt-4 flex flex-col gap-2.5">
        <a href="https://apps.apple.com/us/app/conturk-shipping/id6752247281" target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" className="group inline-flex items-center gap-3 rounded-xl border border-neutral-700/80 bg-neutral-950 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-500 hover:shadow-lg dark:border-neutral-700 dark:bg-black dark:hover:border-neutral-500 px-3 py-2 w-fit">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="shrink-0 h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
          </svg>
          <span className="flex flex-col text-left leading-tight"><span className="text-neutral-400 text-[9px]">Download on the</span><span className="font-semibold text-xs">App Store</span></span>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.conturk.customersupport" target="_blank" rel="noopener noreferrer" aria-label="GET IT ON Google Play" className="group inline-flex items-center gap-3 rounded-xl border border-neutral-700/80 bg-neutral-950 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-500 hover:shadow-lg dark:border-neutral-700 dark:bg-black dark:hover:border-neutral-500 px-3 py-2 w-fit">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="shrink-0 h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path>
          </svg>
          <span className="flex flex-col text-left leading-tight"><span className="text-neutral-400 text-[9px]">GET IT ON</span><span className="font-semibold text-xs">Google Play</span></span>
        </a>
      </div>
      <div className="mt-5 flex gap-3">
        <div className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 p-3">
          <div className="rounded-lg bg-white p-2 ring-1 ring-neutral-200"><img src="/images/wechat.jpg" alt="WeChat" width="72" height="72" draggable="false" className="select-none object-contain" style={{width: "72px", height: "72px"}} /></div>
          <div className="flex items-center gap-1.5 mt-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="h-3.5 w-3.5" style={{color: "#07C160"}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"></path>
            </svg>
            <span className="font-semibold text-neutral-800 dark:text-neutral-100 text-xs">WeChat</span>
          </div>
        </div>
        <div className="group flex flex-col items-center rounded-2xl border border-neutral-200 bg-white text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 p-3">
          <div className="rounded-lg bg-white p-2 ring-1 ring-neutral-200"><img src="/images/whatsapp.jpg" alt="WhatsApp" width="72" height="72" draggable="false" className="select-none object-contain" style={{width: "72px", height: "72px"}} /></div>
          <div className="flex items-center gap-1.5 mt-2">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="h-3.5 w-3.5" style={{color: "#25D366"}} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
            </svg>
            <span className="font-semibold text-neutral-800 dark:text-neutral-100 text-xs">WhatsApp</span>
          </div>
        </div>
      </div>
    </div>
  );
}
