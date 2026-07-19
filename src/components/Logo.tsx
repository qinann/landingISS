export default function Logo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="issLogoGrad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3478f6" />
          <stop offset="1" stopColor="#142543" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="10" fill="url(#issLogoGrad)" />
      <path d="M20 10.5 L28.5 20 L20 29.5 L11.5 20 Z" fill="white" fillOpacity="0.95" />
      <circle cx="20" cy="20" r="3.6" fill="#dfa93a" />
    </svg>
  )
}
