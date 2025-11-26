import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <style>{`
        .shimmer-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 20px;
        }

        .shimmer-card {
          width: 250px;
          height: 320px;
          border-radius: 12px;
          background: #f0f0f0;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          animation: shimmer 1.5s infinite linear;
        }

        .shimmer-box {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            #e0e0e0 0%,
            #f5f5f5 50%,
            #e0e0e0 100%
          );
          background-size: 200% 100%;
          border-radius: 8px;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      {Array(16)
        .fill("")
        .map((_, i) => (
          <div key={i} className="shimmer-card">
            <div className="shimmer-box" style={{ height: "150px" }}></div>
            <div className="shimmer-box" style={{ height: "20px" }}></div>
            <div className="shimmer-box" style={{ height: "20px" }}></div>
            <div className="shimmer-box" style={{ height: "20px" }}></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
