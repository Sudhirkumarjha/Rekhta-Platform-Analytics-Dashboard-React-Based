
import { useEffect, useState } from "react";
import { fetchDashboardData } from "../Services/RekhtaApi";
import Cards from "./Cards";
import ChartComponent from "./ChartComponent";
import ChartPie from "./ChartPie";

function RekhtaDashboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 5;

  useEffect(() => {
  const loadData = async () => {
    try {
      const res = await fetchDashboardData();
      setData(res);
    } catch (err) {
      console.error(err);
      setError("❌ Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);


  // 🔥 FILTER
  const filteredData =
    filter === "All"
      ? data
      : data.filter((item) => item.vertical === filter);

  // 🔥 SEARCH
  const searchedData = filteredData.filter((item) =>
    item.month.toLowerCase().includes(search.toLowerCase())
  );

  // 🔥 PAGINATION
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentData = searchedData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(searchedData.length / itemsPerPage);

  // 🔥 LOADER
  if (loading) {
    return <h2 style={{ padding: "20px" }}>⏳ Loading data...</h2>;
  }

  return (
    <div style={{ padding: "20px", width: "100%" }}>
      <div style={containerStyle}>

        <h2 style={headingStyle}>Rekhta Platform Analytics Dashboard</h2>

        {/* Cards */}
        <Cards data={data} />

        {/* Charts */}
        <ChartComponent data={data} />
        <ChartPie data={data} />

        {/* 🔥 FILTER + SEARCH */}
        <div style={filterContainerStyle}>
          <h3 style={tableTitleStyle}>Data Overview</h3>

          <div style={{ display: "flex", gap: "10px" }}>
            
            {/* SEARCH */}
            <input
              type="text"
              placeholder="🔍 Search by month"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={searchStyle}
            />

            {/* FILTER */}
            <select
              onChange={(e) => setFilter(e.target.value)}
              style={filterSelectStyle}
            >
              <option>All</option>
              <option>Rekhta Books</option>
              <option>Rekhta Learning</option>
              <option>Rekhta Donation</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <table style={tableStyle}>
          <thead>
            <tr>
              {["ID", "Year", "Month", "Value", "Vertical", "Photo"].map((col) => (
                <th key={col} style={thStyle}>{col}</th>
              ))}
            </tr>
          </thead>

        <tbody>
        {currentData.map((item, index) => (
            <tr
            key={item.id}
            style={trStyle}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f1f5f9")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
            >
            <td style={tdStyle}>
                {(currentPage - 1) * itemsPerPage + index + 1}
            </td>

            <td style={tdStyle}>{item.year}</td>
            <td style={tdStyle}>{item.month}</td>
            <td style={{ ...tdStyle, fontWeight: "bold", color: "#16a34a" }}>
                {item.value.toLocaleString()}
            </td>
            <td style={tdStyle}>{item.vertical}</td>
            <td style={tdStyle}>
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3vIoXWprQBGLxs8fBJxhKnqdx1Os19_UWaj0Ce9Fo6AtpAvTSB73NKw&s"
                width="40"
                style={{ borderRadius: "50%" }}
                alt="img"
                />
            </td>
            </tr>
        ))}
        </tbody>
         
        </table>

        {/* 🔥 PAGINATION */}
        <div style={{ marginTop: "15px" }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              style={{
                margin: "5px",
                padding: "8px 12px",
                borderRadius: "6px",
                border: "none",
                background: currentPage === i + 1 ? "#3b82f6" : "#e5e7eb",
                color: currentPage === i + 1 ? "white" : "black",
                cursor: "pointer"
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}


const containerStyle = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)"
};

const headingStyle = {
  marginBottom: "20px",
  color: "#1e293b"
};

const filterContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
  marginBottom: "10px"
};

const tableTitleStyle = {
  margin: 0,
  color: "#1e293b"
};

const searchStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  width: "200px"
};

const filterSelectStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px"
};

const thStyle = {
  background: "#3b82f6",
  color: "white",
  padding: "12px"
};

const trStyle = {
  textAlign: "center",
  borderBottom: "1px solid #eee"
};

const tdStyle = {
  padding: "10px"
};

export default RekhtaDashboard;