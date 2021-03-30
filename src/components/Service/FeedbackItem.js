import React from "react";
import IconStar from "../Specific/icons/IconStar";
import fullStar from "./img/star.svg";

const FeedbackItem = ({ item }) => {
  const { img, name, date, rate, text } = item;
  const stars = Array(5).fill(<span/>);
  return (
    <div className="flex flex-col mb-2.5 pb-2.5 border-b-2 last">
      <div className="flex w-full">
        <img src={img} className="mr-2.5" alt="avatar"/>
        <div className="flex flex-col justify-center">
          <div className="flex mb-2.5">
            {stars.map((item, idx) => (
              idx + 1 <= rate ? <img src={fullStar} alt="fullStar" key={idx}/> : <IconStar key={idx}/>
            ))}
          </div>
          <div>
            <span>{`${name}, ${date}`}</span>
          </div>
        </div>
      </div>
      <div>{text}</div>
    </div>
  );
};

export default FeedbackItem;
