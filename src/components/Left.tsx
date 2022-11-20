import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { FC, useState } from "react";
import Person1 from "../images/last.png";
import Person2 from "../images/another.png";
import Person3 from "../images/first.jpg"
const Left: FC = () => {
  const data = [
    {
      title: "Hannah Biker",
      image: Person3,
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
    },
    {
      title: "kalisa ineza giovanni",
      image: Person2,
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
    },
    {
      title: "fadno",
      image: Person1,
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
    },
  ];
  const next = () => {
    setCurrentIndex((index) => (index += 1));
  };
  const prev = () => {
    setCurrentIndex((index) => (index -= 1));
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex items-end gap-14">
      <div className="flex flex-col relative">
        <div className="flex w-[45rem] overflow-x-hidden">
          {data.map((data, index) => (
            <div
              key={index}
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              className="flex duration-1000 transition-all gap-5 items-end"
            >
              <img className="min-w-[20rem]" src={data.image} />
              <div className="min-w-[23.8rem] flex flex-col gap-7 pb-[5rem]">
                <div className="font-bold text-3xl">{data.title}</div>
                <div className="text-xl text-[gray] font-semibold">
                  {data.subTitle}
                </div>
                <div className="max-w-[25rem] font-medium text-[#616161] ">
                  {data.body}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex bottom-0 right-[15rem] absolute items-center mt-10 gap-5">
          <button
            className="button"
            disabled={currentIndex === 0}
            onClick={prev}
          >
            <ArrowBack />
          </button>
          <button
            className="button "
            disabled={currentIndex === 2}
            onClick={next}
          >
            <ArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Left;
