import React from 'react'

function ErrorMessage() {
    return (
        <div
        style={{
            width: "100%",
            padding: 10,
            marginBottom: 10,
            borderRadius: 4,
            backgroundColor: "orangered",
            textAlign: "center",
            color: "white",
            textTransform: "capitalize",
        }}
        >
            Please Fill All The Fields
        </div>
    )
}

export default ErrorMessage
