export function ModalDrawer({ title, visible, toggleVisible, children }) {
  return (
    <div className="max-w-md mx-auto drawer drawer-end z-10">
      <input
        id="modal_drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={visible}
        onChange={toggleVisible}
      />
      <div className="drawer-side">
        <label
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={toggleVisible}
        ></label>
        <main className="w-3/4 md:w-1/2 lg:w-1/4 min-h-full bg-base-200 text-base-content">
          <header className="flex justify-between py-4 px-10 bg-primary text-white">
            <span>{title}</span>
            <button onClick={toggleVisible}>X</button>
          </header>
          <section className="p-4">{children}</section>
        </main>
      </div>
    </div>
  );
}
