export const TextSection = ({ title, desc }) => {
  return (
    <div>
      <h4 className="font-[600] text-[39px] leading-[48px] text-sub">
        {title}
      </h4>
      <p className="font-[400] text-[19px] sm:text-[13px] leading-[32px] text-sub mt-[8px]">{desc}</p>
    </div>
  );
};
