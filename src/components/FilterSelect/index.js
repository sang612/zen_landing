import { CategoryIcon, LocationIcon, SearchIcon } from "@/assets/icons";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Select, { components } from "react-select";

const locationOptions = [
  { value: "all", label: "All" },
  { value: "ha noi", label: "Ha Noi" },
  { value: "ho chi minh city", label: "Ho Chi Minh" },
  { value: "da nang city", label: "Da Nang" },
  { value: "Japan", label: "Japan" },
];
const teamOptions = [
  { value: "creation-line", label: "Creation line" },
  { value: "team-a", label: "Team A" },
];

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <LocationIcon />
    </components.DropdownIndicator>
  );
};
const ByTeamDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CategoryIcon />
    </components.DropdownIndicator>
  );
};
const InputOption = ({
  getStyles,
  isDisabled,
  isFocused,
  isSelected,
  children,
  innerProps,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  let bg = "transparent";
  if (isFocused) bg = "#eee";
  if (isActive) bg = "#B2D4FF";

  const style = {
    alignItems: "center",
    backgroundColor: bg,
    color: "inherit",
    display: "flex ",
  };

  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    style,
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <div>
        <input
          type="checkbox"
          id="A3-yes"
          name="A3-confirmation"
          defaultValue="yes"
          className="opacity-0 absolute h-5 w-5"
          checked={isSelected}
          onChange={() => {}}
        />
        <div className="bg-[#fff] border rounded-[6px] border-sub w-5 h-5 flex flex-shrink-0 justify-center items-center mr-[11px] focus-within:bg-red-500 focus-within:border-blue-500">
          <svg
            className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
            version="1.1"
            viewBox="0 0 17 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(-9 -11)" fill="#fff" fillRule="nonzero">
                <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {children}
    </components.Option>
  );
};

const customStyles = {
  control: (base) => ({
    ...base,
    height: 48,
    minHeight: 48,
  }),
};

export const FilterSelect = ({
  listContent,
  searchInput,
  setSearchInput,
  setSelectedOptions,
}) => {
  const [activeTab] = useState(0);
  const t = useTranslations("Recruitment");

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between mb-[52px] pb-[11px] sm:mb-0">
        <div className="relative h-[44px] min-w-[416px] sm:w-full sm:min-w-0 sm:mx-auto mb-2 sm:mb-0">
          <input
            type="text"
            className="placeholder:text-[#CACACA] placeholder:text-[400] placeholder:text-[13px] text-[400] text-[13px] leading-[20px] w-full h-full p-[8px] rounded-[8px] border border-solid border-[#CACACA] text-sub outline-none"
            placeholder={t("Search")}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <SearchIcon className="absolute right-[8px] top-1/2 -translate-y-1/2" />
        </div>
        <div className="flex sm:flex-col sm:w-full sm:min-w-0 sm:mx-auto">
          <Select
            instanceId={1}
            defaultValue={[]}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={(options) => {
              if (Array.isArray(options)) {
                setSelectedOptions(options.map((opt) => opt.value));
              }
            }}
            options={locationOptions}
            components={{
              DropdownIndicator,
              Option: InputOption,
              IndicatorSeparator: () => null,
            }}
            placeholder={t("ByLocation")}
            className="min-w-[256px] h-[48px] text-[13px] text-sub leading-[20px] rounded-[8px] sm:my-2"
            styles={customStyles}
          />
          <Select
            instanceId={2}
            defaultValue={[]}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={(options) => {
              if (Array.isArray(options)) {
                setSelectedOptions(options.map((opt) => opt.value));
              } else {
                setSelectedOptions([]);
              }
            }}
            options={teamOptions}
            components={{
              DropdownIndicator: ByTeamDropdownIndicator,
              Option: InputOption,
              IndicatorSeparator: () => null,
            }}
            placeholder={t("ByTeam")}
            className="min-w-[256px] h-[48px] text-[13px] text-sub leading-[20px] rounded-[8px] ml-[32px] sm:ml-0"
            styles={customStyles}
          />
        </div>
      </div>
      <div className="min-h-[288px]">{listContent[activeTab]?.children}</div>
    </div>
  );
};
