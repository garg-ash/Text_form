import React from 'react'

function Alert(props) {
    return (
        props.alert && <div className="alert alert-primary" role="alert">
            <strong>{props.Alert.type}</strong> : {props.Alert.msg}
            
        </div>
    )
}

export default Alert
