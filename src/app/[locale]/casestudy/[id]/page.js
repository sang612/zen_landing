"use client";

import "@/pages/styles/globals.css";
import { CasestudyDetail } from "@/components/CasestudyDetail/CaseStudyDetail";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/casestudy`
        );
        const res = await response.json();
        res && setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const { id } = params;
  const [dataFilter, setDataFilter] = useState();
  useEffect(() => {
    data && id && setDataFilter(data?.find((casestudy) => casestudy.id === id));
  }, [data, id]);

  return (
    <div>
      <CasestudyDetail
        title={dataFilter?.detail?.title}
        desc={dataFilter?.detail?.desc}
        label={dataFilter?.detail?.label}
        content={dataFilter?.detail?.content}
        label2={dataFilter?.detail?.label2}
        content2={dataFilter?.detail?.content2}
        image={dataFilter?.detail?.image}
        special={dataFilter?.detail?.special}
        qr={dataFilter?.detail?.qr}
        qr2={dataFilter?.detail?.qr2}
        link1={dataFilter?.detail?.link1}
        link2={dataFilter?.detail?.link2}
        isAppleStore={dataFilter?.detail?.isAppleStore}
        isQRRight={dataFilter?.detail?.isQRRight}
        label3={dataFilter?.detail?.label3}
      />
    </div>
  );
}
