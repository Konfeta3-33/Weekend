import { useState } from "react";
import TagItem from "./TagItem";
import IconUp from "../header/icons/IconUp";
import IconDown from "../header/icons/IconDown";

const TagBlock = ({ item: {name, color, Tags} }) => {
  const [visibleTags, setVisibleTags] = useState(true);

  const toggleVisibleTags = () => {
    setVisibleTags(!visibleTags);
  };

  return (
    <div className="text-BlackGray">
      <p
        className="mb-4 flex items-center text-base font-medium cursor-pointer"
        onClick={toggleVisibleTags}
      >
        {name} &nbsp;
        {visibleTags ? <IconUp /> : <IconDown />}
      </p>
      {visibleTags ? (
        <div className="flex flex-wrap">
          {Tags?.map((item, idx) => {
            return (
              <div key={idx} className="mr-5 mb-7">
                <TagItem item={item} color={color} />
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default TagBlock;
