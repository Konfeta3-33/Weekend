import TagItem from "./TagItem";
import { useQuery } from "react-query";
import { getTags } from "../../helpers/requests";

const ShowTags = ({ visibility, cat }) => {
  const { data: tags } = useQuery("tags", getTags);

  return (
    <div>
      {visibility ? (
        <div className="flex flex-wrap">
          {tags?.map((item, idx) => {
            return (
              // item.cat === cat && (
                  <div key={idx} className="mr-5 mb-7">
                    <TagItem item={item} cat={cat} />
                  </div>
              // )
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ShowTags;
