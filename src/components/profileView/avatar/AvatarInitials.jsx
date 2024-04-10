import clsx from "clsx"

export function AvatarInitials({ data }){
  let nameInitials = ""

  if(data.name){
    const fullName = data.name
    const separeteName = fullName.split(' ')

    let length = separeteName.length
    
    if( length >= 2){
      const firstIn = separeteName[0].charAt(0).toUpperCase()
      const secondIn = separeteName[1].charAt(0).toUpperCase()
      nameInitials = firstIn + secondIn
    } else {
      const fInitial = separeteName[0].charAt(0).toUpperCase()
      const sInitial = separeteName[0].charAt(1).toUpperCase()
      nameInitials = fInitial + sInitial
    }
  }
  else{
    nameInitials = data.email.slice(0,2).toUpperCase()
  }
  

  return(
    <>
      <div className={clsx(
        "w-[100px] h-[100px]",
        "mt-[150px] md:mt-[100px]",
        "md:w-[150px] md:h-[150px]", 
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