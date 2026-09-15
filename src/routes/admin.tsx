import { Outlet, createFileRoute } from "@tanstack/react-router";
import { AdminShell } from "@/components/admin/AdminShell";
import { AmbientField } from "@/components/portal/AmbientField";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <>
      <AmbientField />
      <AdminShell>
        <Outlet />
      </AdminShell>
    </>
  );
}
