export function ModalContent({ idModal, title, children }) {
  return (
    <dialog id={idModal} className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h2 className="font-bold text-lg text-center">{title}</h2>
        <div className="py-2">{children}</div>
      </div>
    </dialog>
  );
}
