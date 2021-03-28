import IconMap from "./icons/IconMap";
import IconCloseButton from "./icons/IconCloseButton";
import ChoiceCity from "./ChoiceCity";
import useVisibilityToggler from "./useVisibilityToggler";

const PopUp = ({ setActive, setCity }) => {
  const [ChoiseCityComponent, toggleVisibilityCity] = useVisibilityToggler(
    <ChoiceCity 
      setActive={setActive} 
      setCity={setCity} 
    />,
    false
  );

  return (
    <div className="px-1 relative bg-white">
      <button
        className="absolute -top-4 -right-4 border-none bg-transparent cursor-pointer hover:opacity-70 focus:outline-none"
        onClick={() => setActive(false)}
      >
        <IconCloseButton />
      </button>
      <div className="flex items-center">
        <IconMap />
        <p className="mb-5 mt-1 text-lg font-semibold text-center">
          Ваш город Москва?
        </p>
      </div>
      {!ChoiseCityComponent ? (
        <div className="flex justify-between">
          <button
            className={
              "p-2 min-w-14 rounded-10px text-white bg-Sea cursor-pointer hover:bg-Orange hover:shadow-drop focus:outline-none"
            }
            onClick={() => {
              setActive(false);
              setCity("Москва");
            }}
          >
            Да
          </button>
          <button
            className={
              "p-2 border border-Sea rounded-10px bg-transparent cursor-pointer hover:border-Orange focus:outline-none"
            }
            onClick={() => {
              toggleVisibilityCity();
            }}
          >
            Выбор города
          </button>
        </div>
      ) : null}
      {ChoiseCityComponent}
    </div>
  );
};

export default PopUp;
