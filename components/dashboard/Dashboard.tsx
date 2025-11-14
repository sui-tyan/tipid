import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, Pie, PieChart } from "recharts";
import { TrendingUp } from "lucide-react";
import Goal from "@/components/dashboard/Goal";

export default function Dashboard() {
  const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "var(--chart-1)",
    },
    safari: {
      label: "Safari",
      color: "var(--chart-2)",
    },
    firefox: {
      label: "Firefox",
      color: "var(--chart-3)",
    },
    edge: {
      label: "Edge",
      color: "var(--chart-4)",
    },
    other: {
      label: "Other",
      color: "var(--chart-5)",
    },
  } satisfies ChartConfig;

  const cashFlowChartData = [{ inflow: 18650.0, outflow: 9650 }];

  const cashFlowChartConfig = {
    inflow: {
      label: "Inflow",
      color: "var(--color-green-500)",
    },
    outflow: {
      label: "Outflow",
      color: "var(--color-red-500)",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6">
            <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                  <CardTitle>Expenses</CardTitle>
                  <CardDescription>Last 30 Days</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                  <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                  >
                    <PieChart>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Pie
                        data={chartData}
                        dataKey="visitors"
                        nameKey="browser"
                        innerRadius={60}
                      />
                    </PieChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 leading-none font-medium">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-muted-foreground leading-none">
                    Showing total expenses for the last 30 days
                  </div>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader className="items-center pb-0">
                  <CardTitle>Cashflow</CardTitle>
                  <CardDescription>Last 30 Days</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 pb-0">
                  <ChartContainer
                    config={cashFlowChartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                  >
                    <BarChart accessibilityLayer data={cashFlowChartData}>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                      />
                      <Bar
                        dataKey="inflow"
                        fill="var(--color-green-500)"
                        radius={4}
                      />
                      <Bar
                        dataKey="outflow"
                        fill="var(--color-red-500)"
                        radius={4}
                      />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 leading-none font-medium">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-muted-foreground leading-none">
                    Showing total expenses for the last 30 days
                  </div>
                </CardFooter>
              </Card>
              <Goal />
            </div>
          </div>
          <div className="px-4 lg:px-6">
            <ChartAreaInteractive />
          </div>
        </div>
      </div>
    </div>
  );
}
