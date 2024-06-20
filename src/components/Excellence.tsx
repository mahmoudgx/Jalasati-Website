import doctor from "../assets/doctor.png";

const Excellence = () => {
  return (
    <div id="الاخصائيين" className="px-5 py-10 md:p-20">
      <div className="text-center text-3xl md:text-5xl font-bold text-[#207FBF]  mb-10 md:mb-20">
        <h1>ما الذي يمييزنا</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:space-x-20 md:space-x-reverse">
        <div className="order-2 md:order-1 text-xl md:text-4xl font-bold space-y-3 md:space-y-6">
          <h1>1. افضل الاخصائيين</h1>
          <h1>2. موارد وانشطه تدريبية</h1>
          <h1>3. تقارير دورية</h1>
          <h1>4. مواعيد مرنة</h1>
          <h1>5. امان وخصوصية</h1>
          <h1>6. دعم فني متاح دوما</h1>
        </div>
        <div className="order-1 md:order-2">
          <img
            className="border-2 border-blue-500 w-full md:w-[600px] rounded-2xl"
            style={{ borderRadius: "0 25% 25% 25%" }}
            src={doctor}
            alt="Doctor"
          />
        </div>
      </div>
    </div>
  );
};

export default Excellence;
