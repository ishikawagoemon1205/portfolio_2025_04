"use client";

import { BLACK_MODEL_COLOR, BACKGROUND_WHITE } from "@/_constants/colors";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navbar from "@/components/ui/navbar";
import HomePage1 from "@/components/homecontents/page1";
import HomePage2 from "@/components/homecontents/page2";
import HomePage3 from "@/components/homecontents/page3";
import HomePage4 from "@/components/homecontents/page4";
import HomePage5 from "@/components/homecontents/page5";
import HomePage6 from "@/components/homecontents/page6";
import HomePage7 from "@/components/homecontents/page7";
import HomePage11 from "@/components/homecontents/page11";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const Page1_ref = useRef(null);
  const Page2_ref = useRef(null);
  const Page3_ref = useRef(null);
  const Page4_ref = useRef(null);
  const Page5_ref = useRef(null);
  const Page6_ref = useRef(null);
  const Page7_ref = useRef(null);
  const Page11_ref = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: Page1_ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(Page1_ref.current, { opacity: 0, duration: 1.5, ease: "power2.out" });

    gsap.set(Page2_ref.current, { opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Page2_ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(Page2_ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
      .to(Page2_ref.current, { opacity: 0, duration: 1.5, ease: "power2.out" });

    gsap.set(Page3_ref.current, { opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Page3_ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(Page3_ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
      .to(Page3_ref.current, { opacity: 0, duration: 1.5, ease: "power2.out" });

    gsap.set(Page4_ref.current, { opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Page4_ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(Page4_ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
      .to(Page4_ref.current, { opacity: 0, duration: 1.5, ease: "power2.out" });

    gsap.set(Page5_ref.current, { opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Page5_ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(Page5_ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
      .to(Page5_ref.current, { opacity: 0, duration: 1.5, ease: "power2.out" });

    gsap.set(Page6_ref.current, { opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Page6_ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(Page6_ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
      .to(Page6_ref.current, { opacity: 0, duration: 1.5, ease: "power2.out" });

    gsap.set(Page7_ref.current, { opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Page7_ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(Page7_ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
      .to(Page7_ref.current, { opacity: 0, duration: 1.5, ease: "power2.out" });

    gsap.set(Page11_ref.current, { opacity: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: Page11_ref.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(Page11_ref.current, { opacity: 1, duration: 1.5, ease: "power2.out" })
      .to(Page11_ref.current, { opacity: 0, duration: 1.5, ease: "power2.out" });
  });

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: `${BACKGROUND_WHITE}`,
        color: BLACK_MODEL_COLOR,
      }}
    >
      <Navbar />
      <div className="">
        <div className="w-full h-screen flex items-center justify-center">
          <div ref={Page1_ref} className="w-full max-w-[1024px] h-[100%]">
            <HomePage1 />
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <div ref={Page2_ref} className="w-full max-w-[1024px] h-[100%]">
            <HomePage2 />
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <div ref={Page3_ref} className="w-full max-w-[1024px] h-[100%]">
            <HomePage3 />
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <div ref={Page4_ref} className="w-full max-w-[1024px] h-[100%]">
            <HomePage4 />
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <div ref={Page5_ref} className="w-full max-w-[1024px] h-[100%]">
            <HomePage5 />
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <div ref={Page6_ref} className="w-full max-w-[1024px] h-[100%]">
            <HomePage6 />
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <div ref={Page7_ref} className="w-full max-w-[1024px] h-[100%]">
            <HomePage7 />
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center">
          <div ref={Page11_ref} className="w-full max-w-[1024px] h-[100%]">
            <HomePage11 />
          </div>
        </div>
        <div className="w-full h-screen"></div>
      </div>
    </div>
  );
}
