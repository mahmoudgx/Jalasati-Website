import { useRef } from "react";
import Slider from "react-slick";
import StaffCard from "./StaffCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Staff.css";

const Staff = () => {
  const sliderRef = useRef<Slider | null>(null);
  const staff = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "د. محمد ناصر",
      specialization: "اخصائي اضطراب طيف التوحد",
      price: "350 EGP",
      about:
        "أستاذ واستشاري أمراض التخاطب كلية - جامعة عين شمس<br>حاصل على دورات تدريبية في امراض التخاطب وتاخر الكلام جامعة القاهرة",
      qualifications: "دكتوراه أمراض التحاطب كلية الطب - جامعة عين شمس",
      rating: 5,
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "د. أحمد علي",
      specialization: "اخصائي أمراض القلب",
      price: "400 EGP",
      about:
        "استشاري أمراض القلب في مستشفى السلام الدولي<br>حاصل على زمالة أمراض القلب من كلية الطب - جامعة القاهرة",
      qualifications: "دكتوراه أمراض القلب كلية الطب - جامعة القاهرة",
      rating: 4,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "د. ليلى أحمد",
      specialization: "اخصائية الأمراض الجلدية",
      price: "300 EGP",
      about:
        "استشارية الأمراض الجلدية في مستشفى النور التخصصي<br>حاصلة على زمالة الأمراض الجلدية من كلية الطب - جامعة الأسكندرية",
      qualifications: "دكتوراه الأمراض الجلدية كلية الطب - جامعة الأسكندرية",
      rating: 5,
    },
    {
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1681966819482-91a32b9850fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "د. سامي حسين",
      specialization: "اخصائي العظام",
      price: "450 EGP",
      about:
        "استشاري جراحة العظام في مستشفى الجزيرة الدولي<br>حاصل على زمالة جراحة العظام من كلية الطب - جامعة المنصورة",
      qualifications: "دكتوراه جراحة العظام كلية الطب - جامعة المنصورة",
      rating: 4,
    },
    // Add more staff details as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <div id="الاخصائيين" className="px-5 py-10 md:p-20 bg-[#E6F6F6]">
      <div className="text-center text-3xl md:text-5xl font-bold text-[#207FBF] mb-10">
        <h1>افضل الاخصائيين لدينا</h1>
      </div>
      <div className="relative flex justify-center items-center">
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-full md:w-[1100px] custom-slider"
        >
          {staff.map((member, index) => (
            <div key={index} className="px-2">
              <StaffCard
                imageSrc={member.imageSrc}
                name={member.name}
                specialization={member.specialization}
                price={member.price}
                about={member.about}
                qualifications={member.qualifications}
                rating={member.rating}
              />
            </div>
          ))}
        </Slider>
      </div>
      <button
        onClick={handleNextClick}
        className="absolute right-2 md:right-5 bg-[#207FBF] text-white p-2 md:p-3 rounded-full custom-shadow z-10"
      >
        <FaArrowRight />
      </button>
      <button
        onClick={handlePrevClick}
        className="absolute left-2 md:left-5 bg-[#207FBF] text-white p-2 md:p-3 rounded-full custom-shadow z-10"
      >
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default Staff;
