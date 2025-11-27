import Dashboard from "@/components/dashboard/Dashboard";
import { SiteHeader } from "@/components/site-header";
import { fetchRecentCashflow } from "@/lib/cashflowHandler";
import { fetchRecentExpenses } from "@/lib/expenseHandler";
import { fetchGoal } from "@/lib/goalHandler";

export default async function Page() {
  const recentExpenses = await fetchRecentExpenses();
  const recentCashflow = await fetchRecentCashflow();
  const goalProgress = await fetchGoal();

  return (
    <>
      <SiteHeader headerName="Dashboard" />
      <Dashboard recentExpenses={recentExpenses.data} recentCashflow={recentCashflow.data} goalProgress={goalProgress.data}/>
    </>
  );
}
