import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import contactimage from "../assets/contact.png";

const ContactUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        ".contact-us-form",
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".contact-us-image",
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }
  }, [inView]);

  return (
    <div id="تواصل_معنا" className="px-5 py-10 md:p-20">
      <div className="text-center text-3xl md:text-5xl font-bold text-[#207FBF]">
        <h1>اترك لنا رسالتك وسيتم التواصل معك..</h1>
      </div>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-5"
      >
        <div className="order-2 md:order-1 flex flex-col space-y-5 contact-us-form">
          <input
            className="border-2 border-[#207FBF] p-3 rounded-lg"
            type="text"
            placeholder="الاسم رياعي"
          />
          <input
            className="border-2 border-[#207FBF] p-3 rounded-lg"
            type="email"
            placeholder="الايميل"
          />
          <textarea
            className="border-2 border-[#207FBF] p-3 rounded-lg"
            rows={7}
            placeholder="رسالتك"
          ></textarea>
          <button className="text-white bg-[#207FBF] py-4 rounded-xl text-lg">
            ارسال
          </button>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end contact-us-image">
          <img
            className="w-full md:w-[500px]"
            src={contactimage}
            alt="Contact Us"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
