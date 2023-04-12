"use client";

import { useEffect, useState } from "react";
import "../../pages/styles/globals.css";
import Image from "next/image";
import { CustomTaps } from "@/components/Tab";

export default function CasestudyPage() {
  const [isShowContent, setIsShowContent] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [newsData, setNewsData] = useState([]);
  const [casestudyListFiltered, setcasestudyListFiltered] = useState();
  const [category, setCategory] = useState("All");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/news");
      const data = await response.json();
      setNewsData(data);
      setcasestudyListFiltered(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    setcasestudyListFiltered(
      newsData.filter(
        (item) =>
          item.name.toLowerCase().includes(searchInput) &&
          item.category.toLowerCase().includes(category.toLowerCase())
      )
    );
  }, [searchInput, category]);

  const listContent = [
    {
      key: "1",
      label: `All`,
      children: (
        <div className="grid grid-cols-4 gap-x-[42px] items-start justify-start">
          {casestudyListFiltered?.map((item, i) => (
            <div
              className="mb-[32px] hover:shadow-hover hover:bg-[#fff] p-5 transition-all duration-300"
              key={i}
            >
              <div className="hover:cursor-pointer">
                <div className="w-full h-auto min-h-[200px] relative hover:scale-110 transition-all duration-300">
                  <Image src={item.imgSrc} fill sizes="auto" alt={item.name} />
                </div>
                <h4 className="font-[400] text-[15px] leading-[22px] text-body mt-[20px] mb-[12px] hover:text-sub">
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
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: `New`,
      children: (
        <div className="grid grid-cols-4 gap-x-[42px] items-start justify-start">
          {casestudyListFiltered?.map((item, i) => (
            <div
              className="mb-[32px] hover:shadow-hover hover:bg-[#fff] p-5 transition-all duration-300"
              key={i}
            >
              <div className="hover:cursor-pointer">
                <div className="w-full h-auto min-h-[200px] relative hover:scale-110 transition-all duration-300">
                  <Image src={item.imgSrc} fill sizes="auto" alt={item.name} />
                </div>
                <h4 className="font-[400] text-[15px] leading-[22px] text-body mt-[20px] mb-[12px] hover:text-sub">
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
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <div className="px-[80px] xl:max-w-[1440px] mx-auto">
          <CustomTaps
            listContent={listContent}
            isShowContent={isShowContent}
            setIsShowContent={setIsShowContent}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setCategory={setCategory}
          />
        </div>
      </div>
    </div>
  );
}
