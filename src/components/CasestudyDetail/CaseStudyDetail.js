/* eslint-disable @next/next/no-img-element */
"use client";

import useWidth from "@/hooks/useWidth";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
}) => {
  const { width, breakpoints } = useWidth();
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push("/casestudy")}
        className="cursor-pointer sm:w-[40px]"
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9999 11.0001V13.0001H7.99991L13.4999 18.5001L12.0799 19.9201L4.15991 12.0001L12.0799 4.08008L13.4999 5.50008L7.99991 11.0001H19.9999Z"
            fill="black"
          />
        </svg>
      </div>
      <div
        className="w-full bg-no-repeat bg-cover m-0 p-[100px_0] sm:p-0 flex sm:flex-col items-center justify-between"
        style={{
          backgroundImage:
            width < breakpoints.sm
              ? "linear-gradient(0deg, #ceedf9 33.33%, white 33.33%, white 66.66%, #ceedf9 66.66%) "
              : image?.length > 1
              ? "linear-gradient(90deg, #ceedf9 33.33%, white 33.33%, white 66.66%, #ceedf9 66.66%) "
              : "linear-gradient(90deg, white 33.33%, #ceedf9 33.33%, #ceedf9 66.66%, #ceedf9 66.66%) ",
        }}
      >
        {image?.length > 1 ? (
          <>
            <div className="w-[33.3%] px-[20px] sm:w-full">
              <img src={image?.[0]} alt="image" />
              {qr2 && (
                <div className="w-[40%] mx-auto mt-2">
                  {link1 && <Link href={link1}>{link1}</Link>}
                  <img
                    src="/casestudy/google-play.png"
                    alt="1"
                    className="w-full h-auto my-[20px]"
                  />
                  <img src={qr} alt="image" />
                </div>
              )}
            </div>
            <div className="w-[33.3%] sm:w-full px-[20px]">
              <img src={image?.[1]} alt="image" />
              {qr2 && (
                <div className="w-[40%] mx-auto mt-2">
                  {link2 && <Link href={link2}>{link2}</Link>}
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
          <div className="flex items-center justify-center w-[66.6%] px-[40px]">
            <img src={image?.[0]} alt="image" className="w-full h-auto" />
          </div>
        )}
        <div className="w-[33.3%] px-[40px] sm:w-full sm:pt-14 sm:pb-2">
          <h4 className="text-title2 text-[28px] leading-[35px]">{title}</h4>
          <p className="my-[20px]">{desc}</p>
          <div
            className={`flex flex-wrap ${
              content?.length > 1 ? "flex-col items-start" : "items-center"
            }  w-full justify-between my-[15px]`}
          >
            <h4 className="text-sub2 font-bold text-[18px] w-1/2">{label}</h4>
            {content?.length === 1 ? (
              <h5 className="w-1/2">{content[0]?.text}</h5>
            ) : (
              <div className="flex items-center flex-wrap mt-[30px]">
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
            <h4 className="text-sub2 font-bold text-[18px] w-1/2">{label2}</h4>
            {Array.isArray(content2) ? (
              <div className="mt-[20px]">
                {content2?.map((item) => {
                  return (
                    <h5 key={item.id} className="w-full">
                      <span className="mr-[20px]">{item?.id + "."}</span>
                      {item.text}
                      <Link href={item?.link}>{item?.link}</Link>
                    </h5>
                  );
                })}
              </div>
            ) : (
              <>
                {label2 === "Download" && content2 ? (
                  <Link href={content2} className="w-1/2">
                    {content2}
                  </Link>
                ) : (
                  <h5 className="w-1/2">{content2}</h5>
                )}
              </>
            )}
          </div>
          <div
            className={`flex items-center w-full ${
              !special && "justify-end"
            } max-w-[80%]`}
          >
            {special && (
              <div className="w-[60%] border-2 border-solid border-secondary text-secondary p-[2px] text-center">
                {special}
              </div>
            )}
            {qr && !qr2 && (
              <div className="w-[40%] ml-[15px]">
                <img
                  src="/casestudy/google-play.png"
                  alt="1"
                  className="w-full h-auto mb-[10px]"
                />
                <img src={qr} alt="1" className="w-full h-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
