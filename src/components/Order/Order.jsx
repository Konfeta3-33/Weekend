import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getServiceById } from "../../helpers/requests";
import Input from "./Input";
import IconCheckbox from "./icons/IconCheckbox.js";

const Order = ({ postOrder }) => {
  const { register, handleSubmit, errors, trigger } = useForm();
  const [checked, setChecked] = useState(true);
  const { id } = useParams();

  const onSubmit = (newData, id) => {
    postOrder(newData, id);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const { data: service } = useQuery(["service", id], () => getServiceById(id));

  if (!service) return null;
  const { Addresses } = service;

  console.log("ServiceId", id);

  return (
    <div className="flex flex-col  box-border items-center mb-4">
      <div className="order-titleblock">
        <h2 className="order__title">Форма заявки</h2>
        <h3 className="order__subtitle">
          Забронировать время и получить обратный звонок можно прямо сейчас
        </h3>
      </div>
      <form
        className="flex flex-col box-border order-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          name="name"
          trigger={trigger}
          register={register}
          error={errors.name}
          title="Имя"
          required={{
            required: true,
            minLength: {
              value: 2,
              message: "Вы не указали имя",
            },
            pattern: {
              value: /^[a-zа-яё\s]+$/i,
              message: "Имя должно содержать только буквы",
            },
          }}
        />
        <Input
          name="phone"
          trigger={trigger}
          register={register}
          title="Телефон"
          error={errors.phone}
          required={{
            required: true,
            minLength: {
              value: 10,
              message: "номер телефона слишком короткий",
            },
            maxLength: {
              value: 18,
              message: "номер телефона слишком длинный",
            },
            pattern: {
              value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i,
              message: "номер телефона указан некорректно",
            },
          }}
        />
        <Input
          trigger={trigger}
          name="email"
          register={register}
          title="Почта"
          error={errors.email}
          required={{
            required: false,
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Вы неверно указали почту",
            },
          }}
        />

        {Addresses.length !== 0 ? (

          <div className="flex flex-col">
            <Input
              trigger={trigger}
              name="date"
              register={register}
              title="Дата и время"
              error={errors.date}
              required={{
                required: Addresses.length !== 0 ? true : false,
                minLength: {
                  value: 5,
                  message: "Вы не указали время и дату",
                },
              }}
            />
            <div className="flex flex-col mb-6">
              <label className="mb-1.5 text-sm font-semibold">Адрес</label>
              <select
                className="py-3 px-6 text-DarkGreenForm font-medium border border-default rounded-10px focus:outline-none focus:border-Blue"
                name="address"
                ref={register}
                required={{
                  required: false,
                }}
              >
                {Addresses?.map((item, idx) => (
                  <option value={item.street} item={item} key={idx}>
                    {item.street}
                  </option>
                ))}
              </select>
            </div>
            <Input
              trigger={trigger}
              name="persons"
              register={register}
              title="Количество и возраст детей"
              error={errors.persons}
              required={{
                required: Addresses.length !== 0 ? true : false,
                minLength: {
                  value: 1,
                  message: "Вы не указали данные",
                },
              }}
            />
            <Input
              trigger={trigger}
              name="parents"
              register={register}
              title="Количество взрослых"
              error={errors.parents}
              required={{
                required: Addresses.length !== 0 ? true : false,
                minLength: {
                  value: 1,
                  message: "Вы не указали количество",
                },
              }}
            />
          </div>
        ) : null}

        <input
          type="submit"
          value="Оставить заявку"
          className={
            checked && Object.keys(errors).length <= 0
              ? "order-form__button"
              : "order-form__button disabled"
          }
          disabled={!checked}
        />
      </form>
      <div className="order-checkbox">
        <label htmlFor="checkbox" onClick={handleCheck}>
          <IconCheckbox checked={checked} />
        </label>
        <input type="checkbox" id="checkbox" className="hidden" />
        <span className="order-checkbox__text ml-1">
          Ваши данные защищены. Нажимая на кнопку, вы даете согласие на
          обработку персональных данных и соглашаетесь с политикой
          конфиденциальности.
        </span>
      </div>
    </div>
  );
};

export default React.memo(Order);
