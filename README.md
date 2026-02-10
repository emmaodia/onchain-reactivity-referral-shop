# Referral Shop UI

A minimal Next.js frontend for the Somnia Reactivity Referral System.

## Features

- 🔗 Connect wallet (MetaMask)
- 👥 Register referrer
- 🛒 Purchase products
- 💰 View referral earnings
- 📊 Shop statistics

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Tech Stack

- **Next.js 14** - React framework
- **TailwindCSS** - Styling
- **wagmi v2** - Ethereum hooks
- **viem** - TypeScript Ethereum library

## Contract Addresses (Somnia Mainnet)

| Contract | Address |
|----------|---------|
| ReferralShop | `0xEd81f1126b9Bbdad13CdAfBafDF4db5a3aE91D5e` |
| PayoutHandler | `0xF91a4A3aC9a1055Ee6c834ffe0478EBc01B20dc2` |

## How It Works

1. **Connect Wallet** - Connect your MetaMask to Somnia network
2. **Register Referrer** - Enter the address of who referred you
3. **Make Purchase** - Buy a product from the shop
4. **Auto Commission** - Referrer automatically receives 5% via Somnia Reactivity

## Project Structure

```
referral-ui/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── ConnectWallet.tsx
│   ├── RegisterReferrer.tsx
│   ├── Products.tsx
│   ├── Earnings.tsx
│   ├── Stats.tsx
│   └── Providers.tsx
├── lib/
│   ├── contracts.ts    # Contract ABIs and addresses
│   └── wagmi.ts        # Web3 configuration
└── package.json
```

## Adding to MetaMask

**Somnia Mainnet:**
- Network Name: Somnia
- RPC URL: https://dream-rpc.somnia.network
- Chain ID: 50312
- Symbol: STT
- Explorer: https://shannon-explorer.somnia.network

## License

MIT
# onchain-reactivity-referral-shop
