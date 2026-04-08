import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList
} from "recharts";

function ChartComponent({ data }) {

  // 🔥 Step 1: Group + Sum by Month
  const groupedData = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.month]) {
        acc[item.month] = { month: item.month, value: 0 };
      }
      acc[item.month].value += item.value;
      return acc;
    }, {})
  );

  // 🔥 Step 2: Month Order
  const monthOrder = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  // 🔥 Step 3: Sort Properly
  const sortedData = groupedData.sort(
    (a, b) => monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month)
  );

  return (
    <div style={chartContainer}>
      <h3 style={{ marginBottom: "15px", color: "#1e293b" }}>
        📊 Monthly Data Overview
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={sortedData}>
          
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          {/* 🔥 FIXED Y-AXIS */}
          <YAxis
            tickFormatter={(value) =>
              value >= 1000 ? value / 1000 + "k" : value
            }
          />

          {/* 🔥 BETTER TOOLTIP */}
          <Tooltip
            formatter={(value) =>
              value.toLocaleString()
            }
          />

          {/* 🔥 BAR WITH LABEL */}
          <Bar dataKey="value" fill="#3b82f6" radius={[5, 5, 0, 0]}>
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) =>
                value >= 1000 ? value / 1000 + "k" : value
              }
            />
          </Bar>

        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

const chartContainer = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  marginTop: "20px"
};

export default ChartComponent;