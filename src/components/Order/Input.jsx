import React from "react"
import "./style.css"

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
        type: "date",
    },
    address: {
        placeholder: "Введите адрес",
        type: "text",
    },
    persons: {
        placeholder: "Например: 2 ",
        type: "number",
    },
    parents: {
        placeholder: "Например: 2",
        type: "number",
    },
    email: {
        placeholder: "укажите вашу почту",
        type: "text",
    },
}

const Input = (props) => {
    const {
        name,
        defaultValue,
        register,
        title,
        required,
        trigger,
        error,
    } = props

    return (
        <label className="flex flex-col">
            <span className="order-label__text">{title}</span>
            <input
                name={name}
                onBlur={() => trigger(name)}
                type={placeholderDict[name].type}
                defaultValue={defaultValue}
                ref={register(required)}
                placeholder={placeholderDict[name].placeholder}
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
    )
}

export default Input
