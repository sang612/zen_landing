"use client";

import { useEffect, useState } from "react";
import "../../pages/styles/globals.css";
import Image from "next/image";
import { CustomTaps } from "@/components/Tab";
import { News1, News2, News3, News4 } from "@/assets/icons/news";

const casestudyList = [
  {
    id: 1,
    imgSrc: <News1 />,
    name: "Basic software testing training",
    badge: ["Online", "16 hour"],
  },
  {
    id: 2,
    imgSrc: <News2 />,
    name: "Blockchain seminar",
    badge: ["Online", "1,5 - 2 hour"],
  },
  {
    id: 3,
    imgSrc: <News3 />,
    name: "Internship program",
    badge: ["Ho Chi Minh City", "0+ Experience"],
  },
  {
    id: 4,
    imgSrc: <News4 />,
    name: "Coming soon",
    badge: ["Ho Chi Minh city"],
  },
];

export default function CasestudyPage() {
  const [isShowContent, setIsShowContent] = useState(true);
  const [listDetail, setListDetail] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [casestudyListFiltered, setcasestudyListFiltered] =
    useState(casestudyList);
  useEffect(() => {
    setcasestudyListFiltered(
      casestudyList.filter((item) =>
        item.name.toLowerCase().includes(searchInput)
      )
    );
  }, [searchInput]);

  const listContent = [
    {
      key: "1",
      label: `All`,
      children: (
        <div className="grid grid-cols-4 gap-x-[42px] items-start justify-start">
          {casestudyListFiltered?.map((item, i) => (
            <div className="mb-[52px]" key={i}>
              <div
                onClick={() => {
                  setIsShowContent(false);
                  setListDetail(item.detail);
                }}
                className="hover:cursor-pointer"
              >
                <div className="w-full h-auto relative">{item.imgSrc}</div>
                <h4 className="font-[400] text-[15px] leading-[22px] text-body mt-[20px] mb-[12px]">
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
      children: `Content of Tab App`,
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
          />
        </div>

        {!isShowContent && (
          <div className="relative xl:max-w-[1440px] mx-auto">
            {listDetail.map((item, i) => (
              <div className="relative w-full h-[1024px]" key={i}>
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
