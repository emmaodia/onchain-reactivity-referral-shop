"use client";

import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { SHOP_ADDRESS, SHOP_ABI } from "@/lib/contracts";

const PRODUCTS = [
  { id: 1, name: "Basic Widget", price: "0.01" },
  { id: 2, name: "Premium Widget", price: "0.05" },
  { id: 3, name: "Enterprise Widget", price: "0.1" },
  { id: 4, name: "Test Product", price: "2" },
];

export function ProductsInner() {
  const { isConnected } = useAccount();
  const { writeContract, data: hash, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handlePurchase = (productId: number, price: string) => {
    writeContract({
      address: SHOP_ADDRESS,
      abi: SHOP_ABI,
      functionName: "purchase",
      args: [BigInt(productId)],
      value: BigInt(parseFloat(price) * 1e18),
    });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h2 className="text-lg font-semibold mb-4">Products</h2>

      {isSuccess && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 text-sm">
            ✓ Purchase successful! If you have a referrer, they received 5% commission automatically.
          </p>
        </div>
      )}

      <div className="grid gap-3">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price} SOMI</p>
            </div>

            <button
              onClick={() => handlePurchase(product.id, product.price)}
              disabled={!isConnected || isPending || isConfirming}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg text-sm font-medium transition"
            >
              {isPending
                ? "Confirm..."
                : isConfirming
                ? "Buying..."
                : "Buy"}
            </button>
          </div>
        ))}
      </div>

      {!isConnected && (
        <p className="text-gray-500 text-sm mt-4 text-center">
          Connect wallet to make purchases
        </p>
      )}
    </div>
  );
}
