export function NotEvents({ title }) {
  return (
    <div className="w-[full] flex justify-center my-[24px] border-b pb-6">
      <div className="flex flex-wrap w-[200px] justify-center">
        <img src="/admin_calendar.png" alt="Calendar icon on button" />
        <span className="text-base font-semibold text-gray-400">{title}</span>
      </div>
    </div>
  );
}
