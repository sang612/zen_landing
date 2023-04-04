import Image from "next/image";

export const TechnologyItem = ({ iconSrc, name }) => {

  return (
    <div className="flex items-center">
      <Image src={iconSrc} width={60} height={60} />
      <span className="ml-[18.88px]">{name}</span>
    </div>
  );
};
