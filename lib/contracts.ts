// Contract addresses on Somnia Mainnet
export const SHOP_ADDRESS = "0xEd81f1126b9Bbdad13CdAfBafDF4db5a3aE91D5e" as const;
export const HANDLER_ADDRESS = "0xF91a4A3aC9a1055Ee6c834ffe0478EBc01B20dc2" as const;

// ReferralShop ABI (only functions we need)
export const SHOP_ABI = [
  {
    inputs: [{ name: "referrer", type: "address" }],
    name: "registerReferrer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "productId", type: "uint256" }],
    name: "purchase",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ name: "user", type: "address" }],
    name: "getReferrer",
    outputs: [{ name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "user", type: "address" }],
    name: "hasReferrer",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "referrer", type: "address" }],
    name: "referrerEarnings",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "id", type: "uint256" }],
    name: "getProduct",
    outputs: [
      { name: "price", type: "uint256" },
      { name: "name", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "productCount",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasuryBalance",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRevenue",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCommissionsPaid",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "commissionBps",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "buyer", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
      { indexed: false, name: "productId", type: "uint256" },
    ],
    name: "Purchase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: true, name: "referrer", type: "address" },
    ],
    name: "ReferralRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "referrer", type: "address" },
      { indexed: true, name: "buyer", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "CommissionPaid",
    type: "event",
  },
] as const;

// Handler ABI (for subscription status)
export const HANDLER_ABI = [
  {
    inputs: [],
    name: "subscriptionId",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHandlerStatus",
    outputs: [
      { name: "balance", type: "uint256" },
      { name: "canSubscribe", type: "bool" },
      { name: "onEventSelector", type: "bytes4" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Product interface
export interface Product {
  id: number;
  name: string;
  price: bigint;
}
