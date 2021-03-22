import SubCatItem from "./SubCatItem";

const SubCategories = ({ subCategories, filterSubCategories }) => {

  return (
    <div className="px-3 mb-5 max-w-sm mx-auto flex justify-between">
      {subCategories?.map((item, idx) => {
        return (
          <SubCatItem item={item} key={idx} onClick={() => filterSubCategories(item)}/>
        );
      })}
    </div>
  );
};

export default SubCategories;
