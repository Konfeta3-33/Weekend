import TagBlock from "./TagBlock";
import RectLeft from "../../images/icons/RectLeft";
import RectRight from "../../images/icons/RectRight";

const Tags = ({ groups }) => {
  return (
    <div className="px-4 min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto md:w-2/3 xl:w-1/2">
      <div className="mb-6 flex justify-center items-center">
        <RectLeft />
        <h2 className="mx-4 text-BlackGray text-xl font-semibold tracking-wide">
          Лучшие подборки
        </h2>
        <RectRight />
      </div>
      {groups?.map((item, idx) => (
        <TagBlock item={item} key={idx} />
      ))}
    </div>
  );
};

export default Tags;
