"use client";

import dynamic from "next/dynamic";

const EarningsInner = dynamic(
  () => import("./EarningsInner").then((mod) => mod.EarningsInner),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Your Referral Earnings</h2>
        <div className="animate-pulse bg-gray-200 h-24 rounded-xl"></div>
      </div>
    ),
  }
);

export function Earnings() {
  return <EarningsInner />;
}
