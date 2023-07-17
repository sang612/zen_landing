/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function CardCaseStudy({ casestudyListFiltered }) {
  const router = useRouter();
  const t = useTranslations();

  return (
    <div className="flex flex-wrap lg:flex-col items-center justify-start gap-x-[40px]">
      {casestudyListFiltered?.length ? (
        casestudyListFiltered?.map((item, i) => (
          <div
            className="w-[30%] lg:w-full mb-[32px] hover:shadow-hover hover:bg-[#fff] p-5 sm:px-0 transition-all duration-300"
            key={i}
          >
            <div
              onClick={() => {
                router.push(`/casestudy/${item.id}`);
              }}
              className="hover:cursor-pointer"
            >
              <div className="w-full  relative hover:scale-110 transition-all duration-300">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className=""
                  width={300}
                  height={300}
                />
              </div>
              <h4 className="font-[400] text-[15px] leading-[22px] text-sub mt-[20px] mb-[12px] hover:text-sub">
                {item.name}
              </h4>
            </div>
            <div>
              {item.badge.map((e, i) => (
                <span
                  key={i}
                  className="first-line:mt-32 box-decoration-clone mr-[8px] py-[6px] px-[8px] bg-[#F4F6F8] rounded-[8px] text-[11px] font-[400] leading-[20px] text-sub tracking-[0.01em]"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        ))
      ) : (
        <h4 className="font-[400] text-[15px] leading-[22px] text-sub mt-[20px] mb-[12px] hover:text-sub">
          {t("NotFound")}
        </h4>
      )}
    </div>
  );
}
