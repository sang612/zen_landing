"use client";

import { useEffect, useState } from "react";
import "../../pages/styles/globals.css";
import Image from "next/image";
import { CustomTaps } from "@/components/Tab";

const casestudyList = [
  {
    id: 1,
    imgSrc: "/casestudy/zenhair.png",
    name: "Zenhair",
    badge: ["v 1.32.1", "Zen Apps"],
    detail: [
      "/casestudy/zenhair/1.png",
      "/casestudy/zenhair/2.png",
      "/casestudy/zenhair/3.png",
      "/casestudy/zenhair/4.png",
      "/casestudy/zenhair/5.png",
    ],
  },
  {
    id: 2,
    imgSrc: "/casestudy/zenwallet.png",
    name: "Zenwallet",
    badge: ["v 1.32.1", "Zen Apps"],
    detail: [
      "/casestudy/zenwallet/1.png",
      "/casestudy/zenwallet/2.png",
      "/casestudy/zenwallet/3.png",
      "/casestudy/zenwallet/4.png",
      "/casestudy/zenwallet/5.png",
    ],
  },
  {
    id: 3,
    imgSrc: "/casestudy/bego.png",
    name: "Bego app",
    badge: ["v 1.32.1", "Zen Apps"],
    detail: [
      "/casestudy/bego/1.png",
      "/casestudy/bego/2.png",
      "/casestudy/bego/3.png",
      "/casestudy/bego/4.png",
      "/casestudy/bego/5.png",
    ],
  },
  {
    id: 4,
    imgSrc: "/casestudy/zensmarket.png",
    name: "Zensmarket app",
    badge: ["v 1.32.1", "Zen Apps"],
    detail: [
      "/casestudy/zensmarket/1.png",
      "/casestudy/zensmarket/2.png",
      "/casestudy/zensmarket/3.png",
      "/casestudy/zensmarket/4.png",
      "/casestudy/zensmarket/5.png",
    ],
  },
  {
    id: 5,
    imgSrc: "/casestudy/zenfood.png",
    name: "Zenfood",
    badge: ["v 1.32.1", "Zen Apps"],
    detail: [
      "/casestudy/zenfood/1.png",
      "/casestudy/zenfood/2.png",
      "/casestudy/zenfood/3.png",
      "/casestudy/zenfood/4.png",
      "/casestudy/zenfood/5.png",
    ],
  },
  {
    id: 6,
    imgSrc: "/casestudy/money-tracker.png",
    name: "Money Tracker app",
    badge: ["v 1.32.1", "Zen Apps"],
    detail: [
      "/casestudy/money-tracker/1.png",
      "/casestudy/money-tracker/2.png",
      "/casestudy/money-tracker/3.png",
      "/casestudy/money-tracker/4.png",
      "/casestudy/money-tracker/5.png",
    ],
  },
  {
    id: 7,
    imgSrc: "/casestudy/mobile-tool-tracker.png",
    name: "Mobile tool Tracker app",
    badge: ["v 1.32.1", "Zen Apps"],
    detail: [
      "/casestudy/mobile-tool-tracker/1.png",
      "/casestudy/mobile-tool-tracker/2.png",
      "/casestudy/mobile-tool-tracker/3.png",
      "/casestudy/mobile-tool-tracker/4.png",
      "/casestudy/mobile-tool-tracker/5.png",
    ],
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
        <div className="flex flex-wrap items-center justify-between gap-x-[40px]">
          {casestudyListFiltered?.map((item, i) => (
            <div className="w-[30%] mb-[52px]" key={i}>
              <div
                onClick={() => {
                  setIsShowContent(false);
                  setListDetail(item.detail);
                }}
                className="hover:cursor-pointer"
              >
                <div className="w-full h-[284px] relative">
                  <Image src={item.imgSrc} fill sizes="auto" alt={item.name} />
                </div>
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
      label: `App`,
      children: `Content of Tab App`,
    },
    {
      key: "3",
      label: `Web`,
      children: `Content of Tab Web`,
    },
    {
      key: "4",
      label: `Blockchain`,
      children: `Content of Tab Blockchain`,
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
