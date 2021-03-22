import React from "react"
import IconCloseButton from "./icons/IconCloseButton"

const Modal = ({ active, setActive, message }) => {
    const handleSetActive = () => {
        setActive(!active)
    }

    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={handleSetActive}
        >
            <div
                className={active ? "modal__content active" : "modal__content"}
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={handleSetActive}>
                    <IconCloseButton />
                </button>
                <span className="modal__text">
                    {message === "Заявка успешно создана"
                        ? `Ваша заявка успешно отправлена! Скоро мы свяжемся с
                        вами. Спасибо!`
                        : message}
                </span>
            </div>
        </div>
    )
}

export default React.memo(Modal)
