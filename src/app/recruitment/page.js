"use client";

import {
  Accountant,
  BackendDeveloper,
  FrontendReactJS,
  FrontendReactJS2,
  FrontendReactJS3,
  SaleIt,
} from "@/assets/icons/recruitment";
import "../../pages/styles/globals.css";
import { FilterSelect } from "@/components/FilterSelect";
import { useEffect } from "react";
import { useState } from "react";

const recruitmentList = [
  {
    id: 1,
    imgSrc: <FrontendReactJS />,
    name: "Frontend ReactJs",
    badge: ["Da Nang city", "2+ Experience"],
  },
  {
    id: 2,
    imgSrc: <FrontendReactJS2 />,
    name: "Frontend ReactJs",
    badge: ["Japan", "2+ Experience"],
  },
  {
    id: 3,
    imgSrc: <FrontendReactJS3 />,
    name: "Frontend ReactJs",
    badge: ["Ho Chi Minh City", "2+ Experience"],
  },
  {
    id: 4,
    imgSrc: <Accountant />,
    name: "Accountant",
    badge: ["Ho Chi Minh city", "2+ Experience"],
  },
  {
    id: 5,
    imgSrc: <BackendDeveloper />,
    name: "Backend Developer",
    badge: ["Ho Chi Minh city", "6 month+ Experience"],
  },
  {
    id: 6,
    imgSrc: <SaleIt />,
    name: "Sale  IT",
    badge: ["Ho Chi Minh city", "2+ Experience"],
  },
];

export default function RecruitmentPage() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("all");
  const [recruitmentListFiltered, setRecruitmentListFiltered] =
    useState(recruitmentList);
  useEffect(() => {
    let filteredRecruitmentList = recruitmentList.filter((recruitment) => {
      if (selectedOptions?.includes("all")) {
        return true;
      } else {
        const badgeLocations = recruitment.badge.map((badge) =>
          badge.toLowerCase()
        );
        return selectedOptions?.some((option) =>
          badgeLocations.includes(option.toLowerCase())
        );
      }
    });
    filteredRecruitmentList = filteredRecruitmentList.filter((item) =>
      item.name.toLowerCase().includes(searchInput)
    );
    setRecruitmentListFiltered(filteredRecruitmentList);
  }, [searchInput, selectedOptions]);

  const listContent = [
    {
      key: "1",
      label: `All`,
      children: (
        <div className="grid grid-cols-4 gap-x-[42px] items-start justify-start">
          {recruitmentListFiltered?.map((item, i) => (
            <div className="mb-[52px]" key={i}>
              <div className="hover:cursor-pointer">
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
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <div className="px-[80px] xl:max-w-[1440px] mx-auto">
          <FilterSelect
            listContent={listContent}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
        </div>
      </div>
    </div>
  );
}
