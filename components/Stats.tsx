"use client";

import { useReadContract } from "wagmi";
import { SHOP_ADDRESS, SHOP_ABI, HANDLER_ADDRESS, HANDLER_ABI } from "@/lib/contracts";
import { formatEther } from "viem";

export function Stats() {
  const { data: totalRevenue } = useReadContract({
    address: SHOP_ADDRESS,
    abi: SHOP_ABI,
    functionName: "totalRevenue",
  });

  const { data: totalCommissions } = useReadContract({
    address: SHOP_ADDRESS,
    abi: SHOP_ABI,
    functionName: "totalCommissionsPaid",
  });

  const { data: treasury } = useReadContract({
    address: SHOP_ADDRESS,
    abi: SHOP_ABI,
    functionName: "treasuryBalance",
  });

  const { data: subscriptionId } = useReadContract({
    address: HANDLER_ADDRESS,
    abi: HANDLER_ABI,
    functionName: "subscriptionId",
  });

  const formatValue = (value: bigint | undefined) => {
    if (value === undefined) return "...";
    return parseFloat(formatEther(value)).toFixed(4);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Shop Statistics</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Total Revenue</p>
          <p className="text-xl font-semibold">{formatValue(totalRevenue)} STT</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Commissions Paid</p>
          <p className="text-xl font-semibold">{formatValue(totalCommissions)} STT</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Treasury Balance</p>
          <p className="text-xl font-semibold">{formatValue(treasury)} STT</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-500">Reactivity Status</p>
          <p className="text-xl font-semibold">
            {subscriptionId !== undefined && subscriptionId > 0 ? (
              <span className="text-green-600">Active ✓</span>
            ) : (
              <span className="text-gray-400">Inactive</span>
            )}
          </p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        <p className="text-xs text-gray-500">
          Subscription ID: {subscriptionId?.toString() || "..."}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Powered by{" "}
          <a
            href="https://docs.somnia.network/developer/reactivity"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Somnia Reactivity
          </a>
        </p>
      </div>
    </div>
  );
}
