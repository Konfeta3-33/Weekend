import { Link } from "react-router-dom";

const TagItem = ({ cat, item: { id, name, isActive } }) => {
  return isActive ? (
    <Link
      to={`/tags/${id}`}
      className={`px-3.5 py-2.5 rounded-2.5 no-underline text-white text-sm font-semibold hover:shadow-drop
      ${cat === 1 ? "bg-Orange" : `${cat === 2 ? "bg-Blue" : "bg-Sea"}`} `}
    >
      {name}
    </Link>
  ) : null;
};

export default TagItem;
