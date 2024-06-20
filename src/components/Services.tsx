import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div id="الخدمات" className="px-5 py-10 ">
      <div className="text-center text-3xl md:text-5xl font-bold text-[#207FBF] md:mb-0 mb-10">
        <h1>الخدمات التي نقدمها</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-5 md:gap-10 md:p-20">
        <ServiceCard
          imageSrc="https://www.svgrepo.com/show/284226/medical-search.svg"
          title="افضل الاخصائيين"
          description="لدينا افضل الاخصائيين في جميع التخصصات"
        />
        <ServiceCard
          imageSrc="https://www.svgrepo.com/show/284171/ambulance.svg"
          title="جلسة تشخيص"
          description="احجز دلوقتي جلسة تشخيص وتقييم ابنك<br/> لمعرفة مسار العلاج بشكل صحيح ودقيق"
        />
        <ServiceCard
          imageSrc="https://www.svgrepo.com/show/284173/medical-history-doctor.svg"
          title="جلسات عن بعد"
          description="دلوقتي تقدر تحجز جلسة طفلك من خلال التطبيق<br/> و متابعة تطوره من مكانك"
        />
        <ServiceCard
          imageSrc="https://www.svgrepo.com/show/284185/doctor.svg"
          title="جلسات منزلية"
          description="يمكنكم الدخول من خلال التطبيق وعرض الاخصائيين<br/> المتاحين ثم اختيار جلسة منزلية وحجز جلسة لطفلك"
        />
      </div>
    </div>
  );
};

export default Services;
