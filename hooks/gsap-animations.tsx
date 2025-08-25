import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export function useGsapTextSplit() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // Split to caracter
      const split = new SplitText(textRef.current, { type: "chars" });

      // Animation GSAP
      const anim = gsap.from(split.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.out",
      });
      return () => {
        anim.kill(); // stop animation
        split.revert(); // normal text
      };
    }
  }, []);

  return textRef;
}

export function useGsapFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(ref.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
    });
  }, []);

  return ref;
}
