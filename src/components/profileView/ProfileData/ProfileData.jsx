import clsx from "clsx";

import { birthdayDateProfile } from "@/helpers";

export function ProfileDataView({ data }){
    
    return(
        <>
        <div className="w-[350px] h-[250px] border mt-4 rounded-2xl p-4">
        <p className="font-heading text-regularSemiBold">
          {data.name} 
        </p>
        <p className="font-heading text-regularSemiBold">
          {data.email} 
        </p>
        <p className="font-heading text-regularSemiBold">
          {data.phoneNumber}
        </p>
        <p className="font-heading text-regularSemiBold">
          {birthdayDateProfile(data.birthdate)}
        </p>
        <p className="font-heading text-regularSemiBold">
          {data.gender}
        </p>
        </div>
        </>
    )
}