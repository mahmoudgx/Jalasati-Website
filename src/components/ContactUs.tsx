import contactimage from "../assets/contact.png";

const ContactUs = () => {
  return (
    <div id="تواصل_معنا" className="px-5 py-10 md:p-20">
      <div className="text-center text-3xl md:text-5xl font-bold text-[#207FBF] mb-10 md:mb-20">
        <h1>اترك لنا رسالتك وسيتم التواصل معك..</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-0">
        <div className="order-2 md:order-1 flex flex-col space-y-5">
          <input
            className="border-2 border-blue-500 p-3 rounded-lg"
            type="text"
            placeholder="الاسم رياعي"
          />
          <input
            className="border-2 border-blue-500 p-3 rounded-lg"
            type="email"
            placeholder="الايميل"
          />
          <textarea
            className="border-2 border-blue-500 p-3 rounded-lg"
            rows={7}
            placeholder="رسالتك"
          ></textarea>
          <button className="text-white bg-blue-500 py-4 rounded-xl text-lg">
            ارسال
          </button>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
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
