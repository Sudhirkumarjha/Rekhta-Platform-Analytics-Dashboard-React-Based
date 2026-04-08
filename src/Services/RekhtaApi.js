// Backend Api Call
// export const fetchDashboardData = async () => {
//   const res = await fetch("https://localhost:5001/api/v1/Dashboard/GetDashboardMasterApi");
//   return res.json();
// };

// Mock Api.
// Services/RekhtaApi.js
export const fetchDashboardData = async () => {
  return [
    {
      id: 1,
      year: "2024",
      month: "January",
      value: 13000,
      vertical: "Rekhta Books"
    },
    {
      id: 2,
      year: "2024",
      month: "June",
      value: 1000,
      vertical: "Rekhta Learning"
    },
    
  {
    "id": 8,
    "year": "2024",
    "month": "January",
    "value": 11000,
    "vertical": "Rekhta Books"
  },
  {
    "id": 11,
    "year": "2024",
    "month": "June",
    "value": 21000,
    "vertical": "Rekhta Learning"
  },
  {
    "id": 12,
    "year": "2024",
    "month": "May",
    "value": 24000,
    "vertical": "Rekhta Digitalization"
  },
  {
    "id": 13,
    "year": "2024",
    "month": "August",
    "value": 54,
    "vertical": "Rekhta Donation"
  },
  {
    "id": 14,
    "year": "2030",
    "month": "November",
    "value": 24000,
    "vertical": "Rekhta Learning"
  },
  {
    "id": 15,
    "year": "2029",
    "month": "February",
    "value": 123,
    "vertical": "Rekhta Learning"
  },
  {
    "id": 16,
    "year": "2026",
    "month": "February",
    "value": 456,
    "vertical": "Rekhta Books"
  },
  {
    "id": 17,
    "year": "2026",
    "month": "March",
    "value": 789,
    "vertical": "Rekhta Donation"
  },
  {
    "id": 18,
    "year": "2027",
    "month": "April",
    "value": 40000,
    "vertical": "Rekhta Learning"
  },
  {
    "id": 19,
    "year": "2028",
    "month": "April",
    "value": 47000,
    "vertical": "Rekhta Books"
  },
  {
    "id": 20,
    "year": "2024",
    "month": "August",
    "value": 55000,
    "vertical": "Rekhta Learning"
  },
  {
    "id": 21,
    "year": "2028",
    "month": "November",
    "value": 669,
    "vertical": "Rekhta Donation"
  },
  {
    "id": 22,
    "year": "2029",
    "month": "October",
    "value": 29000,
    "vertical": "Rekhta Learning"
  }

  ];
};