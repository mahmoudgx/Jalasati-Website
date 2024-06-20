import { FaStar } from "react-icons/fa";

interface Props {
  rating?: number;
  description: string;
  name: string;
  image: string;
}

const CustomersReviewsCard = ({
  rating = 5,
  description,
  name,
  image,
}: Props) => {
  return (
    <div className="w-full md:w-[350px] h-auto bg-white shadow-2xl rounded-2xl space-y-5 p-5">
      <div className="flex justify-between">
        <img
          src="https://www.svgrepo.com/show/449877/quote.svg"
          className="w-[25px]"
          alt="quote"
        />
        <div className="flex items-center space-x-reverse space-x-1">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} className="text-yellow-500" />
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <p className="font-semibold">{description}</p>
        <div className="flex items-center space-x-reverse space-x-3">
          <img
            src={image}
            className="w-[50px] h-[50px] rounded-full"
            alt={name}
          />
          <h1 className="font-[500]">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default CustomersReviewsCard;
