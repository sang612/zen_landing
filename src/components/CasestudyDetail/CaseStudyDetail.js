/* eslint-disable @next/next/no-img-element */
"use client";

import useWidth from "@/hooks/useWidth";
import Link from "next/link";

export const CasestudyDetail = ({
  title,
  desc,
  label,
  content,
  label2,
  content2,
  image,
  special,
  qr,
  qr2,
  link1,
  link2,
  isAppleStore = false,
  isQRRight = false,
  label3
}) => {
  const { width, breakpoints } = useWidth();
  return (
    <div className="mx-[-80px] lg:-mx-6">
      <div
        className="w-full bg-no-repeat bg-cover m-0 p-[100px_0] sm:p-0 flex sm:flex-col items-start justify-between"
        style={{
          backgroundImage:
            width < breakpoints.sm
              ? image?.length > 1
                ? isQRRight
                  ? "linear-gradient(180deg, #ceedf9 30%, white 30%, white 60%, #ceedf9 60%, #ceedf9 100%)"
                  : "linear-gradient(0deg, #ceedf9 33.33%, white 33.33%, white 66.66%, #ceedf9 66.66%)"
                : "linear-gradient(180deg, #ceedf9 0%, #ceedf9 33.33%, white 33.33%, white 100%)"
              : image?.length > 1
              ? "linear-gradient(90deg, #ceedf9 33.33%, white 33.33%, white 66.66%, #ceedf9 66.66%) "
              : "linear-gradient(90deg, white 33.33%, #ceedf9 33.33%, #ceedf9 66.66%, #ceedf9 66.66%) ",
        }}
      >
        {image?.length > 1 ? (
          <>
            <div className="w-[33.3%] px-[20px] sm:w-full sm:pt-[35px]">
              <img
                src={image?.[0]}
                alt="image"
                className="lg:max-w-full mx-auto min-h-[476px] max-h-[476px]"
              />
              {qr2 && !isQRRight && (
                <div className="w-[40%] mx-auto mt-5">
                  {link1 && (
                    <Link href={link1} className="block text-center">
                      {link1}
                    </Link>
                  )}
                  <img
                    src="/casestudy/google-play.png"
                    alt="1"
                    className="w-full h-auto my-[10px]"
                  />
                  <img src={qr} alt="image" />
                </div>
              )}
            </div>
            <div className="w-[33.3%] sm:w-full px-[20px] sm:mt-[70px]">
              <img
                src={image?.[1]}
                alt="image"
                className="lg:max-w-full mx-auto min-h-[476px] max-h-[476px]"
              />
              {qr2 && !isQRRight && (
                <div className="w-[40%] mx-auto mt-5">
                  {link2 && (
                    <Link href={link2} className="block text-center">
                      {link2}
                    </Link>
                  )}
                  <img
                    src="/casestudy/app-store.png"
                    alt="qr1"
                    className="w-full h-auto my-[10px]"
                  />
                  <img src={qr2} alt="qr2" className="w-full h-auto" />
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-[66.6%] px-[40px] sm:px-[10px] sm:w-full sm:py-[20px]">
            <img src={image?.[0]} alt="image" className="w-full h-auto" />
          </div>
        )}
        <div
          className={`w-[33.3%] px-[40px] sm:w-full sm:pt-14 sm:pb-2 ${
            qr2 ? "sm:min-h-[800px]" : "sm:min-h-[589px]"
          } `}
        >
          <h4 className="text-title2 text-[28px] leading-[35px]">{title}</h4>
          <p className="my-[20px]">{desc}</p>
          <div
            className={`flex flex-wrap ${
              content?.length > 1 ? "flex-col items-start" : "items-center"
            }  w-full justify-between my-[15px]`}
          >
            <h4 className="text-sub2 font-bold text-[18px] w-2/5">{label}</h4>
            {content?.length === 1 ? (
              <h5 className="w-3/5">{content[0]?.text}</h5>
            ) : (
              <div className="flex items-center flex-wrap mt-[15px]">
                {content?.map((contentItem, i) => {
                  return (
                    <h5
                      key={contentItem?.id}
                      className={`${
                        i !== 0
                          ? "border-l border-[#5c72b6] border-solid px-[10px]"
                          : "pr-[10px]"
                      } `}
                    >
                      {contentItem?.text}
                    </h5>
                  );
                })}
              </div>
            )}
          </div>
          <div
            className={`flex ${
              Array.isArray(content2) ? "flex-col items-start" : "items-center"
            } flex-wrap  w-full justify-between my-[15px]`}
          >
            <h4 className="text-sub2 font-bold text-[18px] w-2/5">{label2}</h4>
            {Array.isArray(content2) ? (
              <div className="mt-[5px]">
                {content2?.map((item) => {
                  return (
                    <h5 key={item.id} className="w-full">
                      <span className="mr-[20px]">{item?.id + "."}</span>
                      <span className="font-medium">{item.text}</span>
                      <Link href={item?.link} className="ml-2">
                        {item?.link}
                      </Link>
                    </h5>
                  );
                })}
              </div>
            ) : (
              <>
                {(label2 === "Download" || label2 === "Website") && content2 ? (
                  <Link href={content2} className="w-3/5">
                    {content2}
                  </Link>
                ) : (
                  <h5 className="w-1/2">{content2}</h5>
                )}
              </>
            )}
            {isQRRight && !label3 && (
              <div className="w-[40%] mx-auto mt-5">
                {link1 && (
                  <Link href={link1} className="block text-center">
                    {link1}
                  </Link>
                )}
                <img
                  src="/casestudy/google-play.png"
                  alt="1"
                  className="w-full h-auto my-[10px]"
                />
                <img src={qr} alt="image" />
              </div>
            )}
            {isQRRight && !label3 && (
              <div className="w-[40%] mx-auto mt-5">
                {link2 && (
                  <Link href={link2} className="block text-center">
                    {link2}
                  </Link>
                )}
                <img
                  src="/casestudy/app-store.png"
                  alt="qr1"
                  className="w-full h-auto my-[10px]"
                />
                <img src={qr2} alt="qr2" className="w-full h-auto" />
              </div>
            )}
          </div>
          {/*  */}
          {label3 && (<div
            className={`flex items-center flex-wrap w-full justify-between my-[15px]`}
          >
            <h4 className="text-sub2 font-bold text-[18px] w-full">{label3}</h4>
            {isQRRight && (
              <div className="w-[40%] mx-auto mt-5">
                {link1 && (
                  <Link href={link1} className="block text-center">
                    {link1}
                  </Link>
                )}
                <img
                  src="/casestudy/google-play.png"
                  alt="1"
                  className="w-full h-auto my-[10px]"
                />
                <img src={qr} alt="image" />
              </div>
            )}
            {isQRRight && (
              <div className="w-[40%] mx-auto mt-5">
                {link2 && (
                  <Link href={link2} className="block text-center">
                    {link2}
                  </Link>
                )}
                <img
                  src="/casestudy/app-store.png"
                  alt="qr1"
                  className="w-full h-auto my-[10px]"
                />
                <img src={qr2} alt="qr2" className="w-full h-auto" />
              </div>
            )}
          </div>)}
          {/*  */}
          <div
            className={`flex items-start w-full ${
              !special && "justify-center"
            } `}
          >
            {special && (
              <div className="w-[45%] mt-[15px] p-[2px] text-center relative flex">
                <div className="w-full h-auto bg-[#cccbc2] absolute left-[-8px] top-[10px] z-0 font-bold text-[#cccbc2]">
                  {special}
                </div>
                <div className="w-full h-auto bg-[#f6ea67] absolute z-1 font-bold text-title">
                  {special}
                </div>
              </div>
            )}
            {qr && !qr2 && (
              <div className="w-[40%] ml-[15px]">
                {isAppleStore ? (
                  <img
                    src="/casestudy/app-store.png"
                    alt="app-store"
                    className="w-full h-auto mb-[10px]"
                  />
                ) : (
                  <img
                    src="/casestudy/google-play.png"
                    alt="google-play"
                    className="w-full h-auto mb-[10px]"
                  />
                )}
                <img src={qr} alt="1" className="w-full h-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
