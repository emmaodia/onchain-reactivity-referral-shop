"use client";

import dynamic from "next/dynamic";

const ConnectWalletInner = dynamic(
  () => import("./ConnectWalletInner").then((mod) => mod.ConnectWalletInner),
  {
    ssr: false,
    loading: () => (
      <button className="px-6 py-2 bg-gray-300 text-gray-500 rounded-lg font-medium">
        Loading...
      </button>
    ),
  }
);

export function ConnectWallet() {
  return <ConnectWalletInner />;
}
