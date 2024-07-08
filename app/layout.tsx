import "@styles/globals.css";
import React from "react";
export const metadata = {
  title: "Promptopia",
  description: "Discover & share API endpoints",
};
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
