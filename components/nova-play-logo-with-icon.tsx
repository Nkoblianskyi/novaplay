import Link from "next/link"

interface NovaPlayLogoWithIconProps {
  className?: string
}

export function NovaPlayLogoWithIcon({ className = "" }: NovaPlayLogoWithIconProps) {
  return (
    <Link
      href="/"
      className={`nova-play-logo-with-icon ${className}`}
      aria-label="NovaPlay Network - Gå til hjemmesiden"
    >
      <div className="nova-play-logo-with-icon__icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#0D47A1" />
          <path
            d="M20 10 C 14 10, 8 15, 10 22 C 12 29, 18 30, 20 30 C 22 30, 28 29, 30 22 C 32 15, 26 10, 20 10 Z"
            fill="#29B6F6"
          />
          <path
            d="M20 14 C 17 14, 14 16, 15 20 C 16 24, 19 25, 20 25 C 21 25, 24 24, 25 20 C 26 16, 23 14, 20 14 Z"
            fill="#0D47A1"
          />
          <path d="M15 18 C 15 16, 18 15, 20 17 C 22 15, 25 16, 25 18" stroke="#FFA726" strokeWidth="1.5" fill="none" />
          <path d="M32 15 C 34 17, 34 23, 32 25" stroke="#29B6F6" strokeWidth="2" fill="none" />
          <path d="M8 15 C 6 17, 6 23, 8 25" stroke="#29B6F6" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="nova-play-logo-with-icon__text">
        <span className="nova-play-logo-with-icon__company">NovaPlay Network</span>
      </div>
    </Link>
  )
}
