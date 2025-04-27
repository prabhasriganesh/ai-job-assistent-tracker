import React, { useState } from "react";

const SecureDocumentVault = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileType, setFileType] = useState("resume"); // Default to "resume"

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert("Please select a file to upload");
      return;
    }

    // You can add a logic here to handle file storage, such as sending it to a server
    // and storing it in the appropriate category (Resume or Cover Letter).
    alert(`Uploaded ${selectedFile.name} as ${fileType}`);
    // Reset file selection after upload
    setSelectedFile(null);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen font-manrope">
      {/* Header Section */}
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Secure Document Vault</h1>
          <p className="text-gray-400 mt-2">
            Store resumes, cover letters, aadhar and other proof docs
          </p>
        </div>
      </header>

      {/* File Upload Section */}
      <div className="max-w-7xl mx-auto p-6 bg-slate-800 rounded-lg shadow-lg">
        <div className="flex flex-col gap-6">
          {/* Select File Type */}
          <div className="flex gap-4">
            <button
              onClick={() => setFileType("resume")}
              className={`p-2 text-white rounded-full ${
                fileType === "resume" ? "bg-blue-500" : "bg-gray-500"
              } hover:bg-blue-600`}
            >
              Resume
            </button>
            <button
              onClick={() => setFileType("coverLetter")}
              className={`p-2 text-white rounded-full ${
                fileType === "coverLetter" ? "bg-blue-500" : "bg-gray-500"
              } hover:bg-blue-600`}
            >
              Cover Letter
            </button>
          </div>

          {/* File Upload Section */}
          <div className="flex flex-col items-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="p-2 bg-slate-700 text-white rounded-md"
            />
            {selectedFile && (
              <div className="mt-4 text-gray-300">
                <p>Selected File: {selectedFile.name}</p>
              </div>
            )}
            <button
              onClick={handleFileUpload}
              className="mt-4 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Upload {fileType === "resume" ? "Resume" : "Cover Letter"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureDocumentVault;
