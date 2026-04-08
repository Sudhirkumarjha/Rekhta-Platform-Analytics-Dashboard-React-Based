

import { useEffect, useState } from "react";
import { fetchLearning } from "../Services/RekhtaApi";

function RekhtaDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchLearning().then(setData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Rekhta Reconciel Dashboard</h2>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Year</th>
            <th>Month</th>
            <th>Value</th>
            <th>Vertical</th>
            <th>Photo</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.year}</td>
              <td>{item.month}</td>
              <td>{item.value}</td>
              <td>{item.vertical}</td>
              <td>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3vIoXWprQBGLxs8fBJxhKnqdx1Os19_UWaj0Ce9Fo6AtpAvTSB73NKw&s"
                    alt="photo"
                    width="50"
                />
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RekhtaDashboard;