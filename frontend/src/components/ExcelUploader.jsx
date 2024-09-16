import { useState } from "react";
import * as XLSX from "xlsx";

const ExcelUploader = () => {
  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = () => {
    if (!file) {
      alert("Please select an Excel file first.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming we want to get the first sheet
      const sheetName = workbook.SheetNames[1];
      const worksheet = workbook.Sheets[sheetName];

      // Convert Excel data to JSON
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      setJsonData(jsonData); // Save data to state
      const jsonObj = Object.fromEntries(jsonData.entries());
      console.log(jsonObj);
      console.log(JSON.stringify(jsonObj));
      // Send JSON data to the server
      fetch("http://localhost:3000/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonObj),
      })
        .then((response) => response.json())
        .then((data) => console.log("Data sent successfully:", data))
        .catch((error) => console.error("Error sending data:", error));
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      {/* Display parsed JSON data for demo */}
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default ExcelUploader;
