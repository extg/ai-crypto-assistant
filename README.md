<h1 align="center">AI Crypto Assistant</h1>

An advanced AI-powered crypto assistant that helps you manage your digital assets, execute transactions, and stay informed about the crypto market.

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

4. **Create a PostgreSQL Database named "supa" on macOS:**
   - Ensure you have PostgreSQL installed. If not, you can install it using Homebrew:
     ```bash
     brew install postgresql@15
     ```
   - Start the PostgreSQL service:
     ```bash
     brew services start postgresql@15
     ```
   - Access PostgreSQL:
     ```bash
     psql -U $USER -d postgres
     ```
   - Verify the database creation:
     ```bash
     # Once inside the psql interface, create a new database named "supa":
     CREATE DATABASE supa;
     # List all databases to verify that "supa" has been created
     \l 
     # Exit psql
     \q
     ```

5. Update your `.env.local` file with the database URL:
```bash
# Database (Required)
DATABASE_URL=postgresql://postgres@localhost:5432/supa
```

6. Start the development server:
```bash
pnpm dev
```

7. Get your Infura API keys

To interact with the Ethereum blockchain, you'll need to obtain API keys from Infura. Follow these steps:

- Visit [Infura's website](https://infura.io/) and sign up for an account if you don't have one.
- Add this key to your `.env.local` file:

```bash
INFURA_API_KEY=your-infura-key
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
DATABASE_URL=postgresql://localhost/supa

# Infura API Key (Required)
INFURA_API_KEY=your-infura-key
```

> Note: Never commit your `.env.local` file to version control.
