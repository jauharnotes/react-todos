function Modal(props) {
  function cencelHandler() {
    props.onCencel();
  }
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cencelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
