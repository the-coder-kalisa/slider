import { FC } from "react";
import Person1 from "../images/first.jpg";

const Right: FC = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        <div className="font-bold text-3xl">Yonetim Kadrosu</div>
        <div className="max-w-[16rem] text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </div>
      <div className="flex gap-1">
        <img className="w-[12rem]" src={Person1} />
        <img className="w-[12rem]" src={Person1} />
        <img className="w-[12rem]" src={Person1} />
      </div>
    </div>
  );
};
export default Right;
