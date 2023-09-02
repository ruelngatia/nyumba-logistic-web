import React from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export default function Linechart() {
  const data = [
    {
      name: "a",
      Amount: 400,
    },
    {
      name: "b",
      Amount: 344,
    },
    {
      name: "c",
      Amount: 656,
    },
    {
      name: "d",
      Amount: 333,
    },
    {
      name: "e",
      Amount: 234,
    },
  ];

  return (
    <div className="p-2 w-full h-1/3">
      <ResponsiveContainer className='w-1/2'  height={400}>
        <LineChart  data={data} >
          <Legend />
          <XAxis label={<Label value="Days" offset={0} position="insideBottom" />}/>       
          <YAxis label={<Label value="Collection" offset={500} position="center" angle={270} />}/>
          <Legend/>
          <CartesianGrid strokeDasharray={"3 3"} />
          <Line
            type="monotone"
            dataKey="Amount"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
