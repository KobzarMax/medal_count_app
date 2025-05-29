"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useMemo } from "react";

export default function StatisticHeader({
  activeSort,
}: {
  activeSort: string | string[] | undefined;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const active = useMemo(() => {
    if (Array.isArray(activeSort)) return activeSort[0];
    return activeSort || "";
  }, [activeSort]);

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.replace(`?${params.toString()}`);
  };

  const sortOptions = [
    { key: "gold", color: "bg-yellow-400", title: "gold" },
    { key: "silver", color: "bg-gray-400", title: "silver" },
    { key: "bronze", color: "bg-orange-500", title: "bronze" },
  ];

  return (
    <div className="w-full border-b-2 border-gray-600">
      <div className="flex items-center justify-end">
        {sortOptions.map(({ key, color, title }) => (
          <button
            key={key}
            onClick={() => handleSort(key)}
            className={`p-1.5 flex items-center justify-center border-t-2 border-transparent transition-all duration-300 [.active]:border-gray-600 hover:bg-gray-300/20 ${
              active === key ? "active" : ""
            } cursor-pointer`}
            title={title}>
            <span className={`w-4 h-4 rounded-full ${color}`} />
          </button>
        ))}
        <button
          onClick={() => handleSort("total")}
          className="text-sm font-bold px-2 py-1 rounded bg-transparent cursor-pointer transition-all duration-300 hover:bg-gray-300/20">
          TOTAL
        </button>
      </div>
    </div>
  );
}
