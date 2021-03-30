import TagItem from "../Tags/TagItem";
import IconStar from "./icons/IconStar";
import IconStarFull from "./icons/IconStarFull";
import { Link } from "react-router-dom";

const Specific = ({ service }) => {
  const { id, Addresses, price, worktime, limits, rate, Tags } = service;

  const stars = Array(rate).fill(<IconStar/>);

  console.log(stars)
  console.log(rate)

  return (
    <div
      className="px-4 mb-5 flex flex-col min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto md:w-2/3 xl:w-1/2">
      <Link to={`/order/${id}`}
            className="w-44 py-2.5 px-4 mb-8 mt-5 rounded-10px self-center text-white text-base bg-Sea cursor-pointer hover:shadow-drop focus:outline-none"
      >Оставить заявку</Link>
      <div className="mb-2.5 flex">
          {stars.map((item, idx) => (
            <span item={item} key={idx}>
              <IconStarFull/>
            </span>
          ))}
      </div>
      <div className="mb-2.5">
        <span className="font-bold">Цена: </span> {price} руб.
      </div>
      {Addresses.length !== 0 ? (
        <div className="mb-2.5">
          <span className="font-bold">Адрес: </span>
          {Addresses?.map((item, idx) => (
            <span className="mb-4 mr-2" item={item} key={idx}>
              г. {item.city}, {item.street} <br />
            </span>
          ))}
        </div>
      ) : null}
      <div className="mb-2.5">
        <span className="font-bold">Часы работы: </span>
        <span className="lowercase">{worktime}</span>
      </div>
      <div className="mb-5">
        <span className="font-bold">Возрастные ограничения: </span>
        {limits}
      </div>
      <div className="flex flex-wrap">
        {Tags.map((item, idx) => (
          <div className="mb-6 mr-2" key={idx}>
            <TagItem item={item} color={item.Group.color}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specific;
