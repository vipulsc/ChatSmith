import React from "react";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Header

    <div>
      {/* {sidebar} */}
      <div>{children}</div>
    </div>
  );
}

export default AdminLayout;
