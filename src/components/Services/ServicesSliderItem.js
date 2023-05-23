export const ServicesSliderItem = ({ title, listDesc, icon }) => {
  const IconComponent = icon;

  return (
    <div className="flex flex-col items-center justify-center p-[40px_20px] sm:p-[20px_10px] bg-[#fff] shadow-[0px_16px_24px_#28293d26] w-[358px] sm:w-[200px]  rounded-[20px] min-h-[440px]">
      <IconComponent width={100} height={100} />
      <h4 className="font-[600] text-[27px] sm:text-[19px] leading-[32px] text-sub mt-[12px] text-center">
        {title}
      </h4>
      <ul className="list-disc ml-[20px] mt-[32px] sm:mt-[10px] font-[400] text-[15px] sm:text-[9px] leading-[28px] sm:leading-[15px] text-sub">
        {listDesc.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
