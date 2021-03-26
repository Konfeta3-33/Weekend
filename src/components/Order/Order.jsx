import React, { useState } from "react"
import "./style.css"
import { useForm } from "react-hook-form"
import Input from "./Input"
import IconCheckbox from "./icons/IconCheckbox.js"

const Order = ({ postOrder }) => {
    const { register, handleSubmit, errors, trigger } = useForm()
    const [checked, setChecked] = useState(false)

    const onSubmit = (newData) => {
        postOrder(newData)
    }

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <div className="flex flex-col  box-border items-center mb-4">
            <div className="order-titleblock">
                <h2 className="order__title">Форма заявки</h2>
                <h3 className="order__subtitle">
                    Забронировать время и получить обратный звонок можно прямо
                    сейчас
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
                            message: "поле должно быть заполнено",
                        },
                    }}
                />

                <Input
                    name="phone"
                    trigger={trigger}
                    register={register}
                    title="телефон"
                    error={errors.phone}
                    required={{
                        required: true,
                        minLength: {
                            value: 10,
                            message: "номер телефона слишком короткий",
                        },
                        maxLength: {
                            value: 12,
                            message: "номер телефона слишком длинный",
                        },
                        pattern: {
                            value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i,
                            message: "номер телефона кривой",
                        },
                    }}
                />

                <Input
                    trigger={trigger}
                    name="email"
                    register={register}
                    title="почта"
                    error={errors.email}
                    required={{
                        required: true,

                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "не верно указана почта",
                        },
                    }}
                />

                <Input
                    trigger={trigger}
                    name="date"
                    register={register}
                    title="дата и время"
                    error={errors.date}
                    required={{
                        required: true,
                        minLength: {
                            value: 2,
                            message: "не верно указана дата",
                        },
                    }}
                />
                <Input
                    trigger={trigger}
                    name="address"
                    register={register}
                    title="адрес"
                    error={errors.address}
                    required={{
                        required: true,
                        minLength: {
                            value: 2,
                            message: "не верно указан адрес",
                        },
                    }}
                />
                <Input
                    trigger={trigger}
                    name="persons"
                    register={register}
                    title="количество детей"
                />

                <Input
                    trigger={trigger}
                    name="parents"
                    register={register}
                    title="количество взрослых"
                />

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
                <span className="order-checkbox__text">
                    Ваши данные защищены. Нажимая на кнопку, вы даете согласие
                    на обработку персональных данных и соглашаетесь с политикой
                    конфиденциальности.
                </span>
            </div>
        </div>
    )
}

export default React.memo(Order)
