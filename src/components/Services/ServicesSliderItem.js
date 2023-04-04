export const ServicesSliderItem = ({ title, listDesc, icon, isCurrent }) => {
  const IconComponent = icon;

  return (
    <div
      className={`${
        isCurrent ? "clarify filter-none z-10 absolute" : "blur-[2px] filter"
      } flex flex-col items-center justify-center p-[40px_20px] bg-[#fff] shadow-[0px_16px_24px_#28293d26] w-[358px] rounded-[20px]`}
    >
      <IconComponent width={100} height={100} />
      <h4 className="font-[600] text-[27px] leading-[32px] text-body mt-[12px] text-center">
        {title}
      </h4>
      <ul className="list-disc ml-[20px] mt-[32px] font-[400] text-[15px] leading-[28px] text-body">
        {listDesc.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
