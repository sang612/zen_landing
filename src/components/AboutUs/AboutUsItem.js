export const AboutUsItem = ({ icon, title, desc, delay }) => {
  const IconComponent = icon;

  return (
    <div
      className="wow fadeInLeft hover:bg-[#fff] w-full flex px-[20px] sm:px-0 py-[12px] items-center rounded-[10px] hover:shadow-hover transition-all duration-[0.2s] ease-in-out"
      data-wow-delay={delay}
    >
      <div>
        <IconComponent />
      </div>
      <div className="ml-[16px]">
        <h4 className="font-[600] text-[19px] leading-[32px] text-title">
          {title}
        </h4>
        <p className="font-[400] text-[13px] leading-[20px] text-sub">{desc}</p>
      </div>
    </div>
  );
};
