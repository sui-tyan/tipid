"use client";

import Dashboard from "@/components/dashboard/Dashboard";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader headerName="Dashboard" />
      <Dashboard />
    </>
  );
}
