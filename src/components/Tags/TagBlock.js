import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import TagItem from "./TagItem";

const TagBlock = ({ item: {name, color, Tags} }) => {
  const [visibleTags, setVisibleTags] = useState(true);

  const toggleVisibleTags = () => {
    setVisibleTags(!visibleTags);
  };

  return (
    <div className="text-BlackGray">
      <p
        className="mb-4 text-base font-medium cursor-pointer"
        onClick={toggleVisibleTags}
      >
        {name} &nbsp;
        <span className="text-sm">
          {visibleTags ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
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
