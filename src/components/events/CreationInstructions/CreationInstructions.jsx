import clsx from "clsx";

export function CreationInstructions() {
  return (
    <section className="sr-only md:not-sr-only lg:not-sr-only">
    <div className={clsx(
        "mt-8", 
        "flex flex-col ",
        "p-8 h-fit",
        "bg-white drop-shadow-2xl rounded-2xl mb-4",
        "md:w-[300px] lg:w-[400px]",
        )}>
      <ul className="font-body text-regularBold mt-">
      Primero hay que elegir el tipo de evento que se estará planificando
      </ul>
        <li className="font-body text-regular mt-2">
          <a className="underline decoration-4 decoration-primary">Un viaje</a>
          <a> es aquel que tiene como duración de dos días o más.</a>
        </li>
        <li className="font-body text-regular mt-2">
          <a className="underline decoration-4 decoration-secondary">Una salida</a>
          <a> es aquella que tiene como duración sólo un día e inicia a
          una hora en específico.</a>
        </li>
        <ul className="font-body text-regularBold mt-6">
            Elige la ciudad o municipio en la que quieras hacer tu evento
          </ul>
        <li className="font-body text-regular">
            <a>La plataforma </a>
            <a className="underline decoration-4 decoration-accent1">busca por zonas </a>
            <a>esta te hará sugerencias basado en diferentes categorías.</a>
        </li>
        <ul className="font-body text-regularBold mt-6">
            Elige la fecha o fechas de tu evento
          </ul>
        <li className="font-body text-regular mt-2">
            <a>Si elegiste </a>
            <a className="underline decoration-4 decoration-primary">un viaje</a>
            <a>, podrás elegir una </a>
            <a className="underline decoration-4 decoration-primary">
                 fecha de inicio y una fecha de término.</a>
        </li>
        <li className="font-body text-regular mt-2">
            <a>Si elegiste </a>
            <a className="underline decoration-4 decoration-secondary">una salida</a> 
            <a>, podrás elegir</a>
            <a className="underline decoration-4 decoration-secondary"> la fecha de inicio y su hora.</a>
        </li>
        <ul className="font-body text-regularBold text-center mt-4">Has click en "Guardar tu evento" para continuar con la planeación.</ul>
    </div>
    </section>
  );
}
