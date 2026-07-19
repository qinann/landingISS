const bars = [45, 75, 58, 92, 64, 84, 70]

export default function DashboardMockup({
  accent = 'brand',
  label = 'Inti Smart Solutions',
}: {
  accent?: 'brand' | 'accent'
  label?: string
}) {
  const barColor = accent === 'accent' ? 'bg-accent-400' : 'bg-brand-400'
  const chipColor = accent === 'accent' ? 'bg-accent-400/20 text-accent-300' : 'bg-brand-400/20 text-brand-200'

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-2xl shadow-navy-950/40">
      <div className="flex items-center gap-2 border-b border-white/10 bg-navy-900/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate text-xs font-medium text-white/40">{label}</span>
      </div>

      <div className="grid grid-cols-5 gap-4 p-5">
        <div className="col-span-2 space-y-3">
          <div className={`inline-block rounded px-2 py-1 text-[10px] font-semibold ${chipColor}`}>
            RINGKASAN
          </div>
          <div className="space-y-2.5">
            <div className="h-3 w-4/5 rounded-full bg-white/15" />
            <div className="h-3 w-3/5 rounded-full bg-white/10" />
          </div>
          <div className="mt-4 space-y-2 rounded-lg bg-white/5 p-3">
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-4/5 rounded-full bg-white/10" />
            <div className="h-2 w-2/3 rounded-full bg-white/10" />
          </div>
          <div className="space-y-2 rounded-lg bg-white/5 p-3">
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-3/5 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="col-span-3 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-white/5 p-3">
                <div className="h-2 w-2/3 rounded-full bg-white/15" />
                <div className={`mt-2 h-4 w-1/2 rounded ${barColor} opacity-80`} />
              </div>
            ))}
          </div>
          <div className="flex h-32 items-end gap-2 rounded-lg bg-white/5 p-4">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`w-full rounded-t ${barColor}`}
                style={{ height: `${h}%`, opacity: 0.45 + i * 0.07 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
