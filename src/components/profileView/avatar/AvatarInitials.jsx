import clsx from "clsx"

export function AvatarInitials({ data }){
  const fullName = data.name
  const separeteName = fullName.split(' ')
  const firstIn = separeteName[0].charAt(0)
  const secondIn = separeteName[1].charAt(0)
  const nameInitials = firstIn + secondIn

  return(
    <>
      <div className={clsx(
        "w-[100px] h-[100px] md:w-[150px] md:h-[150px]", 
        "rounded-full bg-gradient-to-tr from-primary to-secondary", 
        "flex justify-center items-center"
      )}>
        <p className={clsx(
          "text-white font-body text-5xl font-semibold",
          "md:text-5xl lg:text-7xl "
          )}>{nameInitials}</p>
      </div>
    </>
  )
}