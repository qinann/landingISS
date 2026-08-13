export default function ProductVideo({ src, label = 'Inti Smart Solution' }: { src: string; label?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-2xl shadow-navy-950/40">
      <div className="flex items-center gap-2 border-b border-white/10 bg-navy-900/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate text-xs font-medium text-white/40">{label}</span>
      </div>
      <video
        src={src}
        controls
        preload="metadata"
        className="aspect-video w-full bg-black"
      />
    </div>
  )
}
