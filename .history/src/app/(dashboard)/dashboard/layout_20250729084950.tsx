export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      {/* No <Comp577 /> here */}
      {children}
    </div>
  );
}
