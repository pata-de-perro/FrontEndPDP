"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({ 
    mode: 'onTouched'
  });

  return (
    <main
      className={clsx(
        "flex",
        "flex-wrap",
        "lg:flex-nowrap",
        "justify-center",
        "p-[20px]",
        "lg:w-[1280px] lg:mt-[30px] lg:justify-center"
      )}
    >
      <Image
        src="/World.svg"
        width={316}
        height={316}
        alt="World image"
        className="absolute left-[-50px] top-[-150px] -z-10 justify-self-start"
      />
      <div
        className={clsx(
          "flex justify-center",
          "md:pb-[15px] md:flex-row md:justify-start",
          "lg:flex-wrap",
          "lg:w-[500px]"
        )}
      >
        <Image
          src="/Login-cuate-1.svg"
          width={329}
          height={329}
          alt="progresive app pana"
          className={clsx(
            "w-[319px]",
            "pt-[45px]",
            "sr-only",
            "md:not-sr-only",
            "md:w-[329px] md:h-[329px]",
            "lg:w-[400px] lg:h-[400px]",
            "lg:self-end"
          )}
        />
        <div className="md:grid md:content-center md:w-[350px] lg:content-start lg:w-[500px]">
          <div className="grid justify-items-center md:justify-items-start lg:flex">
            <p className={clsx("text-h1 text-azulGris900", "font-heading")}>
              Bienvenido a{" "}
            </p>
            <p
              className={clsx(
                "pl-[3px]",
                "text-h1 text-primary",
                "font-heading",
                "justify-center",
                "md:justify-items-start"
              )}
            >
              PataDePerro
            </p>
          </div>
          <p className="font-body text-regular w-[360px] text-center md:text-left md:w-[300px] lg:w-[400px]">
            Organiza tu viaje, guarda puntos de interés y comparte el itinerario
            con todos tus compañeros de viaje.
          </p>
        </div>
      </div>
      <div
        className={clsx(
          "w-[90vw] mb-[15px]",
          "lg:my-[0px] lg:mx-[15px] border-azulGris50 md:border-b lg:border-b-0 lg:border-l",
          "lg:w-[35px]"
        )}
      ></div>
      <div
        className={clsx(
          "grid justify-items-center",
          "pb-[15px]",
          "lg:justify-items-start"
        )}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-1">
          <p className="text-h1 font-heading text-center text-azulGris900 pt-[15px]">
            Regístrate en
          </p>
          <Link href="/">
            <Image
              src="/dePataDePerroLogo.svg"
              width={200}
              height={35}
              alt="Logo Pata de Perro"
              className="lg:w-[420px] lg:h-[auto]"
            />
          </Link>
        </div>
        <p className="text-regular font-body text-center text-azulGris900">
          ¿Ya eres usuario?
        </p>
        <p className="text-regularBold font-body text-center text-azulGris900">
          <Link href="/login">¡Inicia sesión ahora!</Link>
        </p>

        {/* We will work on the google login if we got time */}

        {/* <button
          className={clsx(
            "border border-azulGris600",
            "w-[300px] p-[15px] my-[15px]",
            "flex justify-center",
            "items-center",
            "rounded-lg"
          )}
        >
          <Image src="/Google.svg" width={25} height={25} alt="Google logo" />
          <p className="font-body text-regularSemiBold">Continuar con Google</p>
        </button>
        <div className="flex justify-center items-center m-[15px]">
          <p className="px-[10px]">----</p>
          <p className="text-regular font-body text-center text-azulGris900 w-[200px] md:w-[250px]">
            O registrate con tu correo electrónico
          </p>
          <p className="px-[10px]">----</p>
        </div> */}
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            onerror

            reset()
          })}
        >
          <div>
            <label
              className={clsx(
                "text-regular font-body text-azulGris800",
                "bg-appBackground",
                "z-10 justify-self-start ml-[15px] mt-[15px]"
              )}
            >
              Nombre
            </label>
            <input
              type="text"
              className={clsx(
                "mt-1 px-3 py-2",
                "h-[50px]",
                "bg-white",
                "border shadow-sm border-slate-300",
                "placeholder-slate-400",
                "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
                "block w-[450px] rounded-lg focus:ring-1"
              )}
              placeholder="Tu nombre"
              {...register("userName", {
                required: {
                  value: true,
                  message: "Nombre es requerido",
                },
                pattern: {
                  value: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/,
                  message: "Utiliza puros carácteres del alfabeto"
                },
                minLength: {
                  value: 2,
                  message: "El nombre debe de ser de mínimo 2 carateres",
                },
                maxLength: {
                  value: 20,
                  message: "El nombre debe de ser de máximo 20 carateres",
                },

              })}
            />
            {errors.userName && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.userName.message}
              </span>
            )}
              {errors.pattern && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.pattern.message}
              </span>
            )}
            {errors.minLength && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.minLength.message}
              </span>
            )}
            {errors.maxLength && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.maxLength.message}
              </span>
            )}
          </div>
          <div>
            <label
              className={clsx(
                "text-regular font-body text-azulGris800",
                "bg-appBackground",
                "z-10 justify-self-start ml-[15px] mt-[15px]"
              )}
            >
              Correo electrónico
            </label>
            <input
              type="email"
              className={clsx(
                "mt-1 px-3 py-2",
                "h-[50px]",
                "bg-white",
                "border shadow-sm border-slate-300",
                "placeholder-slate-400",
                "focus:outline-none focus:border-sky-500 focus:ring-sky-500",
                "block w-[450px] rounded-lg focus:ring-1"
              )}
              placeholder="Correo electrónico"
              {...register("email", {
                required: {
                  value:true,
                  message:"Tu correo electrónico es requerido",
                },
                pattern:{
                  value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                }
              })}
            />
            {errors.email && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              className={clsx(
                "text-regular font-body text-azulGris800",
                "bg-appBackground",
                "z-10 justify-self-start ml-[15px] mt-[15px]"
              )}
            >
              Contraseña
            </label>
            <input
              type="password"

              className={clsx(
                "px-3",
                "bg-white",
                "border shadow-sm border-slate-300",
                "placeholder-slate-400",
                "focus:outline-none focus:border-sky-45 focus:ring-sky-500",
                "block w-[450px] h-[50px] rounded-lg focus:ring-1"
              )}
              placeholder="Contraseña"
              {...register("password", {
                required: {
                  value: true,
                  message:"Es requerida tu contraseña",
                },
                pattern:{
                  value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                  message:"La contraseña necesita mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial ",
                }
              })}
            />
            {errors.password && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.password.message}
              </span>
            )}
            {
              errors.pattern && (
                <span>{errors.pattern.message}</span>
              )
            }
          </div>
          <div>
            <label
              className={clsx(
                "text-regular font-body text-azulGris800",
                "bg-appBackground",
                "z-10 justify-self-start ml-[15px] mt-[15px]"
              )}
            >
              Confirma tu contraseña
            </label>
            <input
              type="password"
              className={clsx(
                "px-3",
                "bg-white",
                "border shadow-sm border-slate-300",
                "placeholder-slate-400",
                "focus:outline-none focus:border-sky-45 focus:ring-sky-500",
                "block w-[450px] h-[50px] rounded-lg focus:ring-1"
              )}
              placeholder="Confirma tu contraseña"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Es necesario confirmar la contraseña",
                },
                validate: (value) => {
                  if (value === watch('password')){
                    return true
                  } else {
                    return 'Las contraseñas no coinciden. Verifica su escritura'
                  }
                }
              })}
            />
            {errors.confirmPassword && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div>
            <div>
            <input
              type="checkbox"
              {...register("termsAndConditions", {
                required: {
                  value: true,
                  message: "Es necesario que aceptes los términos y condiciones.",
                },
              })}
              className="mr-2"
            ></input>
            <label className={clsx(
                "text-regular font-body text-azulGris800",
                "justify-self-start ml-[5px] mt-[15px]"
              )}
            >Acepto términos y condiciones</label>
            </div>
            {errors.termsAndConditions && (
              <span className="text-regular font-body text-red-500 ml-[15px]">
                {errors.termsAndConditions.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className={clsx(
              "bg-primary",
              "text-white text-regular",
              "px-[8px] py-[8px]",
              "mb-[15px] mt-[60px]",
              "w-[450px]",
              "rounded-md",
              "flex justify-center",
              "hover:bg-accent1 hover:text-accent2",
              "border-2 border-primary hover:border-accent1"
            )}
            // disabled={}
          >
            Enviar
          </button>
        </form>
        <p className="text-center text-regular font-body text-azulGris500 w-[450px] p-[5px]">
          Al seguir usando una cuenta en México, aceptas los Términos de uso y
          confirmas que has leído la Política de privacidad.
        </p>
      </div>
      <Image
        src="/World.svg"
        width={450}
        height={450}
        alt="World image"
        className="absolute right-0 bottom-0 -z-10 justify-self-start"
      />
    </main>
  );
}
