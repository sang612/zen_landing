"use client";

import { useEffect, useState } from "react";
import "../../../pages/styles/globals.css";
import { CustomTaps } from "@/components/Tab";
import { CasestudyDetail } from "@/components/CasestudyDetail/CaseStudyDetail";

export default function CasestudyPage() {
  const [isShowContent, setIsShowContent] = useState(true);
  const [listDetail, setListDetail] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [casestudyData, setCasestudyData] = useState([]);
  const [category, setCategory] = useState("All");
  const [casestudyListFiltered, setcasestudyListFiltered] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/casestudy");
      const data = await response.json();
      setCasestudyData(data);
      setcasestudyListFiltered(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (category === "All" && !searchInput)
      setcasestudyListFiltered(casestudyData);
    else if (category === "All" && searchInput)
      setcasestudyListFiltered(
        casestudyData.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    else
      setcasestudyListFiltered(
        casestudyData.filter(
          (item) =>
            item.name.toLowerCase().includes(searchInput.toLowerCase()) &&
            item.category.toLowerCase().includes(category.toLowerCase())
        )
      );
  }, [searchInput, category, casestudyData]);

  const listContent = [
    {
      key: "1",
      label: `All`,
      children: (
        <div className="flex flex-wrap lg:flex-col items-center justify-start gap-x-[40px]">
          {casestudyListFiltered?.length ? (
            casestudyListFiltered?.map((item, i) => (
              <div
                className="w-[30%] lg:w-full mb-[32px] hover:shadow-hover hover:bg-[#fff] p-5 sm:px-0 transition-all duration-300"
                key={i}
              >
                <div
                  onClick={() => {
                    setIsShowContent(false);
                    setListDetail(item.detail);
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
                      className="mr-[8px] py-[6px] px-[8px] bg-[#F4F6F8] rounded-[8px] text-[11px] font-[400] leading-[20px] text-sub tracking-[0.01em]"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <h4 className="font-[400] text-[15px] leading-[22px] text-sub mt-[20px] mb-[12px] hover:text-sub">
              Not found
            </h4>
          )}
        </div>
      ),
    },
    {
      key: "2",
      label: `App`,
      children: (
        <div className="flex flex-wrap lg:flex-col items-center justify-start gap-x-[40px]">
          {casestudyListFiltered?.length ? (
            casestudyListFiltered?.map((item, i) => (
              <div
                className="w-[30%] lg:w-full mb-[32px] hover:shadow-hover hover:bg-[#fff] p-5 sm:px-0 transition-all duration-300"
                key={i}
              >
                <div
                  onClick={() => {
                    setIsShowContent(false);
                    setListDetail(item.detail);
                  }}
                  className="hover:cursor-pointer"
                >
                  <div className="w-full  relative hover:scale-110 transition-all duration-300">
                    <img
                      src={item.imgSrc}
                      sizes="auto"
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
                      className="mr-[8px] py-[6px] px-[8px] bg-[#F4F6F8] rounded-[8px] text-[11px] font-[400] leading-[20px] text-sub tracking-[0.01em]"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <h4 className="font-[400] text-[15px] leading-[22px] text-sub mt-[20px] mb-[12px] hover:text-sub">
              Not found
            </h4>
          )}
        </div>
      ),
    },
    {
      key: "3",
      label: `Web`,
      children: (
        <div className="flex flex-wrap lg:flex-col items-center justify-start gap-x-[40px]">
          {casestudyListFiltered?.length ? (
            casestudyListFiltered?.map((item, i) => (
              <div
                className="w-[30%] lg:w-full mb-[32px] hover:shadow-hover hover:bg-[#fff] p-5 sm:px-0 transition-all duration-300"
                key={i}
              >
                <div
                  onClick={() => {
                    setIsShowContent(false);
                    setListDetail(item.detail);
                  }}
                  className="hover:cursor-pointer"
                >
                  <div className="w-full  relative hover:scale-110 transition-all duration-300">
                    <img
                      src={item.imgSrc}
                      sizes="auto"
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
                      className="mr-[8px] py-[6px] px-[8px] bg-[#F4F6F8] rounded-[8px] text-[11px] font-[400] leading-[20px] text-sub tracking-[0.01em]"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <h4 className="font-[400] text-[15px] leading-[22px] text-sub mt-[20px] mb-[12px] hover:text-sub">
              Not found
            </h4>
          )}
        </div>
      ),
    },
    {
      key: "4",
      label: `Blockchain`,
      children: (
        <div className="flex flex-wrap lg:flex-col items-center justify-start gap-x-[40px]">
          {casestudyListFiltered?.length ? (
            casestudyListFiltered?.map((item, i) => (
              <div
                className="w-[30%] lg:w-full mb-[32px] hover:shadow-hover hover:bg-[#fff] p-5 sm:px-0 transition-all duration-300"
                key={i}
              >
                <div
                  onClick={() => {
                    setIsShowContent(false);
                    setListDetail(item.detail);
                  }}
                  className="hover:cursor-pointer"
                >
                  <div className="w-full  relative hover:scale-110 transition-all duration-300">
                    <img
                      src={item.imgSrc}
                      sizes="auto"
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
                      className="mr-[8px] py-[6px] px-[8px] bg-[#F4F6F8] rounded-[8px] text-[11px] font-[400] leading-[20px] text-sub tracking-[0.01em]"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <h4 className="font-[400] text-[15px] leading-[22px] text-sub mt-[20px] mb-[12px] hover:text-sub">
              Not found
            </h4>
          )}
        </div>
      ),
    },
  ];
  return (
    <div className="relative overflow-hidden">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <div className="px-[80px] lg:px-6 xl:max-w-[1440px] mx-auto">
          <CustomTaps
            listContent={listContent}
            isShowContent={isShowContent}
            setIsShowContent={setIsShowContent}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setCategory={setCategory}
          />
        </div>

        {!isShowContent && (
          <CasestudyDetail
            title={listDetail.title}
            desc={listDetail.desc}
            label={listDetail.label}
            content={listDetail.content}
            label2={listDetail.label2}
            content2={listDetail.content2}
            image={listDetail.image}
            special={listDetail.special}
            qr={listDetail.qr}
            qr2={listDetail.qr2}
            link1={listDetail.link1}
            link2={listDetail.link2}
          />
        )}
      </div>
    </div>
  );
}
