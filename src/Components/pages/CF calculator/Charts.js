import React, { useState } from 'react';
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
	const [ip, setIp] = useState(0);
	fetch('https://api.ipify.org?format=json')
	.then(response => response.json())
	.then(data => setIp(data.ip));

	const [finalScore,setFinalScore]=useState(0);
	function getScore(){
		
		fetch('http://localhost:8080/users/'+ip)
		.then(response => response.json())
		.then(data => setFinalScore(data.score));
	}
  
  const data = [
    { name: "Uk Average", Carbon: 14.1 },
    { name: "World Average", Carbon: 4.4},
    { name: "Your Total", Carbon: finalScore},
  ];
  getScore();
  return (
   
      <div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="Carbon"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="rgba(8, 114, 244, 0.6)"
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
          <CartesianGrid strokeDasharray="1 1" fill="#eee"/>
          <Bar dataKey="Carbon" fill=" rgba(8, 114, 244, 0.6)" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    
  );
};

export default Charts;