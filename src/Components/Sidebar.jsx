
const Sidebar = ({ active, setActive }) => {

  const menuItems = [
    "Dashboard",
    "Analytics",
    "Reports",
    "Users",
    "Settings",
    "Logout"
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={{ textAlign: "center" }}>Rekhta</h2>

      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => setActive(item)}   // 🔥 important
          style={{
            ...styles.menuItem,
            background: active === item ? "#1abc9c" : "transparent"
          }}
        >
          {getIcon(item)} {item}
        </div>
      ))}
    </div>
  );
};

const getIcon = (name) => {
  switch (name) {
    case "Dashboard": return "📊";
    case "Analytics": return "📈";
    case "Reports": return "📄";
    case "Users": return "👤";
    case "Settings": return "⚙️";
    case "Logout": return "🚪";
    default: return "";
  }
};


const styles = {
  sidebar: {
    width: "220px",
    background: "#1e293b",  // dark modern color
    color: "white",
    padding: "20px",
    minHeight: "100vh"
  },
  menuItem: {
    padding: "12px",
    margin: "10px 0",
    cursor: "pointer",
    borderRadius: "8px",
    transition: "0.3s"
  }
};

export default Sidebar;