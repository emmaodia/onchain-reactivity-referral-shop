"use client";

import { http, createConfig } from "wagmi";
import { defineChain } from "viem";
import { injected } from "wagmi/connectors";

// Define Somnia Mainnet chain
export const somnia = defineChain({
  id: 50312,
  name: "Somnia",
  nativeCurrency: {
    decimals: 18,
    name: "STT",
    symbol: "STT",
  },
  rpcUrls: {
    default: { http: ["https://dream-rpc.somnia.network"] },
  },
  blockExplorers: {
    default: {
      name: "Somnia Explorer",
      url: "https://shannon-explorer.somnia.network",
    },
  },
});

// Create wagmi config
export const config = createConfig({
  chains: [somnia],
  connectors: [injected()],
  transports: {
    [somnia.id]: http(),
  },
});
