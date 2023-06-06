"use client";

import { useEffect, useState } from "react";
import "../../../pages/styles/globals.css";
import Image from "next/image";
import { CustomTaps } from "@/components/Tab";

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
        <div className="flex flex-wrap lg:flex-col items-center justify-between gap-x-[40px]">
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
                  <div className="w-full relative hover:scale-110 transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      sizes="auto"
                      alt={item.name}
                      className="h-auto w-full "
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
        <div className="flex flex-wrap lg:flex-col items-center justify-between gap-x-[40px]">
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
                  <div className="w-full relative hover:scale-110 transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      sizes="auto"
                      alt={item.name}
                      className="h-auto w-full "
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
        <div className="flex flex-wrap lg:flex-col items-center justify-between gap-x-[40px]">
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
                  <div className="w-full relative hover:scale-110 transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      sizes="auto"
                      alt={item.name}
                      className="h-auto w-full "
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
        <div className="flex flex-wrap lg:flex-col items-center justify-between gap-x-[40px]">
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
                  <div className="w-full relative hover:scale-110 transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      sizes="auto"
                      alt={item.name}
                      className="h-auto w-full "
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
          <div className="relative xl:max-w-[1440px] mx-auto">
            {listDetail.map((item, i) => (
              <div
                className="relative w-full h-[1024px] lg:h-auto lg:min-h-[300px]"
                key={i}
              >
                <Image
                  src={item}
                  fill
                  className="w-full h-full object-contain"
                  alt="zenhair"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
