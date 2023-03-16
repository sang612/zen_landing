import Image from "next/image";

export const FounderSliderItem = ({ src, name, desc }) => (
  <div>
    <div className="relative bg-[url('/blue-circle.svg')] bg-no-repeat w-[288px] h-[293px]">
      <div className="absolute top-[7%] left-[5%]">
        <Image src={src} width={256} height={255.86} alt='img'/>
      </div>
    </div>
    <div className="mt-[39.12px] text-center max-w-[288px]">
      <h4 className="font-[600] text-[16px] leading-[28px] tracking-[0.015em] text-[#0B2337]">
        {name}
      </h4>
      <h5 className="font-[400] text-[12px] leading-[20px] tracking-[0.01em] text-[#707172]">
        {desc}
      </h5>
    </div>
  </div>
);
