import { FaFacebook, FaGoogle, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#201B2F] text-white px-5 md:px-20 pt-10 pb-5">
      <div className="text-white flex flex-col md:flex-row justify-between items-center">
        <div className="mb-5 md:mb-0">
          <h1 className="text-3xl font-bold">جلستي</h1>
        </div>
        <div className="flex flex-col items-center mb-5 md:mb-0">
          <h1 className="text-xl font-semibold">يمكنك متابعتنا عبر</h1>
          <div className="flex space-x-5 space-x-reverse text-xl mt-5">
            <FaFacebook />
            <FaXTwitter />
            <FaGoogle />
            <FaWhatsapp />
            <FaYoutube />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-semibold">يمكنك تحميل التطبيق من خلال</h1>
          <div className="flex space-x-5 space-x-reverse mt-5">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="App Store"
              className="w-24 md:w-auto"
            />
            <img
              width={135}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play Store"
              className="w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-10 justify-between">
        <div className="list-none text-lg space-y-5 mb-5 md:mb-0">
          <ul className="text-xl font-semibold">الشركة</ul>
          <li className="underline">كيف تحصل علي جلسة مجانية؟</li>
          <li className="underline">الشروط والاحكام</li>
        </div>
        <div className="list-none text-lg space-y-5 mb-5 md:mb-0">
          <ul className="text-xl font-semibold">روابط سريعة</ul>
          <li className="underline">فيسبوك</li>
          <li className="underline">واتساب</li>
          <li className="underline">انستغرام</li>
        </div>
        <div className="list-none text-lg space-y-5 mb-5 md:mb-0">
          <ul className="text-xl font-semibold">تواصل معنا</ul>
          <li>Hello@jalasati.com</li>
          <li>Info@jalasati.com</li>
        </div>
        <div className="list-none text-lg space-y-5">
          <ul className="text-xl font-semibold">معلومات عنا</ul>
          <li className="underline">سياسة الخصوصية</li>
          <li className="underline">عن جلستي</li>
          <li className="underline">خدماتنا</li>
          <li className="underline">ادعمنا</li>
        </div>
      </div>
      <div className="text-center font-semibold text-lg mt-10 md:mt-5">
        <h1>كل الحقوق محفوظة © 2024 لدى شركة جلستي.</h1>
      </div>
    </footer>
  );
};

export default Footer;
