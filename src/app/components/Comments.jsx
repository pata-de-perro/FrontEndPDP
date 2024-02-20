import clsx from "clsx";
import Image from "next/image";

export default function Comments() {
  return (
    <div
      className={clsx(
        "flex-wrap",
        
        "w-auto",
        "full-size",
        "flex",
        "items-center",
        "justify-center",
        "mt-20",
        "flex-col"
      )}
    >
      <p className={clsx("text-accent2", "text-h1")}>Nuestros usuarios</p>
      <div className={clsx("flex", "flex-col", "drop-shadow-2xl", "w-[302px]")}>
        <div
          className={clsx(
            "mt-5",
            "bg-azulGris50",
            "rounded-xl",
            "flex",
            "flex-col",
            "items-center"
          )}
        >
          <div
            className={clsx(
              "flex",
              "justify-start",
              "mt-3",
              "ml-6",
              "size-full"
            )}
          >
            <Image
              src="/Accent.svg"
              width={20}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
          <div className={clsx("flex items-center", "justify-center", "mt-3")}>
            <Image
              src="/Women-comments.svg"
              width={100}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "flex-col",
              "my-4"
            )}
          >
            <p className={clsx(
                "text-h3",
                "text-secondary"
            )}>Mariana</p>
            <p className={clsx(
                "text-regular-bold",
                "text-azulGris700",
            )}>(34 años)</p>
            <div
              className={clsx(
                "flex",
                "flex-col",
                "items-center",
                "justify-center"
              )}
            >
              <p>Como guía de turista </p>
              <p>siempre necesito un</p>
              <p>transporte seguro,</p>
              <p> me ayudara a organizar mis</p>
              <p>tours sin contratiempos.</p>
            </div>
          </div>
          <div
            className={clsx("flex", "justify-end", "mb-3", "mr-6", "size-full")}
          >
            <Image
              src="/Accent.svg"
              width={20}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
        </div>
      </div>
      <div className={clsx("flex", "flex-col", "drop-shadow-2xl", "w-[302px]")}>
        <div
          className={clsx(
            "mt-5",
            "bg-azulGris50",
            "rounded-xl",
            "flex",
            "flex-col",
            "items-center"
          )}
        >
          <div
            className={clsx(
              "flex",
              "justify-start",
              "mt-3",
              "ml-6",
              "size-full"
            )}
          >
            <Image
              src="/Accent.svg"
              width={20}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
          <div className={clsx("flex items-center", "justify-center", "mt-3")}>
            <Image
              src="/Man-comments1.svg"
              width={100}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "flex-col",
              "my-4"
            )}
          >
            <p className={clsx(
                "text-h3",
                "text-secondary"
            )}>Santiago</p>
            <p>(22 años)</p>
            <div
              className={clsx(
                "flex",
                "flex-col",
                "items-center",
                "justify-center"
              )}
            >
              <p>Lo que me gusta es que</p>
              <p>podré viajar con mis amigos</p>
              <p>seguros y sin </p>
              <p>preocupaciones.</p>
            </div>
          </div>
          <div
            className={clsx("flex", "justify-end", "mb-3", "mr-6", "size-full")}
          >
            <Image
              src="/Accent.svg"
              width={20}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
        </div>
      </div>
      <div className={clsx("flex", "flex-col", "drop-shadow-2xl", "w-[302px]")}>
        <div
          className={clsx(
            "mt-5",
            "bg-azulGris50",
            "rounded-xl",
            "flex",
            "flex-col",
            "items-center"
          )}
        >
          <div
            className={clsx(
              "flex",
              "justify-start",
              "mt-3",
              "ml-6",
              "size-full"
            )}
          >
            <Image
              src="/Accent.svg"
              width={20}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
          <div className={clsx("flex items-center", "justify-center", "mt-3")}>
            <Image
              src="/Man-comments2.svg"
              width={100}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
          <div
            className={clsx(
              "flex",
              "items-center",
              "justify-center",
              "flex-col",
              "my-4"
            )}
          >
            <p className={clsx(
                "text-h3",
                "text-secondary"
            )}>Miguel</p>
            <p>(45 años)</p>
            <div
              className={clsx(
                "flex",
                "flex-col",
                "items-center",
                "justify-center"
              )}
            >
              <p>Cómo manejaré y  </p>
              <p>disfrutaré con mi familia</p>
              <p>y mascotas al 100%. </p>
            </div>
          </div>
          <div
            className={clsx("flex", "justify-end", "mb-3", "mr-6", "size-full")}
          >
            <Image
              src="/Accent.svg"
              width={20}
              height={20}
              alt="Vertical road pic"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
