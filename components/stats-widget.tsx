'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import cx from 'classnames';

interface StatsData {
  title: string;
  value: number;
  change: number;
  unit: string;
  chart: {
    labels: string[];
    data: number[];
  };
}

export function StatsWidget({
  statsData = {
    title: 'Loading...',
    value: 0,
    change: 0,
    unit: '',
    chart: {
      labels: [],
      data: []
    }
  }
}: {
  statsData?: StatsData;
}) {
  // Подготавливаем данные для графика
  const chartData = statsData.chart.data.map((value, index) => ({
    name: statsData.chart.labels[index],
    value: value
  }));

  return (
    <div className={cx(
      'flex flex-col gap-4 rounded-2xl p-4 bg-card',
      'max-w-[400px] min-h-[200px]'
    )}>
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg font-medium text-card-foreground">
          {statsData.title}
        </div>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={cx(
            'px-2 py-1 rounded-full text-sm',
            {
              'bg-green-100 text-green-800': statsData.change > 0,
              'bg-red-100 text-red-800': statsData.change < 0,
            }
          )}
        >
          {statsData.change > 0 ? '+' : ''}{statsData.change}%
        </motion.div>
      </div>

      <div className="text-3xl font-bold">
        {statsData.unit}{statsData.value.toLocaleString()}
      </div>

      <div className="h-[100px] mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line 
              type="monotone" 
              dataKey="value"
              stroke={statsData.change >= 0 ? '#22c55e' : '#ef4444'}
              strokeWidth={2}
              dot={false}
            />
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-popover p-2 rounded-md shadow-md text-sm">
                      {statsData.unit}{payload[0].value}
                    </div>
                  );
                }
                return null;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 
