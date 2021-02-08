import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import './CarbonFootprint'
const Charts = (props) => {
  
  const data = [
    { name: "Uk Average", Carbon: 14.1 },
    { name: "World Average", Carbon: 4.4},
    { name: "Your Total", Carbon: props.finalScore},
  ];
  return (
   
      <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="Carbon"
            isAnimationActive={false}
            data={data}
            cx={300}
            cy={200}
            outerRadius={80}
            fill="rgba(8, 114, 244, 0.6)"
            // pie chart color
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 100, right: 100 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="0 0" fill=""/>
          <Bar dataKey="Carbon" fill=" rgba(8, 114, 244, 0.6)" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    
  );
};

export default Charts;