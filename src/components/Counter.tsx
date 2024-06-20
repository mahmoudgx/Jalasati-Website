import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-5 md:px-20 md:py-10 text-center bg-[#207FBF] text-white font-semibold">
      <div className="mb-5 md:mb-0">
        <h1 className="text-5xl">
          <CountUp end={150} duration={2} />+
        </h1>
        <p className="text-2xl md:text-3xl">افضل الشركاء</p>
      </div>
      <div className="mb-5 md:mb-0">
        <h1 className="text-5xl">
          <CountUp end={100} duration={2} />+
        </h1>
        <p className="text-2xl md:text-3xl">مقدمين خدمات</p>
      </div>
      <div className="mb-5 md:mb-0">
        <h1 className="text-5xl">
          <CountUp end={350} duration={2} />+
        </h1>
        <p className="text-2xl md:text-3xl">الزوار شهريا</p>
      </div>
      <div>
        <h1 className="text-5xl">
          <CountUp end={175} duration={2} />+
        </h1>
        <p className="text-2xl md:text-3xl">العملاء</p>
      </div>
    </div>
  );
};

export default Counter;
