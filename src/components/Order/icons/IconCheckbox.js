const IconCheckbox = (props) => {
    const { checked } = props
    return (
        <>
            <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="0.5"
                    y="0.5"
                    width="21.85"
                    height="21.607"
                    rx="4.5"
                    fill="white"
                />
                {checked ? (
                    <path
                        d="M18.85 6.707L8.95 16.607L4 11.657L4.707 10.95L8.95 15.193L18.142 6L18.849 6.708L18.85 6.707Z"
                        fill="#00CCA9"
                    />
                ) : null}
                <rect
                    x="0.5"
                    y="0.5"
                    width="21.85"
                    height="21.607"
                    rx="4.5"
                    stroke="#00CCA9"
                />
            </svg>
        </>
    )
}

export default IconCheckbox
