"use client";

import { useState, useEffect } from "react";
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { SHOP_ADDRESS, SHOP_ABI } from "@/lib/contracts";
import { isAddress } from "viem";

export function RegisterReferrerInner() {
  const { address, isConnected } = useAccount();
  const [referrerInput, setReferrerInput] = useState("");

  // Check if user already has a referrer
  const { data: currentReferrer, refetch } = useReadContract({
    address: SHOP_ADDRESS,
    abi: SHOP_ABI,
    functionName: "getReferrer",
    args: address ? [address] : undefined,
  });

  const { data: hasReferrer } = useReadContract({
    address: SHOP_ADDRESS,
    abi: SHOP_ABI,
    functionName: "hasReferrer",
    args: address ? [address] : undefined,
  });

  // Register referrer
  const { writeContract, data: hash, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handleRegister = () => {
    if (!isAddress(referrerInput)) {
      alert("Please enter a valid address");
      return;
    }
    if (referrerInput.toLowerCase() === address?.toLowerCase()) {
      alert("You cannot refer yourself");
      return;
    }

    writeContract({
      address: SHOP_ADDRESS,
      abi: SHOP_ABI,
      functionName: "registerReferrer",
      args: [referrerInput as `0x${string}`],
    });
  };

  // Refetch after successful registration
  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess, refetch]);

  if (!isConnected) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Register Referrer</h2>
        <p className="text-gray-500">Connect wallet to register a referrer</p>
      </div>
    );
  }

  if (hasReferrer && currentReferrer) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h2 className="text-lg font-semibold mb-4">Your Referrer</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">Referrer registered!</p>
          <p className="font-mono text-sm mt-1 text-green-700">
            {currentReferrer.slice(0, 10)}...{currentReferrer.slice(-8)}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Register Referrer</h2>
      <p className="text-gray-600 text-sm mb-4">
        Enter the address of who referred you. They&apos;ll earn 5% commission on your purchases.
      </p>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="0x..."
          value={referrerInput}
          onChange={(e) => setReferrerInput(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-mono text-sm"
        />

        <button
          onClick={handleRegister}
          disabled={isPending || isConfirming || !referrerInput}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-medium transition"
        >
          {isPending
            ? "Confirm in Wallet..."
            : isConfirming
            ? "Registering..."
            : "Register Referrer"}
        </button>

        {isSuccess && (
          <p className="text-green-600 text-sm text-center">
            ✓ Referrer registered successfully!
          </p>
        )}
      </div>
    </div>
  );
}
