import React, { FC, FormEvent, MouseEvent } from "react";
import "./Modal.css";

interface ModalProps {
    title?: string;
    children?: any;
    okClick?: any;
    cancelClick?: any;
    okBtnCaption?: string;
    cancelBtnCaption?: string;
    okBtnClass?: string;
}

const Modal: FC<ModalProps> = ({
    title,
    children,
    okClick,
    cancelClick,
    okBtnCaption,
    cancelBtnCaption,
    okBtnClass,
}) => {
    return (
        <div className="modal">
            <div className="modal-background" onClick={cancelClick} />
            <div className="modal-content">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button type="button" className="cross-btn" onClick={cancelClick} />
                </header>
                <section className="modal-card-body">
                    <div className="content">{children}</div>
                </section>
                <footer className="modal-card-foot">
                    <a className={`button ${okBtnClass}`} onClick={okClick}>
                        {okBtnCaption || "Ok"}
                    </a>
                    <a className="button" onClick={cancelClick}>
                        {cancelBtnCaption || "Cancel"}
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
