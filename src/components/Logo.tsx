import logoIcon from '../assets/logo-icon.png'

export default function Logo({ className = 'h-9 w-9' }: { className?: string }) {
  return <img src={logoIcon} alt="Inti Smart Solutions" className={`${className} object-contain`} />
}
