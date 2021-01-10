import React, { FC } from "react";
import "./Modal.css";

interface ModalProps {
    title?: string;
    children?: any;
    okClick?: any;
    cancelClick?: any;
}

const Modal: FC<ModalProps> = ({ title, children, okClick, cancelClick }) => {
    return (
        <div className="modal">
            <div className="modal-background" onClick={cancelClick} />
            <div className="modal-content">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button type="button" className="danger" onClick={cancelClick} />
                </header>
                <section className="modal-card-body">
                    <div className="content">{children}</div>
                </section>
                <footer className="modal-card-foot">
                    <a className="button" onClick={okClick}>
                        Yes
                    </a>
                    <a className="button" onClick={cancelClick}>
                        Cancel
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
