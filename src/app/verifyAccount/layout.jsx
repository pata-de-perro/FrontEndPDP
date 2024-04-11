import clsx from "clsx";

export default function verifyAccount({children}) {
  return (
    <>
      <main className={clsx(
        "w-[full] h-screen", 
        "bg-primary",
        "md:flex-none md:item-start",
        "lg:flex lg:justify-center lg:items-center",
        )}>
       { children }
      </main>
    </>
  );
}
