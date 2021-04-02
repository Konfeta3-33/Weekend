import TagItem from "../Tags/TagItem";
import IconStar from "./icons/IconStar";
import fullStar from "../Service/img/star.svg";
import { Link } from "react-router-dom";
import img from "../Service/img/img.png";
import heartFull from "../Category/images/main/heartFull.svg";
import heart from "../Category/images/main/heart.svg";

const Specific = ({ service, toggleFavorites, favorites }) => {
  const { id, Addresses, price, worktime, limits, rate, Tags } = service;

  const stars = Array(5).fill(<span/>);

  return (
    <div
      className="px-4 mb-5 flex flex-col min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto md:w-2/3 xl:w-1/2">
      <div className="flex mb-8 mt-5 ml-12 justify-center">
        <Link to={`/order/${id}`}
              className="w-44 py-1.5 px-4 mr-5 font-semibold block rounded-10px self-center text-center text-white text-sm bg-Sea cursor-pointer hover:shadow-drop focus:outline-none"
        >Получить консультацию</Link>
        <button onClick={(event) => toggleFavorites(event, service)}
                className="focus:outline-none">
          <img src={favorites?.includes(id) ? heartFull : heart}
               style={{ width: 32, height: 29 }}/>
        </button>
      </div>
      <div className="mb-2.5 flex">
        {stars.map((item, idx) => (
          idx + 1 <= rate ? <img src={fullStar} className="mr-0.5" key={idx}/> :
            <IconStar key={idx}/>
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
              г. {item.city}, {item.street} <br/>
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
