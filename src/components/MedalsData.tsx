import type { CodeType, MedalType } from "@/types";
import { handleFlagImage } from "@/utils";
import Image from "next/image";

export default function MedalsData({
  data,
  activeSort,
}: {
  data: MedalType[];
  activeSort: string | string[] | undefined;
}) {
  const getSortedData = () => {
    const sortKey = Array.isArray(activeSort) ? activeSort[0] : activeSort;

    return [...data].sort((a, b) => {
      const totalA = a.gold + a.silver + a.bronze;
      const totalB = b.gold + b.silver + b.bronze;

      switch (sortKey) {
        case "total":
          if (totalB !== totalA) return totalB - totalA;
          return b.gold - a.gold;

        case "gold":
          if (b.gold !== a.gold) return b.gold - a.gold;
          return b.silver - a.silver;

        case "silver":
          if (b.silver !== a.silver) return b.silver - a.silver;
          return b.gold - a.gold;

        case "bronze":
          if (b.bronze !== a.bronze) return b.bronze - a.bronze;
          return b.gold - a.gold;

        default:
          return 0;
      }
    });
  };

  const sortedData = getSortedData();
  return (
    <div className="w-full">
      {sortedData.map((item, i) => {
        const total = item.gold + item.silver + item.bronze;
        return (
          <div
            className="grid border-b border-gray-400 grid-cols-2"
            key={item.code}>
            <div className="flex justify-start items-center py-1 gap-1.5">
              <span className="px-1 flex items-center justify-center text-gray-500 w-8">
                {i + 1}
              </span>
              <Image
                width={28}
                height={17}
                src={handleFlagImage(item.code.toLocaleLowerCase() as CodeType)}
                alt={item.code}
              />
              <span className="uppercase font-bold text-gray-500">
                {item.code}
              </span>
            </div>
            <div className="grid w-fit mr-0 ml-auto grid-cols-[28px_28px_28px_56px] items-center">
              <span className="w-7 flex items-center justify-center text-gray-500">
                {item.gold}
              </span>
              <span className="w-7 flex items-center justify-center text-gray-500">
                {item.silver}
              </span>
              <span className="w-7 flex items-center justify-center text-gray-500">
                {item.bronze}
              </span>
              <span className="w-14 flex items-center justify-center font-bold text-gray-500">
                {total}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
