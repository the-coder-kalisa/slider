import { useState } from "react";
import Person2 from "./images/another.png";
import Person3 from "./images/second.png"
import Person1 from "./images/last.png";
import Person4 from "./images/first.jpg";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const App = () => {
  const second = [
    {
      title: "Hannah Biker",
      image: Person4,
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
    },
    {
      title: "kalisa ineza giovanni",
      image: Person1,
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
    },
    {
      title: "fadno",
      image: Person3,
      subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos omnis, natus ratione veritatis voluptate, explicabo magni, nulla reprehenderit ut aperiam totam provident atque eius recusandae? Similique tempora accusantium cum aliquid!",
    },
  ];
  const first = [
    {
      name: "Yonetim Kadrosu",
      subname: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      images: [Person1, Person2, Person3],
    },
    {
      name: "Yonetim Kadrosu",
      subname: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      images: [Person1, Person2, Person3],
    },
    {
      name: "Yonetim Kadrosu",
      subname: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      images: [Person1, Person2, Person3],
    },
  ];
  const data = [{ first, second }];
  const next = () => {
    setCurrentIndex((index) => (index += 1));
  };
  const prev = () => {
    setCurrentIndex((index) => (index -= 1));
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="container">
      <div className="sub-container">
        {data.map((data, index) => (
          <div key={index} className=" each-data">
            <div className="first">
              {data.first.map((data, index) => (
                <div
                  key={index}
                  style={{ transform: `translateX(${currentIndex * 100}%)` }}
                  className="first-each"
                >
                  <div className=" first-left">
                    <div className="first-left-title">{data.name}</div>
                    <div className="first-left-sub">{data.subname}</div>
                  </div>
                  <div className="images">
                    {data.images.map((image, index) => (
                      <img className="each-image" key={index} src={image} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="second">
              {data.second.map((data, index) => (
                <div
                  key={index}
                  style={{ transform: `translate(${currentIndex * 100}%)` }}
                  className="second-each"
                >
                  <img className="each-image-second" src={data.image} />
                  <div className="second-data">
                    <div className="second-title">{data.title}</div>
                    <div className="second-sub-title">{data.subTitle}</div>
                    <div className="second-body">{data.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex changes bottom-0 right-[25rem] absolute items-center mt-10 gap-5">
          <button
            className="button"
            disabled={currentIndex === 0}
            onClick={prev}
          >
            <ArrowBack className="icon" />
          </button>
          <button
            className="button "
            disabled={currentIndex === 2}
            onClick={next}
          >
            <ArrowForward className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
