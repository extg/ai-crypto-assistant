import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import cx from 'classnames';
import { useAccount } from 'wagmi';

type CryptoBalanceProps = {
  balance: bigint;
  tokenAddress: string;
};

export const CryptoBalance: React.FC<CryptoBalanceProps> = ({ balance, tokenAddress }) => {
  const { chain } = useAccount();

  const formattedBalance = chain
    ? (Number(balance) / Math.pow(10, chain.nativeCurrency.decimals)).toFixed(2)
    : 'Loading...';

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-lg font-bold">Your balance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cx('text-center text-2xl font-semibold')}>
          {formattedBalance} {chain?.nativeCurrency?.symbol}
        </div>
      </CardContent>
    </Card>
  );
};
