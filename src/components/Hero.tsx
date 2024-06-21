import { useEffect } from "react";
import { gsap } from "gsap";
import mobile from "../assets/mobile.png";

const Hero = () => {
  useEffect(() => {
    // Image animation
    gsap.fromTo(
      ".hero-image",
      { x: 100, opacity: 0 },
      { duration: 1, x: 0, opacity: 1, ease: "power3.out" }
    );

    // Heading animation
    gsap.fromTo(
      ".hero-heading",
      { y: -50, opacity: 0 },
      { duration: 1, y: 0, opacity: 1, delay: 0.5, ease: "power3.out" }
    );

    // Paragraphs animation
    gsap.fromTo(
      ".hero-paragraph",
      { y: -50, opacity: 0 },
      {
        duration: 1,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power3.out",
        stagger: 0.3,
      }
    );

    // Button animation
    gsap.fromTo(
      ".hero-button",
      { scale: 0.8, opacity: 0 },
      { duration: 1, scale: 1, opacity: 1, delay: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-20 items-center gap-5">
      <div className="hero-image md:order-2">
        <img src={mobile} alt="App Screenshot" />
      </div>
      <div className="space-y-5 md:order-1">
        <h1 className="hero-heading text-[#207FBF] md:text-3xl text-lg font-medium">
          مرحبا بك في جلستي.. رفيقك في رحلة علاج طفلك
        </h1>
        <p className="hero-paragraph md:text-5xl text-3xl font-bold md:leading-snug">
          حمل دلوقتي تطبيق
          <br />
          جلستي واحصل على اول
          <br />
          جلسة
          <span className="text-[#207FBF]"> مجانا.</span>
        </p>
        <p className="hero-paragraph md:text-xl text-md text-[#727A83] md:leading-normal">
          حمل التطبيق دلوقتي واستمتع باول جلسة مجانا!
          <br />
          وتابع تطور طفلك من خلال التواصل مع افضل
          <br />
          الاخصائيين عبر التطبيق.
        </p>
        <button className="hero-button w-full md:w-[50%] py-3 border-[#207FBF] text-2xl text-[#207FBF] rounded-lg border-2">
          تحميل التطبيق
        </button>
      </div>
    </div>
  );
};

export default Hero;
