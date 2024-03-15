import clsx from "clsx";

export default function Comments() {
  const comments = [
    {
      img: "/Women-comments.svg",
      name: "Mariana",
      age: "34 años",
      coment:
        "Como guía turística siempre necesito tener orden y claridad, me ayudará a organizar mis tours sin contratiempos.",
    },
    {
      img: "/Man-comments1.svg",
      name: "Santiago",
      age: "22 años",
      coment:
        "Lo que me gusta es que podré viajar con mis amigos seguros y sin preocupaciones.",
    },
    {
      img: "/Man-comments2.svg",
      name: "Miguel",
      age: "45 años",
      coment:
        "Olvidate de que tus amigos lleguen al lugar que no era. Todos pueden ver cual es el plan y su ubicación.",
    },
  ];

  return (
    <div
      id="comments"
      className={clsx(
        "flex flex-wrap flex-col",
        "items-center justify-center",
        "w-auto",
        "full-size",
        "my-10"
      )}
    >
      <p className={clsx("text-accent2", "text-h1")}>Nuestros usuarios</p>
      <div
        className={clsx(
          "flex flex-col",
          "items-center justify-center",
          "w-auto",
          "full-size",
          "md:flex-row md:place-content-evenly md:w-full",
          "lg:w-[1028px]"
        )}
      >
        {comments.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "flex flex-none flex-col",
                "drop-shadow-2xl",
                "w-[302px]",
                "md:mx-2 md:w-[220px]",
                "lg:w-[300px]"
              )}
            >
              <div
                className={clsx(
                  "grid grid-cols-1",
                  "bg-appBackground",
                  "mt-5",
                  "rounded-xl",
                  "md:h-[369px]"
                )}
              >
                <img
                  src="/Accent.svg"
                  alt="accent icon"
                  className={clsx("w-[20px] h-[20px]", "mt-3 ml-3")}
                />
                <div className={clsx("flex flex-wrap ", "justify-center")}>
                  <img
                    src={item.img}
                    width={100}
                    height={20}
                    alt="comment user image"
                  ></img>
                  <div
                    className={clsx(
                      "flex flex-col",
                      "items-center justify-center",
                      "my-4"
                    )}
                  >
                    <p
                      className={clsx("text-h3 font-heading", "text-secondary")}
                    >
                      {item.name}
                    </p>
                    <p
                      className={clsx(
                        "text-regularBold font-body",
                        "text-azulGris700"
                      )}
                    >
                      {item.age}
                    </p>
                    <div
                      className={clsx(
                        "flex flex-col",
                        "items-center justify-center"
                      )}
                    >
                      <p className="font-body text-regular text-center mx-6 mt-2">
                        {item.coment}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={clsx("flex", "justify-end items-end", "size-full")}
                >
                  <img
                    src="/Accent.svg"
                    alt="Vertical road pic"
                    className={clsx("w-[20px] h-[20px]", "mb-3 mr-3")}
                  ></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
