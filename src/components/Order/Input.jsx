import React from "react";
import "./style.css";

const placeholderDict = {
  name: {
    placeholder: "Введите имя",
    type: "text",
  },
  phone: {
    placeholder: "+7 - (xxx) - xxx - xx - xx",
    type: "tel",
  },
  date: {
    placeholder: "Например: 19.03.2021 в 14:00",
    type: "datetime-local",
  },
  address: {
    placeholder: "Введите адрес",
    type: "text",
  },
  children: {
    placeholder: "Например: 2 детей, 8 и 10 лет",
    type: "text",
  },
  adults: {
    placeholder: "Например: 2",
    type: "text",
  },
  email: {
    placeholder: "Укажите вашу почту",
    type: "email",
  },
  company: {
    placeholder: "Введите название",
    type: "text",
  },
};

const Input = (props) => {
  const {
    name,
    defaultValue,
    register,
    title,
    required,
    trigger,
    error,
  } = props;

  return (
    <label className="flex flex-col">
      <span className="order-label__text">{title}</span>
      <input
        name={name}
        onBlur={() => trigger(name)}
        type={placeholderDict[name]?.type}
        defaultValue={defaultValue}
        ref={register(required)}
        autoComplete="off"
        placeholder={placeholderDict[name]?.placeholder}
        className={
          error
            ? "box-border rounded-10px border order__input error__input"
            : "box-border rounded-10px border order__input"
        }
      />
      <span className="order-label__text error__text">
                {error?.message}
            </span>
    </label>
  );
};

export default Input;
