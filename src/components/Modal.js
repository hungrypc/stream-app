import React from 'react';
import ReactDOM from 'react-dom';
import history from "../history";

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
            <div className="ui standard modal visible active">
                <div className="header">
                    Delete Stream
                </div>
                <div className="content">
                    Are you sure you want to delete this stream?
                </div>
                <div className="actions">
                    <button className="ui primary button">Delete</button>
                    <button className="ui button">Cancel</button>
                </div>
            </div>
        </div>,
        // we create a new div with some id in html file for modal
        document.querySelector('#modal')
    )
};

export default Modal;