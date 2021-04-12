import React from 'react';
import Portal from './Portal';
import PropTypes from "prop-types";
import {Modal} from "react-bootstrap";

const ModalWindow = ({ title, isOpen, onCancel, children}) => {

        return (
            <React.Fragment>
                {isOpen &&
                <Portal>
                    <Modal
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={true}
                        onHide={onCancel}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">{title} </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {children}
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </Portal>
                }
            </React.Fragment>
        );

};

ModalWindow.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    children: PropTypes.node,
};

ModalWindow.defaultProps = {
    title: '',
    isOpen: false,
    onCancel: () => {},
    handleSubmit: () => {},
    handleCancel: () => {},
    children: null,
};

export default ModalWindow;