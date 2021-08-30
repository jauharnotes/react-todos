import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }
  function modalClose() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCencel={modalClose} onConfirm={modalClose} />}
      {modalIsOpen && <Backdrop onCencel={modalClose} />}
      {/* {modalIsOpen ? (
        <Modal onCencel={modalClose} onConfirm={modalClose} />
      ) : null}
      {modalIsOpen ? <Backdrop onCencel={modalClose} /> : null} */}
    </div>
  );
}

export default Todo;
