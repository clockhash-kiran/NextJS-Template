import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Private dashboard layout",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dashboard-container">
      {/* Optional: Add sidebar or dashboard nav here */}
      {children}
    </div>
  );
}
