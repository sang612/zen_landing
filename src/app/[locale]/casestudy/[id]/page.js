import "@/pages/styles/globals.css";
import { CasestudyDetail } from "@/components/CasestudyDetail/CaseStudyDetail";

export async function generateStaticParams() {
  const res = await fetch("/api/casestudy");
  const casestudies = await res.json();
  return casestudies.map((casestudy) => ({
    id: casestudy.id.toString(),
  }));
}

async function getData() {
  const res = await fetch("/api/casestudy");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }) {
  const data = await getData();
  const { id } = params;
  const dataFilter = data.find((casestudy) => casestudy.id === id);
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
      />
    </div>
  );
}
