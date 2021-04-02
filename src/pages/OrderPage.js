import React, { useCallback, useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { postOrder } from "../helpers/requests";
import Order from "../components/Order/Order";
import Modal from "../components/Modal";
import { Helmet } from "react-helmet";

const OrderPage = () => {
  const history = useHistory();
  const [response, setResponse] = useState({});
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");

  useLayoutEffect(() => {
    if (response.error) {
      setMessage(`Что-то пошло не так. Ошибка: ${response.error}`);
    } else {
      setMessage(response.message);
    }
  }, [response]);

  useLayoutEffect(() => {
    if (message?.length > 0) {
      setActive(true);
    }
  }, [message]);

  const handlePostOrder = useCallback(
    async (newData, id) => {
      const result = await postOrder(newData, id);
      setResponse(result);
    },
    [response],
  );

  const handleSetActiveModal = useCallback(
    (state) => {
      setActive(state);
    },
    [response],
  );

  return (
    <>
      <Helmet>
        <title>Мероприятия_форма заявки</title>
      </Helmet>
      <Order postOrder={handlePostOrder}/>
      <Modal active={active} setActive={handleSetActiveModal}>
        <div className="max-w-60 py-5 text-center text-base font-medium">
          {message === "Заявка успешно создана"
            ? `Ваша заявка успешно отправлена! Скоро мы свяжемся с
                    вами. Спасибо!`
            : message}
        </div>
        <div className="flex justify-center">
          <button
            className="py-2.5 px-6 rounded-10px text-white bg-Sea cursor-pointer hover:shadow-drop focus:outline-none"
            onClick={() => {
              setActive(false);
              setMessage("");
              history.goBack();
            }}
          >
            Ок
          </button>
        </div>
      </Modal>
    </>
  );
};

export default OrderPage;
