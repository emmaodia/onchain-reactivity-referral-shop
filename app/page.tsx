"use client";

import { ConnectWallet } from "@/components/ConnectWallet";
import { RegisterReferrer } from "@/components/RegisterReferrer";
import { Products } from "@/components/Products";
import { Earnings } from "@/components/Earnings";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Referral Shop</h1>
            <p className="text-sm text-gray-500">Powered by Somnia Reactivity</p>
          </div>
          <ConnectWallet />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-2">
            On-Chain Referral System
          </h2>
          <p className="text-blue-100 mb-4">
            Refer friends and earn 5% commission on their purchases.
            Commissions are paid automatically using Somnia&apos;s on-chain Reactivity. You can set my wallet as a referrer <b>0xa42872B5359F6e3905BB031df62C3AADde532933</b>
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="bg-white/20 rounded-lg px-4 py-2">
              ✓ Fully on-chain
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              ✓ Automatic payouts
            </div>
            <div className="bg-white/20 rounded-lg px-4 py-2">
              ✓ No servers needed
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <RegisterReferrer />
            <Products />
          </div>
          <div className="space-y-6">
            <Earnings />
            <Stats />
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">1</span>
              </div>
              <h3 className="font-medium mb-1">Register Referrer</h3>
              <p className="text-sm text-gray-500">
                Enter the address of who referred you
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">2</span>
              </div>
              <h3 className="font-medium mb-1">Make a Purchase</h3>
              <p className="text-sm text-gray-500">
                Buy any product from the shop
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">3</span>
              </div>
              <h3 className="font-medium mb-1">Auto Commission</h3>
              <p className="text-sm text-gray-500">
                Referrer receives 5% instantly via Reactivity
              </p>
            </div>
          </div>
        </div>

        {/* Contract Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Shop:{" "}
            <a
              href="https://shannon-explorer.somnia.network/address/0xEd81f1126b9Bbdad13CdAfBafDF4db5a3aE91D5e"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-mono"
            >
              0xEd81...1D5e
            </a>
            {" | "}
            Handler:{" "}
            <a
              href="https://shannon-explorer.somnia.network/address/0xF91a4A3aC9a1055Ee6c834ffe0478EBc01B20dc2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-mono"
            >
              0xF91a...0dc2
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          <p>
            Built with{" "}
            <a
              href="https://somnia.network"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Somnia
            </a>
            {" "}On-Chain Reactivity
          </p>
        </div>
      </footer>
    </div>
  );
}
