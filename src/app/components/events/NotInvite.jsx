export function NotInvite() {
    return (
      <div className="w-[full] flex justify-center my-[24px]">
        <div className="flex flex-wrap w-[200px] justify-center">
          <img src="/admin_calendar.png" alt="Calendar icon on button" />
          <span className="text-base font-semibold text-gray-400">
            No tienes invitaciones pendientes por aceptar
          </span>
        </div>
      </div>
    );
  }
  