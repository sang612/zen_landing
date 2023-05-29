"use client";

import "../../../pages/styles/globals.css";
import React from "react";
import { FilterSelect } from "@/components/FilterSelect";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

export default function RecruitmentPage() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("all");
  const [recruitmentData, setRecruitmentData] = useState([]);
  const [recruitmentListFiltered, setRecruitmentListFiltered] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/recruitment");
      const data = await response.json();
      setRecruitmentData(data);
      setRecruitmentListFiltered(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
		let filteredRecruitmentList = recruitmentData.filter((recruitment) => {
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
	}, [recruitmentData, searchInput, selectedOptions]);

  const listContent = [
    {
      key: "1",
      label: `All`,
      children: (
        <div className="grid grid-cols-4 lg:grid-cols-1 gap-x-[42px] items-start justify-start">
          {recruitmentListFiltered?.map((item, i) => {
            return (
              <div
                className="mb-[32px] lg:mb-[10px] hover:shadow-hover hover:bg-[#fff] p-5 sm:p-0 transition-all duration-300"
                key={i}
              >
                <div className="hover:cursor-pointer">
                  <div className="w-full h-auto relative hover:scale-110 transition-all duration-300">
                    <Image
                      src={item.imgSrc}
                      sizes="auto"
                      alt={item.name}
                      className="h-auto w-full"
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
            );
          })}
        </div>
      ),
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <div className="px-[80px] lg:px-6 xl:max-w-[1440px] mx-auto">
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
