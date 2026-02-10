"use client";

import { useAccount, useConnect, useDisconnect, useBalance } from "wagmi";
import { somnia } from "@/lib/wagmi";

export function ConnectWalletInner() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({
    address,
    chainId: somnia.id,
  });

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-4">
        <div className="text-sm">
          <p className="text-gray-600">
            {address.slice(0, 6)}...{address.slice(-4)}
          </p>
          <p className="text-gray-500">
            {balance ? `${parseFloat(balance.formatted).toFixed(4)} STT` : "..."}
          </p>
        </div>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
    >
      Connect Wallet
    </button>
  );
}
