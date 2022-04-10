import React from "react";

export default function ({ children }: { children: any }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
        padding: "0 1rem",
      }}
    >
      <div
        style={{
          alignItems: "center",
          justifyContent: "flex-end",
          minHeight: 64,
        }}
      />

      <div
        style={{
          flex: 1,
          overflow: "auto",
        }}
      >
        <div
          style={{
            padding: "1rem 0",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
