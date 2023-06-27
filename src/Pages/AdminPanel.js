import React from "react";
import AdminPanelContent from "../Components/AdminPanel/AdminPanelContent";
import SidebarLayout from "../Layouts/SidebarLayout";

export default function AdminPanel() {
  return (
    <SidebarLayout title="Admin Panel">
      <AdminPanelContent />
    </SidebarLayout>
  );
}
