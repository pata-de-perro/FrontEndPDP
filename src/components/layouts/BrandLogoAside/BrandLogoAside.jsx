import Image from "next/image";
import clsx from "clsx";

export function BrandLogoAside() {
  return (
    <div className={clsx("h-14", "mx-4")}>
      <Image
        src="/DePataDePerroLogo.svg"
        alt="Logo of Pata de Perro"
        priority
        height={57}
        width={215}
      />
    </div>
  );
}
