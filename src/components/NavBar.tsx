import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between p-5 md:p-10 border-b-2 border-[#207FBF] items-center">
      <div className="flex justify-between w-full md:w-auto">
        <h1 className="text-xl text-[#207FBF]">جلستي</h1>
        <button
          className="md:hidden text-3xl text-[#207FBF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>
      <div
        className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-reverse text-[#727A83] text-xl items-center md:space-x-10">
          <a href="#">
            <li className="hover:bg-[#207FBF] hover:text-white active:bg-[#207FBF] active:text-white p-3 hover:rounded-xl">
              الرئسية
            </li>
          </a>
          <a href="#الخدمات">
            <li className="hover:bg-[#207FBF] hover:text-white active:bg-[#207FBF] active:text-white p-3 hover:rounded-xl">
              الخدمات
            </li>
          </a>
          <a href="#الاخصائيين">
            <li className="hover:bg-[#207FBF] hover:text-white active:bg-[#207FBF] active:text-white p-3 hover:rounded-xl">
              الاخصائيين
            </li>
          </a>
          <a href="#تواصل_معنا">
            <li className="hover:bg-[#207FBF] hover:text-white active:bg-[#207FBF] active:text-white p-3 hover:rounded-xl">
              تواصل معنا
            </li>
          </a>
          <li className="md:hidden mt-3">
            <button className="border-2 border-[#207FBF] text-[#207FBF] bg-white px-5 py-3 rounded-xl">
              تسجيل دخول
            </button>
          </li>
        </ul>
      </div>
      <div className="hidden md:block text-xl">
        <button className="border-2 border-[#207FBF] text-[#207FBF] bg-white px-5 py-3 rounded-xl">
          تسجيل دخول
        </button>
      </div>
    </div>
  );
};

export default NavBar;