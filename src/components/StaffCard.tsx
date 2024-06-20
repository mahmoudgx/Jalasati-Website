import { FaStar } from "react-icons/fa";

interface Props {
  imageSrc: string;
  name: string;
  specialization: string;
  price: string;
  about: string;
  qualifications: string;
  rating?: number;
}

const StaffCard = ({
  imageSrc,
  name,
  specialization,
  price,
  about,
  qualifications,
  rating = 5,
}: Props) => {
  return (
    <div
      className="bg-white md:w-[500px] w-full space-y-3 shadow-xl rounded-3xl p-5 relative"
      dir="rtl"
    >
      <div className="flex items-center">
        <div>
          <img
            className="rounded-2xl md:w-[300px] md:h-[250px] w-[200px] h-[150px]"
            src={imageSrc}
          />
        </div>
        <div className="mr-5 space-y-2 items-center">
          <h1 className="font-bold text-xl">{name}</h1>
          <p className="font-[600] text-sm">{specialization}</p>
          <div className="flex items-center space-x-reverse space-x-1">
            {Array.from({ length: rating }, (_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
          </div>
          <p className="font-bold text-lg">{price}</p>
          <button className="underline text-[#207FBF]">عرض التقيمات</button>
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="font-bold">عن الطبيب</h1>
        <p
          className="text-gray-500"
          dangerouslySetInnerHTML={{ __html: about }}
        ></p>
        <h1 className="font-bold">المؤهلات العملية</h1>
        <p className="text-gray-500">{qualifications}</p>
        <div className="flex justify-around mt-5">
          <button className="bg-[#207FBF] text-xs font-semibold md:py-3 md:px-16 py-1.5 px-5 rounded-xl text-white">
            احجز الآن
          </button>
          <button className="bg-white text-xs md:py-3 font-semibold md:px-16 rounded-xl py-1.5 px-5 text-[#207FBF] border-2">
            معرفة المزيد عن الاخصائي
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
