import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { CollaborationText } from "./CollaborationText";

export const Collaboration = () => {
    const [ detailed, setDetailed ] = useState(true);

    const onDetailed = () => {
        setDetailed(!detailed)
    }    

    const getSamples = () => {
        window.open('https://drive.google.com/drive/folders/1Xrv5Qx3vHwxVVMOr69ma6Scw4KHdA30h', '_blank');
    }; 

    return (
        <div className="text-left md:px-9 px-4">
            <h1 className="text-xl font-semibold text-BlackGray mb-1.5 text-center">Сотрудничество</h1>
            <h2 className="text-base font-medium text-Sea mb-5 text-center mx-10">Ищем заинтересованных партнеров для представления на нашем сервисе</h2>
            <h3 className="text-base font-medium text-BlackGray mb-2.5">Условия сотрудничества</h3>
            <h3 className="text-sm font-semibold text-BlackGray mb-1.5">1. Начало работы, пробный период</h3>
                <p className="text-sm font-semibold text-black text-opacity-80 mb-4">На начальном этапе сотрудничества БУДЕМ ПРИВОДИТЬ к Вам НОВЫХ КЛИЕНТОВ, готовых воспользоваться Вашей услугой, БЕЗ ЗАКЛЮЧЕНИЯ договора и комиссионного вознаграждения.
                </p>
            {detailed && <p className="text-base font-medium text-Sea text-right" onClick={onDetailed}>Подробнее...</p>}    
           {!detailed && <CollaborationText />}
           <h3 className="text-base font-medium text-Orange m-2">Ваши выгоды от сотрудничества с нами</h3>
               <p className="text-sm font-semibold text-black text-opacity-80 mb-4">- Дополнительный поток клиентов.</p>
               <p className="text-sm font-semibold text-black text-opacity-80 mb-4">- Подробное описание Вашей услуги, с возможностью быстрого заказа.</p>
               <p className="text-sm font-semibold text-black text-opacity-80 mb-4">- Дополнительные рекламные возможности без Ваших прямых затрат.</p>
               <p className="text-sm font-semibold text-black text-opacity-80 mb-4">- Оплата вознаграждения только за конкретного клиента, записавшегося у нас на сервисе.</p>
            <div className="text-center">
                <div className="max-w-sm py-2.5 bg-Sea rounded-lg text-center">
                    <Link to={`/collaborationForm`} className="font-medium text-base text-white">Начать сотрудничество</Link>
                </div>
            </div>
            <button onClick={getSamples} className="focus:outline-none w-full max-w-sm my-5 rounded-lg border border-Sea font-medium text-base py-2 px-2.5">Получить образцы документов</button>             
            </div>
    )
};

export default Collaboration;
