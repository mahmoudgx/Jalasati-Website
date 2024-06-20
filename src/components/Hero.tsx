import mobile from "../assets/mobile.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-20 items-center gap-5">
      <div className="md:order-2">
        <img src={mobile} alt="App Screenshot" />
      </div>
      <div className="space-y-5 md:order-1">
        <h1 className="text-[#207FBF] md:text-3xl text-lg font-medium">
          مرحبا بك في جلستي.. رفيقك في رحلة علاج طفلك
        </h1>
        <p className="md:text-5xl text-3xl font-bold md:leading-snug">
          حمل دلوقتي تطبيق
          <br />
          جلستي واحصل على اول
          <br />
          جلسة
          <span className="text-[#207FBF]"> مجانا.</span>
        </p>
        <p className="md:text-xl text-md text-[#727A83] md:leading-normal">
          حمل التطبيق دلوقتي واستمتع باول جلسة مجانا!
          <br />
          وتابع تطور طفلك من خلال التواصل مع افضل
          <br />
          الاخصائيين عبر التطبيق.
        </p>
        <button className="w-full md:w-[50%] py-3 border-[#207FBF] text-2xl text-[#207FBF] rounded-lg border-2">
          تحميل التطبيق
        </button>
      </div>
    </div>
  );
};

export default Hero;
