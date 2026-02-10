"use client";

import { useAccount, useReadContract } from "wagmi";
import { SHOP_ADDRESS, SHOP_ABI } from "@/lib/contracts";
import { formatEther } from "viem";

export function EarningsInner() {
  const { address, isConnected } = useAccount();

  const { data: earnings, refetch } = useReadContract({
    address: SHOP_ADDRESS,
    abi: SHOP_ABI,
    functionName: "referrerEarnings",
    args: address ? [address] : undefined,
  });

  if (!isConnected) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Your Referral Earnings</h2>
        <p className="text-gray-500">Connect wallet to view earnings</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Your Referral Earnings</h2>
        <button
          onClick={() => refetch()}
          className="text-sm text-blue-600 hover:text-blue-700"
        >
          Refresh
        </button>
      </div>

      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <p className="text-sm opacity-80 mb-1">Total Earned</p>
        <p className="text-3xl font-bold">
          {earnings !== undefined
            ? `${parseFloat(formatEther(earnings)).toFixed(4)} SOMI`
            : "..."}
        </p>
        <p className="text-xs opacity-70 mt-2">
          Earnings are paid automatically via Somnia Reactivity
        </p>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <strong>How it works:</strong> Share your address with others. When they
          register you as their referrer and make purchases, you automatically
          receive 5% commission.
        </p>
      </div>

      {address && (
        <div className="mt-4">
          <p className="text-xs text-gray-500 mb-2">Your referral link:</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs bg-gray-100 p-2 rounded overflow-hidden text-ellipsis">
              {address}
            </code>
            <button
              onClick={() => {
                navigator.clipboard.writeText(address);
                alert("Address copied!");
              }}
              className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded text-xs font-medium transition"
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
