import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const COLORS = ["#3b82f6", "#f59e0b", "#ef4444", "#22c55e"];

function ChartPie({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  // 🔥 Group by Vertical
  const groupedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.vertical]) {
        acc[item.vertical] = { name: item.vertical, value: 0 };
      }
      acc[item.vertical].value += item.value;
      return acc;
    }, {})
  );

  return (
    <div style={container}>
      <h3 style={titleStyle}>🍩 Vertical Distribution</h3>

      {/* 🔥 Empty state handling */}
      {groupedData.length === 0 ? (
        <p style={{ textAlign: "center" }}>No data available</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
           <Pie
            data={groupedData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            innerRadius={50}
            paddingAngle={3}
            minAngle={10}   // 🔥 IMPORTANT
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            >
              {groupedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  opacity={activeIndex === index ? 1 : 0.6}
                  stroke="#fff"
                  strokeWidth={2}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend /> {/* 🔥 adds labels below */}
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ChartPie;

// ✅ Styles
const container = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  marginTop: "20px"
};

const titleStyle = {
  marginBottom: "15px",
  color: "#1e293b",
  fontSize: "18px",
  fontWeight: "600"
};