import { getMedalsData } from "@/api";
import MedalsData from "@/components/MedalsData";
import StatisticHeader from "@/components/StatisticHeader";
import type { MedalType } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sort = (await searchParams).sort;
  const data: MedalType[] = await getMedalsData();
  return (
    <main className="flex items-center justify-center h-screen max-h-screen overflow-hidden">
      <div className="max-w-xs w-full">
        <h1 className="uppercase text-gray-500 text-xl">MEDAL COUNT</h1>
        <StatisticHeader activeSort={sort} />
        <MedalsData data={data} activeSort={sort} />
      </div>
    </main>
  );
}
