import Transactions from "@/components/dashboard/Transactions";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader headerName="Transactions" />
      <Transactions />
    </>
  );
}
