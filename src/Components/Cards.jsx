function Cards({ data }) {
  const total = data.length;
  //const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  let sum = 0;

for (let i = 0; i < data.length; i++) {
  sum = sum + data[i].value;
}
const totalValue= sum;
  return (
    <div style={containerStyle}>

      {/* 🔹 Total Records */}
      <div
        style={{ ...cardStyle, borderTop: "4px solid #3b82f6" }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
      >
        <h3 style={titleStyle}>📊 Total Records</h3>

        <p style={numberStyle}>
          {total.toLocaleString()}
        </p>

        <p style={subTextStyle}>Updated just now</p>
      </div>

      {/* 🔹 Total Value */}
      <div
        style={{ ...cardStyle, borderTop: "4px solid #16a34a" }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
      >
        <h3 style={titleStyle}>💰 Total Value</h3>

        <p style={{ ...numberStyle, color: "#2563eb" }}>
          {totalValue.toLocaleString()}
        </p>

        <p style={subTextStyle}>Updated just now</p>
      </div>

    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",   
  alignItems: "center",
  gap: "20px",
  marginBottom: "20px",
  flexWrap: "wrap"           
};

const cardStyle = {
  padding: "25px",
  background: "white",
  borderRadius: "12px",
  width: "220px",
  textAlign: "center",
  boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
  transition: "0.3s",
  cursor: "pointer"
};

const titleStyle = {
  color: "#64748b",
  fontSize: "16px",
  fontWeight: "500"
};

const numberStyle = {
  fontSize: "30px",
  fontWeight: "bold",
  color: "#1e293b",
  marginTop: "10px"
};

const subTextStyle = {
  fontSize: "12px",
  color: "#94a3b8",
  marginTop: "5px"
};

export default Cards;