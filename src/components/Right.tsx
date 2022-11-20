import { FC } from "react";
import Person1 from "../images/last.png";
import Person2 from "../images/another.png";
import Person3 from "../images/second.png";

const Right: FC = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div>
        <div className="font-bold text-3xl">Yonetim Kadrosu</div>
        <div className="max-w-[16rem] text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </div>
      <div className="flex gap-3">
        <img className="w-[13rem]" src={Person2} />
        <img className="w-[13rem]" src={Person3} />
        <img className="w-[13rem]" src={Person1} />
      </div>
    </div>
  );
};
export default Right;
