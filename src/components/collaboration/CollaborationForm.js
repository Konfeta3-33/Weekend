import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../Order/Input";
import IconCheckbox from "../Order/icons/IconCheckbox";
import { postCollaborationForm } from "../../helpers/requests";
import '../Order/style.css';
import Modal from "../Modal";
const CollaborationForm = () => {
    const [checked, setChecked] = useState(false);
    const [activeModel, setActiveModel] = useState(false);
    const { register, handleSubmit, errors, trigger } = useForm();

    const handleCheck = () => {
        setChecked(!checked)
    }

    const onSubmit = (newData) => {
            const result = postCollaborationForm(newData)
            setActiveModel(!activeModel);
        }
      
    const modelClose = () => {
        setActiveModel(false);
    };

    return (
        <>
        <h1 className="text-xl font-semibold text-BlackGray text-center mb-5">Начать сотрудничество</h1>            
            <form onSubmit={handleSubmit(onSubmit)} className="px-7"> 
                <p><Input
                    name="company"
                    trigger={trigger}
                    register={register}
                    error={errors.company}
                    title="Название Вашей компании"
                    required={{
                        required: true,
                        maxLength: {
                            value: 30,
                            message: "Название слишком длинное",
                          },
                        minLength: {
                            value: 2,
                            message: "поле должно быть заполнено",
                        },
                        pattern: {
                            value: /^[a-zа-яё\s]+$/i,
                            message: "Имя должно содержать только буквы",
                          },
                    }}
                />
                
                </p>
                <p><Input
                     name="name"
                     trigger={trigger}
                     register={register}
                     error={errors.name}
                     title="Имя"
                     required={{
                         required: true,
                         maxLength: {
                            value: 30,
                            message: "Имя слишком длинное",
                          },
                         minLength: {
                             value: 2,
                             message: "поле должно быть заполнено",
                         },
                         pattern: {
                            value: /^[a-zа-яё\s]+$/i,
                            message: "Некорректно заполнено поле",
                        },
                     }}
                /></p>
                <p><Input 
                     name="phone"
                     trigger={trigger}
                     register={register}
                     title="Телефон"
                     error={errors.phone}
                     required={{
                         required: true,
                         minLength: {
                            value: 9,
                            message: "номер телефона слишком короткий",
                        },
                        maxLength: {
                            value: 13,
                            message: "номер телефона слишком длинный",
                        },
                         pattern: {
                             value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i,
                             message: "Некорректно введен номер",
                         },
                     }}
                /></p>
                <p><Input className="focus:outline-none inputForm box-border w-full max-w-sm rounded-lg border border-Gray font-medium text-base py-2 px-2.5"
                    trigger={trigger}
                    name="email"
                    register={register}
                    title="E-mail"
                    error={errors.email}
                    required={{
                        required: true,
                        pattern: {
                            value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                            message: "Некорректно введен e-mail",
                        },
                    }}
                /></p>
                <p className="text-center"><input className="focusInput"
                    id="submit"
                    type="submit"
                    value="Отправить"
                    className={
                        checked && Object.keys(errors).length <= 0
                            ? "order-form__button"
                            : "order-form__button disabled"
                    }
                    disabled={!checked}>
                </input></p> 
            </form>
            <div className="order-checkbox my-4">
                <label htmlFor="checkbox" onClick={handleCheck}>
                    <IconCheckbox checked={checked} />
                </label>
                <input type="checkbox" id="checkbox" className="hidden" />
                <a href="/politics"><span className="order-checkbox__text ml-2.5">
                    Ваши данные защищены. Нажимая на кнопку, вы даете согласие
                    на обработку персональных данных и соглашаетесь с политикой
                    конфиденциальности.
                </span></a>
            </div>
            <Modal active={activeModel}>
                <div className="max-w-60 py-5 text-center text-base font-medium">
                    Ваша заявка успешно отправлена!
                    Скоро мы свяжемся с вами.
                    Спасибо!
                </div> 
                    <div className="flex justify-center">
                        <Link to={`/collaboration`}>
                            <button
                                className="py-2.5 px-6 rounded-10px text-white bg-Sea cursor-pointer hover:shadow-drop focus:outline-none"
                                onClick={modelClose}
                            >
                                Ок
                            </button>
                        </Link>
                    </div>
            </Modal>
           
        </>
    )
}

export default CollaborationForm;