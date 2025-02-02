import React from "react";
import Header from "@/components/Header";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header></Header>
	  
      <div>
        {/* {sidebar} */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
