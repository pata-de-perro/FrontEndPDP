import clsx from "clsx"

export function AvatarInitials({ data }){
  let nameInitials = ""

  if(data.name){
    const fullName = data.name
    const separeteName = fullName.split(' ')
    const firstIn = separeteName[0].charAt(0)
    const secondIn = separeteName[1].charAt(0)
    nameInitials = firstIn + secondIn
  }
  else{
    nameInitials = data.email.slice(0,2).toUpperCase()
  }
  

  return(
    <>
      <div className={clsx(
        "w-[100px] h-[100px] md:w-[150px] md:h-[150px]", 
        "rounded-full bg-gradient-to-tr from-secondary to-accent1 border border-white border-4 drop-shadow-lg", 
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