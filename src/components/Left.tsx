import {
  ArrowBack,
  ArrowForward,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react";
import Person1 from "../images/first.jpg";
const Left: FC = () => {
  return (
    <div className="flex items-end gap-5">
      <img className="w-[20rem]" src={Person1} />
      <div className="flex flex-col gap-32">
        <div className="flex flex-col gap-5">
          <div className="font-bold text-3xl">Hannah Biker</div>
          <div className="text-[gray] text-xl font-semibold">
            Lorem ipsum dolor sit, amet
          </div>
          <div className="max-w-[25rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            quidem illum consequuntur natus pariatur voluptatem reiciendis a
            temporibus architecto ea. Quidem impedit facilis ad adipisci nulla
            eius architecto sit odio. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptas aut assumenda amet reiciendis accusamus.
            Autem itaque animi provident laboriosam impedit fuga quia delectus,
            esse ipsa tempora! Minus aperiam eligendi iure.
          </div>
          <div className="flex items-center mt-10 gap-5">
            <IconButton style={{ background: "#e8e8e8", color: "white" }}>
              <ArrowBack />
            </IconButton>
            <IconButton
              style={{ background: "rgb(196, 196, 64)", color: "white" }}
            >
              <ArrowForward />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Left;
