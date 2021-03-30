import React from "react";

const Contacts = () => {
    return (
        <div className="text-center flex">
            <div className="mx-auto pl-14 pr-12">
                <h1 className="text-xl font-semibold text-center mb-14 text-BlackGray">Контакты</h1>
                <p className="text-base font-medium text-Sea mb-14">Звоните или пишите, мы всегда рады новым знакомствам!</p>
                <p className="text-sm font-semibold text-Sea mb-6"><a href="tel:+79222931704">+7 922 293 17 04</a></p>
                <p className="text-sm font-semibold text-Sea mb-6"><a href="mailto:weekendorg.ru@gmail.com">weekendorg.ru@gmail.com</a></p>
                <p className="text-sm font-semibold text-BlackGray mb-4">г. Екатеринбург, ул. Сибирский тракт 12, строение 1А.</p>
            </div>
        </div>
    )
}

export default Contacts;