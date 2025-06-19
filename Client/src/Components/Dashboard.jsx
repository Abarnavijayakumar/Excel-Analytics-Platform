import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import {
  UploadCloud,
  BarChart3,
  PieChart as PieIcon,
  FileText,
  LayoutDashboard,
  FolderOpen,
  Upload,
  User,
  LogOut
} from "lucide-react";

const chartColors = ["#6366f1", "#facc15", "#10b981", "#f472b6", "#3b82f6"];

const Dashboard = () => {
  const [excelData, setExcelData] = useState([]);
  const [chartType, setChartType] = useState("line");
  const [columns, setColumns] = useState([]);

  const user = { name: "Abc", email: "abc@example.com" }; // Replace with actual user context/state

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      setExcelData(jsonData);
      setColumns(Object.keys(jsonData[0]));
    };
    reader.readAsArrayBuffer(file);
  };

  const renderChart = () => {
    if (!excelData.length || columns.length < 2) return null;

    const xKey = columns[0];
    const yKey = columns[1];

    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={excelData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Bar dataKey={yKey} fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={excelData}
                dataKey={yKey}
                nameKey={xKey}
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#8884d8"
                label
              >
                {excelData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={chartColors[index % chartColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={excelData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={xKey} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey={yKey} stroke="#6366f1" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-indigo-600 mb-8">Excellytics</h2>
        <nav className="space-y-6">
          <div className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 cursor-pointer">
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </div>
          <div className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 cursor-pointer">
            <FolderOpen className="w-5 h-5" /> Uploaded Files
          </div>
          <div className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 cursor-pointer">
            <Upload className="w-5 h-5" /> Upload New File
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <div className="relative">
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer border-2 border-indigo-500"
            />
            {/* Dropdown Menu can be implemented here */}
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6 md:p-10 space-y-10">
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Welcome, {user.name} 👋</h2>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold">Files Uploaded</h3>
              <p className="text-3xl font-bold mt-2">{excelData.length}</p>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold">Recent Upload</h3>
              <p className="mt-2 text-sm">{excelData.length ? "File uploaded successfully" : "No files yet"}</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold">Chart Type</h3>
              <p className="mt-2 text-sm capitalize">{chartType}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <label className="flex items-center gap-3">
                <UploadCloud className="w-6 h-6 text-indigo-600" />
                <input
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileUpload}
                  className="text-sm text-gray-600"
                />
              </label>

              <div className="flex gap-4">
                <button
                  onClick={() => setChartType("line")}
                  className={`px-4 py-2 rounded-lg border font-medium transition ${
                    chartType === "line" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"
                  }`}
                >
                  Line
                </button>
                <button
                  onClick={() => setChartType("bar")}
                  className={`px-4 py-2 rounded-lg border font-medium transition ${
                    chartType === "bar" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"
                  }`}
                >
                  Bar
                </button>
                <button
                  onClick={() => setChartType("pie")}
                  className={`px-4 py-2 rounded-lg border font-medium transition ${
                    chartType === "pie" ? "bg-indigo-600 text-white" : "bg-white text-gray-700"
                  }`}
                >
                  Pie
                </button>
              </div>
            </div>

            <div className="mt-8">
              {excelData.length === 0 ? (
                <div className="text-center text-gray-500">
                  <FileText className="mx-auto mb-2 w-10 h-10" />
                  <p>No data available. Upload an Excel file to start visualizing.</p>
                </div>
              ) : (
                renderChart()
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
