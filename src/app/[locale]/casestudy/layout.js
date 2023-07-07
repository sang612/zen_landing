/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import "../../../pages/styles/globals.css";
import { Tabs } from "antd";
import CardCaseStudy from "@/components/CardCaseStudy";
import { SearchIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function CaseSutdyLayout({ children }) {
  const pathName = usePathname();
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [casestudyData, setCasestudyData] = useState([]);
  const [key, setKey] = useState("all");
  const [casestudyListFiltered, setcasestudyListFiltered] = useState([]);
  const t = useTranslations("News");
  const [isDetailPage, setIsDetailPage] = useState(false);
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
    if (key === "all" && !searchInput) setcasestudyListFiltered(casestudyData);
    else if (key === "all" && searchInput)
      setcasestudyListFiltered(
        casestudyData.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    else
      setcasestudyListFiltered(
        casestudyData.filter((item) => {
          const lowerCaseSearchInput = searchInput.toLowerCase();
          const lowerCaseKey = key.toLowerCase();
          const lowerCaseCategory = Array.isArray(item.category)
            ? item.category.map((cat) => cat.toLowerCase())
            : [item.category.toLowerCase()];

          return (
            item.name.toLowerCase().includes(lowerCaseSearchInput) &&
            lowerCaseCategory.includes(lowerCaseKey)
          );
        })
      );
  }, [searchInput, key, casestudyData]);
  const onChange = (key) => {
    casestudyData.map((caseStudy) => {
      setcasestudyListFiltered(caseStudy.category === key ? caseStudy : []);
    });
    setKey(key);
  };
  const onTabClick = () => {
    setIsDetailPage(false);
    router.push("/casestudy");
  };
  useEffect(() => {
    pathName === "/casestudy" || pathName === "/jp/casestudy"
      ? setIsDetailPage(false)
      : setIsDetailPage(true);
  }, [pathName]);
  const items = [
    {
      key: "all",
      label: `All`,
      children: isDetailPage ? (
        children
      ) : (
        <CardCaseStudy casestudyListFiltered={casestudyListFiltered} />
      ),
    },
    {
      key: "app",
      label: `App`,
      children: isDetailPage ? (
        children
      ) : (
        <CardCaseStudy casestudyListFiltered={casestudyListFiltered} />
      ),
    },
    {
      key: "web",
      label: `Web`,
      children: isDetailPage ? (
        children
      ) : (
        <CardCaseStudy casestudyListFiltered={casestudyListFiltered} />
      ),
    },
    {
      key: "blockchain",
      label: `Blockchain`,
      children: isDetailPage ? (
        children
      ) : (
        <CardCaseStudy casestudyListFiltered={casestudyListFiltered} />
      ),
    },
    {
      key: "ai",
      label: `AI`,
      children: isDetailPage ? (
        children
      ) : (
        <CardCaseStudy casestudyListFiltered={casestudyListFiltered} />
      ),
    },
  ];

  return (
    <div className="relative">
      <div className="relative xl:max-w-[1440px] mx-auto">
        <div className="px-[80px] lg:px-6 xl:max-w-[1440px] mx-auto">
          <Tabs
            activeKey={key}
            items={items}
            onChange={onChange}
            onTabClick={onTabClick}
            tabBarExtraContent={
              <div className="relative h-[30px] min-w-[416px] sm:min-w-[70%] sm:mt-[30px]">
                <input
                  type="text"
                  className="placeholder:text-[#CACACA] placeholder:text-[400] placeholder:text-[13px] text-[400] text-[13px] leading-[20px] w-full h-full p-[8px] rounded-[8px] border border-solid border-[#CACACA] text-sub outline-none"
                  placeholder={t("Search")}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <SearchIcon className="absolute right-[8px] top-1/2 -translate-y-1/2" />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
