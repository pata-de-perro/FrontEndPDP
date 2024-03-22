"use client"

import { clsx } from "clsx";
import { useForm } from "react-hook-form";
// import Link from "next/link";
// import { register } from "react-scroll/modules/mixins/scroller";
import React from "react";
// import { createContext, useContext, useState } from "react";

export const FriendsContext = React.createContext()

export function FormInvite() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
      } = useForm();


  return (
     <form>
      <div className="form-control">
        <input
          type="email"
          id="email"
          placeholder="Correo electrónico"
          className={clsx("input input-bordered input-sm")}
          {...register("email", {
            required: { value:true, message: "Por favor ingresa un correo electrónico valido"},
            pattern: {
                value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
              },
          })}
        />
        {errors.email && (
          <span
            className={clsx("text-regular font-body text-red-500", "ml-[5px]")}
          >
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="form-control">
        <button
          type="submit"
          className={clsx(
            "bg-primary",
            "w-[450px]",
            "text-white text-regular",
            "px-[8px] py-[8px]",
            "m-4",
            "rounded-md",
            "flex justify-center",
            "hover:bg-accent1 hover:text-accent2",
            "border-2 border-primary hover:border-accent1"
          )}
        >
          Enviar invitación
        </button>
      </div>
    </form>

  );
}
