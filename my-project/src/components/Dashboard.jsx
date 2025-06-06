import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { day: 'Mon', progress: 30 },
  { day: 'Tue', progress: 45 },
  { day: 'Wed', progress: 60 },
  { day: 'Thu', progress: 50 },
  { day: 'Fri', progress: 75 },
  { day: 'Sat', progress: 80 },
  { day: 'Sun', progress: 90 },
];

const Dashboard = ({ userData }) => (
  <div className="min-h-screen bg-green-100 py-10 px-4">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-green-900">Welcome, {userData.name}</h1>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <div className="card bg-green-200">Team Members: 8</div>
        <div className="card bg-green-200">Active Projects: 5</div>
        <div className="card bg-green-200">Notifications: 2</div>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-green-900">Weekly Progress</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#22c55e" // Tailwind green-500
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default Dashboard;