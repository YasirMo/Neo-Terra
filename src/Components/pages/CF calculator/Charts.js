import React from 'react';
import {
  PieChart,
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
   
      <div >
        <PieChart  width={300} height={300}>

          <Tooltip />
        </PieChart>
        <BarChart
          className='charts'
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 30,
            bottom: 10,
          }}
          barSize={20}
        >
          <XAxis
            stroke="#006400"
            dataKey="name"
            scale="point"
            padding={{ left: 50, right: 50 }}
          />
          <YAxis 
          stroke="#006400"
          />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="0 0" fill="#006400"/>
          <Bar dataKey="Carbon" fill="black" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    
  );
};

export default Charts;