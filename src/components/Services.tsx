import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, [inView]);

  return (
    <div id="الخدمات" className="px-5 py-10 ">
      <div className="text-center text-3xl md:text-5xl font-bold text-[#207FBF] md:mb-0 mb-10">
        <h1>الخدمات التي نقدمها</h1>
      </div>
      <div
        ref={ref}
        className="flex flex-wrap justify-center gap-5 md:gap-10 md:p-20"
      >
        <ServiceCard
          className="service-card"
          imageSrc="https://www.svgrepo.com/show/284226/medical-search.svg"
          title="افضل الاخصائيين"
          description="لدينا افضل الاخصائيين في جميع التخصصات"
        />
        <ServiceCard
          className="service-card"
          imageSrc="https://www.svgrepo.com/show/284171/ambulance.svg"
          title="جلسة تشخيص"
          description="احجز دلوقتي جلسة تشخيص وتقييم ابنك<br/> لمعرفة مسار العلاج بشكل صحيح ودقيق"
        />
        <ServiceCard
          className="service-card"
          imageSrc="https://www.svgrepo.com/show/284173/medical-history-doctor.svg"
          title="جلسات عن بعد"
          description="دلوقتي تقدر تحجز جلسة طفلك من خلال التطبيق<br/> و متابعة تطوره من مكانك"
        />
        <ServiceCard
          className="service-card"
          imageSrc="https://www.svgrepo.com/show/284185/doctor.svg"
          title="جلسات منزلية"
          description="يمكنكم الدخول من خلال التطبيق وعرض الاخصائيين<br/> المتاحين ثم اختيار جلسة منزلية وحجز جلسة لطفلك"
        />
      </div>
    </div>
  );
};

export default Services;
