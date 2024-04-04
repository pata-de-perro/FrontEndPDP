import clsx from "clsx";

export function FormAvatar({ onSubmitAvatar, register, errors, session}){

    return(
        <div className="flex justify-center">
            <form onSubmit={onSubmitAvatar}>
                <div className="form-control">
                    <input type="file" id="avatar" accept="image/png, image/jpeg, image/jpg"
                    {...register("avatar", {
                        required: {
                            value: true,
                            message: "Es necesario que elijas un archivo para poder enviar el formulario",
                        },
                        pattern: {
                            value: /(.*?)\.(jpg|png|jpeg)$/,
                            message: "Es necesario que elijas un archivo que sea un jpg, jpeg o png",
                        }
                    })} 
                    />
                    {errors.avatar && (
                        <span className="text-regular font-body text-red-500 ml-[5px] w-[450px]">
                            {errors.avatar.message}
                        </span>
                    )}
                    {errors.pattern && (
                        <span className="text-regular font-body text-red-500 ml-[5px] w-[450px]">
                            {errors.pattern.message}
                        </span>
                    )}
                </div>
                <div className="form-control mt-4 items-center">
                    <button
                        type="submit"
                        className={clsx(
                            "btn btn-block",
                            "justify-center",
                            "w-fit px-14",
                            "bg-azulGris200 text-azulGris900",
                            "hover:bg-secondary hover:text-accent2"
                        )}>
                        Cargar imágen
                    </button>
                </div>
            </form>
        </div>
    )
}