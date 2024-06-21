import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ imageSrc, title, description, className }: Props) => {
  return (
    <div className={`flex justify-center w-full md:w-auto ${className}`}>
      <div className="bg-[#D5F0EF] w-full max-w-xs md:max-w-md h-auto rounded-lg shadow-xl py-10 text-center space-y-10">
        <img
          className="flex justify-center mx-auto"
          width={80}
          src={imageSrc}
          alt={title}
        />
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        <p
          className="font-thin text-lg md:text-xl px-5 md:px-10"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div className="flex justify-center items-center space-x-2 space-x-reverse">
          <div className="bg-[#207FBF] p-3 rounded-full">
            <FaArrowRight className="text-white" />
          </div>
          <h1 className="text-lg md:text-xl">عرض المزيد</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
