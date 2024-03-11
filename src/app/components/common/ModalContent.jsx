export function ModalContent({ title, open, showModal, children }) {
  return (
    <dialog id="my_modal_3" className="modal" open={open}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={showModal}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="py-4">{children}</div>
      </div>
    </dialog>
  );
}
