import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import cx from 'classnames';

type CryptoBalanceProps = {
  currency: string;
  balance: number;
};

export const CryptoBalance: React.FC<CryptoBalanceProps> = ({ currency = 'POL', balance }) => {
  console.log('currency', currency, 'balance', balance);
  return (
    <Card className="max-w-sm mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-lg font-bold">
          Баланс {currency}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className={cx('text-center text-2xl font-semibold')}>
          {balance} {currency}
        </div>
      </CardContent>
    </Card>
  );
};
