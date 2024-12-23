import { ethers } from 'ethers';


const INFURA_PROJECT_ID = "0d34ec5d39b3495baa4d0b3efa325d14";
// const INFURA_API_KEY = process.env.INFURA_API_KEY;

// Создаем провайдера для сети Ethereum
const provider = new ethers.InfuraProvider('matic', INFURA_PROJECT_ID);

// Пример функции для получения баланса
export async function getBalance(address: string) {
  try {
    const balance = await provider.getBalance(address);

    return ethers.formatEther(balance);
    // console.log(`Balance of ${address}: ${ethers.formatEther(balance)} ETH`);
  } catch (error) {
    console.error('Error fetching balance:', error);
  }
}
