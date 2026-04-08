
import { useState } from "react";
import RekhtaDashboard from './Components/RekhtaDashboard'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'

// NEW PAGES
const Analytics = () => <h2>📈 Analytics Page - Coming Soon</h2>;
const Reports = () => <h2>📄 Reports Page - Coming Soon</h2>;
const Users = () => <h2>👤 Users Page - Manage Users</h2>;
const Settings = () => <h2>⚙️ Settings Page - Configure System</h2>;
const Logout = () => <h2>🚪 Logout Successful</h2>;

function App() {
  
  const [activePage, setActivePage] = useState("Dashboard");

  // 🔥 Dynamic page rendering
  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <RekhtaDashboard />;
      case "Analytics":
        return <Analytics />;
      case "Reports":
        return <Reports />;
      case "Users":
        return <Users />;
      case "Settings":
        return <Settings />;
      case "Logout":
        return <Logout />;
      default:
        return <RekhtaDashboard />;
    }
  };

  return (

    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar active={activePage} setActive={setActivePage} />

      <div style={{ flex: 1, padding: "20px" }}>
        {renderPage()}
        
      </div>

    </div>
  );
}

export default App;