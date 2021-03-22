import React, { useCallback, useState, useLayoutEffect } from "react"
import { useHistory } from "react-router-dom"
import { postOrder } from "../helpers/requests"
import Order from "../components/Order/Order"
import Modal from "../components/Order/Modal"

const OrderPage = () => {
    const history = useHistory()
    const [response, setResponse] = useState({})
    const [active, setActive] = useState(false)
    const [message, setMessage] = useState("")

    useLayoutEffect(() => {
        if (response.message) {
            setMessage(response.message)
        }
    }, [response])

    useLayoutEffect(() => {
        if (message.length > 0) {
            setActive(true)
            setTimeout(() => {
                setActive(false)
            }, 3000)
            setTimeout(() => {
                setMessage("")
                history.goBack()
            }, 4000)
        }
    }, [message])

    const handlePostOrder = useCallback(
        async (newData) => {
            const result = await postOrder(newData)
            setResponse(result)
        },
        [response]
    )

    const hadleSetActiveMolal = useCallback(
        (state) => {
            setActive(state)
        },
        [response]
    )

    return (
        <>
            <Order postOrder={handlePostOrder} />
            <Modal
                active={active}
                setActive={hadleSetActiveMolal}
                message={message}
            />
        </>
    )
}

export default OrderPage
