import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ACTIVITY } from "@/lib/mock-data";

export function ActivityChart() {
  return (
    <div className="glass-panel rounded-3xl p-5 sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="eyebrow">Registration Activity</p>
          <h2 className="mt-1 font-display text-lg font-semibold text-brand-dark">
            Submissions over time
          </h2>
        </div>
        <span className="shrink-0 rounded-full bg-brand/5 px-3 py-1 text-[11px] font-medium text-brand ring-1 ring-inset ring-brand/15">
          Last 7 months
        </span>
      </div>

      <div className="mt-6 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={ACTIVITY} margin={{ top: 8, right: 8, bottom: 0, left: -16 }}>
            <defs>
              <linearGradient id="activityFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--brand)" stopOpacity={0.35} />
                <stop offset="100%" stopColor="var(--brand)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--hairline)" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink-faint)", fontSize: 12 }}
              dy={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "var(--ink-faint)", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ stroke: "var(--brand)", strokeOpacity: 0.25 }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid var(--hairline)",
                boxShadow: "var(--shadow-soft)",
                fontSize: 12,
              }}
              labelStyle={{ color: "var(--ink-soft)" }}
            />
            <Area
              type="monotone"
              dataKey="registrations"
              name="Registrations"
              stroke="var(--brand)"
              strokeWidth={2.5}
              fill="url(#activityFill)"
              dot={{ r: 3, fill: "var(--brand)", strokeWidth: 0 }}
              activeDot={{ r: 5, fill: "var(--gold)", strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
