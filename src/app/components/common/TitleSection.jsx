import Image from "next/image";

export function TitleSection({ title, urlIcon }) {
  return (
    <div className="mt-[16px] mr-[24px] w-[auto] flex items-center ">
      <div className="w-[40px] h-[40px] rounded-full bg-secondaryOpacity flex justify-center items-center border">
        <Image src={urlIcon} width={24} height={24} alt="Calendar icon" />
      </div>
      <h3 className="ml-4 font-body text-h3">{title}</h3>
    </div>
  );
}
