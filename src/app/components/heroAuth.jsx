
import clsx from "clsx"


export default function heroAuth({children}) {
    return (
        <div className={clsx(
          "bg-gradient-to-r from-[#F5F5F5] to-secondary",
          "rounded-2xl",
          "mr-[24px] mt-[35px] p-[24px]",
          "w-[auto] h-[auto]",
        )}>{children}
          </div>
    )
  }
  