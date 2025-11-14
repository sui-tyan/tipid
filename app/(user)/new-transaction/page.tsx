import NewTransaction from "@/components/dashboard/NewTransaction";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader headerName="New Transaction" />
      <NewTransaction />
    </>
  );
}
