import { SearchIcon } from "@/assets/icons";
import { useState } from "react";

export const CustomTaps = ({
  listContent,
  isShowContent,
  setIsShowContent,
  searchInput,
  setSearchInput,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-between border-b border-b-[#CACACA] border-solid mb-[52px] pb-[11px]">
        <div className="flex ">
          {listContent.map((tab, index) => (
            <button
              key={index}
              className={`text-[15px] leading-[28px] relative min-w-[64px] ${
                activeTab === index
                  ? "font-[600] text-primary after:absolute after:bottom-[-20px] after:left-0 after:content-[''] after:rounded-[2px] after:w-full after:h-[4px] after:bg-primary"
                  : "font-[400] text-sub"
              }`}
              onClick={() => {
                setIsShowContent(true);
                setActiveTab(index);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative h-[44px] min-w-[416px]">
          <input
            type="text"
            className="placeholder:text-[#CACACA] placeholder:text-[400] placeholder:text-[13px] text-[400] text-[13px] leading-[20px] w-full h-full p-[8px] rounded-[8px] border border-solid border-[#CACACA] text-sub outline-none"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchIcon className="absolute right-[8px] top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div>{isShowContent && listContent[activeTab]?.children}</div>
    </div>
  );
};
