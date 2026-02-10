"use client";

import dynamic from "next/dynamic";

const RegisterReferrerInner = dynamic(
  () => import("./RegisterReferrerInner").then((mod) => mod.RegisterReferrerInner),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Register Referrer</h2>
        <div className="animate-pulse bg-gray-200 h-10 rounded-lg"></div>
      </div>
    ),
  }
);

export function RegisterReferrer() {
  return <RegisterReferrerInner />;
}
