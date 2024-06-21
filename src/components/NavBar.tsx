import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("الرئسية"); // Set default active item to "الرئسية"

  const handleItemClick = (item: string) => {
    // Define item as string type
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-5 md:p-10 border-b-2 border-[#207FBF] items-center">
      <div className="flex justify-between w-full md:w-auto">
        <h1 className="text-3xl text-[#207FBF] font-bold">جلستي</h1>
        <button
          className="md:hidden text-3xl text-[#207FBF]"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
      </div>
      <div
        className={`w-full md:flex md:w-auto transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden md:opacity-100 md:max-h-screen`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-reverse text-[#727A83] text-xl items-center md:space-x-10">
          <a href="#" onClick={() => handleItemClick("الرئسية")}>
            <li
              className={`p-3 hover:bg-[#207FBF] hover:text-white active:bg-[#207FBF] active:text-white hover:rounded-xl ${
                activeItem === "الرئسية"
                  ? "bg-[#207FBF] text-white rounded-xl"
                  : ""
              }`}
            >
              الرئسية
            </li>
          </a>
          <a href="#الخدمات" onClick={() => handleItemClick("الخدمات")}>
            <li
              className={`p-3 hover:bg-[#207FBF] hover:text-white active:bg-[#207FBF] active:text-white hover:rounded-xl ${
                activeItem === "الخدمات"
                  ? "bg-[#207FBF] text-white rounded-xl"
                  : ""
              }`}
            >
              الخدمات
            </li>
          </a>
          <a href="#الاخصائيين" onClick={() => handleItemClick("الاخصائيين")}>
            <li
              className={`p-3 hover:bg-[#207FBF] hover:text-white active:bg-[#207FBF] active:text-white hover:rounded-xl ${
                activeItem === "الاخصائيين"
                  ? "bg-[#207FBF] text-white rounded-xl"
                  : ""
              }`}
            >
              الاخصائيين
            </li>
          </a>
          <a href="#تواصل_معنا" onClick={() => handleItemClick("تواصل معنا")}>
            <li
              className={`p-3 hover:bg-[#207FBF] hover:text-white active:bg-[#207FBF] active:text-white hover:rounded-xl ${
                activeItem === "تواصل معنا"
                  ? "bg-[#207FBF] text-white rounded-xl"
                  : ""
              }`}
            >
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
