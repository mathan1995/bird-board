import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="text-md p-3 bg-red-500 text-white">
        Im a reusable navbar
      </nav>

      {children}
    </div>
  );
};

export default layout;
