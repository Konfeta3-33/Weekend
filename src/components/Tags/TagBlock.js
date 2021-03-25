import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ShowTags from "./ShowTags";

const TagBlock = ({ title, cat }) => {
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
        {title} &nbsp;
        <span className="text-sm">
          {visibleTags ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </p>
      <ShowTags visibility={visibleTags} cat={cat} />
    </div>
  );
};

export default TagBlock;
