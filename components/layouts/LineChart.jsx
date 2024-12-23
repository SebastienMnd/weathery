"use client";

import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from "recharts";

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer>
      <LineChart data={data}>
        <YAxis hide domain={[-10, 50]} />
        <Line name="Température" type="monotone" dataKey="temperature" strokeWidth={2} dot={false} />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
