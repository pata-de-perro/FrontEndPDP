import clsx from "clsx";
import { BtnSubmit } from "@/components/common"
import { useForm } from "react-hook-form"
import { deleteEventByIdApi } from "@/services";
import { useState } from "react";

export function DeleteEvent({event, accessToken}){
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset 
    } = useForm({
        mode: "onTouched"
    })

    const [msgResult, setMsgResult] = useState();

    const onSubmitDeleteEvent = handleSubmit(async (data) => {
            const result = await deleteEventByIdApi(event._id, accessToken);

            if (data === "Quiero eliminar este evento"){
                if (result?.success === true) {
                    setMsgResult({ type: "success", msg: result?.msg });
                    handleCloseDeletEventModal()
                    router.push("/pdp");
                    router.refresh();
                } else {
                    setMsgResult({ type: "error", msg: result?.msg });
                }
            } else {
                setMsgResult({ type: "error", msg: result?.msg });
            }
        })
    

    return(
        <div>
            <form onSubmit={onSubmitDeleteEvent} className="flex flex-wrap justify-center">
                <div className="form-control">
                    <label className="font-body text-azulGris900 text-center">Estas a punto de eliminar un evento</label>
                    <label className="font-body text-azulGris900 text-center">Si así lo deseas escribe abajo Quiero eliminar este evento</label>
                    <input 
                    id="delete"
                    type="text"
                    placeholder="Escribe 'Quiero eliminar este evento'"
                    className={clsx("input input-bordered input-sm", "w-full")}
                    {...register("delete", {
                        required: {value: true, message: "Si quieres eliminar tu evento es necesario que escribas el texto que se te indica arriba"},
                        validate: (value) => {
                            if (value === "Quiero eliminar este evento"){
                                return "Se eliminará tu evento"
                            } else {
                                return "El texto no coincide. Verificas indicaciones"
                            }
                        }
                    })}
                    />
                    {errors.validate && (
                        <span className="text-regular font-body text-red-500 ml-[5px]">
                        {errors.delete.message}
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <button  type="submit"
                    className={clsx(
                        "bg-red-500 text-white font-body text-regularSemiBold",
                        "w-[fit] py-4 px-10 h-[25px] flex justify-center items-center",
                        "mt-4 rounded-lg",
                        "hover:bg-red-500/75"
                    )}>Eliminar evento</button>
                </div>
            </form>
        </div>
    )
}