import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Input from "../Order/Input";
import IconCheckbox from "../Order/icons/IconCheckbox";
import '../Order/style.css';
const CollaborationForm = () => {
    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!checked)
    }

    const { register, handleSubmit, errors, trigger } = useForm();
    const onSubmit = (data) => {
        console.log(data)};


    return (
        <>
        <h1 className="text-xl font-semibold text-BlackGray text-center mb-5">Начать сотрудничество</h1>            
            <form onSubmit={handleSubmit(onSubmit)} className="px-7"> 
                <p><Input
                    name="yourCompanyName" 
                    trigger={trigger}
                    register={register}
                    error={errors.yourCompanyName}
                    title="Название Вашей компании"
                    required={{
                        required: true,

                        minLength: {
                            value: 2,
                            message: "поле должно быть заполнено",
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
 
                         minLength: {
                             value: 2,
                             message: "поле должно быть заполнено",
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
                        //  minLength: {
                        //      value: 10,
                        //      message: "номер телефона слишком короткий",
                        //  },
                        //  maxLength: {
                        //      value: 15,
                        //      message: "номер телефона слишком длинный",
                        //  },
                         pattern: {
                             value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i,
                             message: "номер телефона кривой",
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
                            value: /^\S+@\S+$/i,
                            message: "не верно указана почта",
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
            
            {/* <p>Спасибо, ваша заявка отправлена. Свяжемся с Вами в ближайшее время.</p> */}
           
        </>
    )
}

export default CollaborationForm;