import { baseUrl } from "../../constants";

const SubCatItem = ({ item, onClick }) => {
  const { image, name, isActive } = item;

  return isActive ? (
    <div className="group flex flex-col items-center cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-center rounded-full bg-lightGray border border-transparent group-hover:border-Orange">
        <img
          src={`${baseUrl}/images/${image}`}
          style={{ width: 55, height: 55 }}
        />
      </div>
      <p className="max-w-25 mt-2.5 text-center text-BlackGray text-sm font-semibold">
        {name}
      </p>
    </div>
  ) : null;
};

export default SubCatItem;
