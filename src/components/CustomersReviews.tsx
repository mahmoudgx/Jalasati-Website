import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import CustomersReviewsCard from "./CustomersReviewsCard";

const CustomersReviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".customer-review-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.3 }
      );
    }
  }, [inView]);

  return (
    <div id="اراء_عملائنا" className="px-5 py-10 md:p-20">
      <div className="text-center text-3xl md:text-5xl font-bold text-[#207FBF] mb-10 md:mb-20">
        <h1>اراء عملائنا</h1>
      </div>
      <div ref={ref} className="flex flex-wrap justify-center gap-5">
        <div className="customer-review-card">
          <CustomersReviewsCard
            description="انصح بالتعامل مع شركة جلستي بالتاكيد لديهم خبرة كبيرة في مجال رعاية الاطفال لقد تقدم مستوى طفلي بالمتابعة معهم شكرا لكم ❤️"
            name="عبدالرحمن ابراهيم"
            image="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rating={5}
          />
        </div>
        <div className="customer-review-card">
          <CustomersReviewsCard
            description="انصح بالتعامل مع شركة جلستي بالتاكيد لديهم خبرة كبيرة في مجال رعاية الاطفال لقد تقدم مستوى طفلي بالمتابعة معهم شكرا لكم ❤️"
            name="عبدالرحمن ابراهيم"
            image="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rating={5}
          />
        </div>
        <div className="customer-review-card">
          <CustomersReviewsCard
            description="انصح بالتعامل مع شركة جلستي بالتاكيد لديهم خبرة كبيرة في مجال رعاية الاطفال لقد تقدم مستوى طفلي بالمتابعة معهم شكرا لكم ❤️"
            name="عبدالرحمن ابراهيم"
            image="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rating={5}
          />
        </div>
        <div className="customer-review-card">
          <CustomersReviewsCard
            description="انصح بالتعامل مع شركة جلستي بالتاكيد لديهم خبرة كبيرة في مجال رعاية الاطفال لقد تقدم مستوى طفلي بالمتابعة معهم شكرا لكم ❤️"
            name="عبدالرحمن ابراهيم"
            image="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomersReviews;
