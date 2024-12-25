import { createPublicClient, http } from 'viem';
import { polygon } from 'viem/chains';

// Use Infura's RPC URL with your API key
const infuraRpcUrl = `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`;

// Create a client for the Polygon network using Infura
const client = createPublicClient({
  chain: polygon,
  transport: http(infuraRpcUrl),
});

// Example function to get balance
export async function getBalance(address: `0x${string}`): Promise<bigint | undefined> {
  try {
    const balance = await client.getBalance({ address });
    return balance;
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
}
