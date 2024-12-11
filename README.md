<h1 align="center">AI Crypto Assistant</h1>

<p align="center">
  An advanced AI-powered crypto assistant that helps you manage your digital assets, execute transactions, and stay informed about the crypto market.
</p>

<br/>

## ✨ Features

### 💱 Transaction Management
- [ ] Multi-transaction pipeline support (send, swap, bridge, stake/unstake)
- [ ] Token transfers across multiple chains
- [ ] Cross-chain bridging
- [ ] Token swaps with optimal routing
- [ ] Smart account integration

### 💰 Portfolio Management
- [ ] Portfolio tracking and analysis
- [ ] Balance checking across multiple chains
- [ ] Staking position monitoring
- [ ] Custom portfolio building assistance

### 🔄 Trading & Exchange
- [ ] Real-time token price tracking
- [ ] Trending tokens discovery
- [ ] Category-based token exploration (Memes, L2s, NFTs, etc.)
- [ ] Fiat on/off ramp integration

### 🔒 Staking & Yield
- [ ] Staking and unstaking support
- [ ] Multiple staking protocols integration
- [ ] Lending platform integration
- [ ] Yield optimization suggestions

### 📊 Market Intelligence
- [ ] Token metadata and analytics
- [ ] Market trends analysis
- [ ] Real-time price alerts
- [ ] Portfolio performance tracking

## 🛠 Tech Stack

- [Next.js](https://nextjs.org) with App Router
- [AI SDK](https://sdk.vercel.ai/docs) for advanced AI interactions
- [wagmi](https://wagmi.sh) for blockchain interactions
- [RainbowKit](https://www.rainbowkit.com/) for wallet integration
- [Viem](https://viem.sh) for blockchain data handling
- [shadcn/ui](https://ui.shadcn.com) with Tailwind CSS
- [Vercel Postgres](https://vercel.com/storage/postgres) for data persistence
- [NextAuth.js](https://github.com/nextauthjs/next-auth) for authentication

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Set up your environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
pnpm dev
```

Your AI Crypto Assistant should now be running on [localhost:3000](http://localhost:3000/).

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Authentication (Required)
AUTH_SECRET=your-secret-key

# AI Provider (Required)
OPENAI_API_KEY=your-openai-key

# Database (Required)
DATABASE_URL=your-database-url

# Additional API Keys (Optional)
ALCHEMY_API_KEY=your-alchemy-key
INFURA_API_KEY=your-infura-key
```

> Note: Never commit your `.env.local` file to version control.
