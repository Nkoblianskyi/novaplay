interface NovaPlayLogoProps {
  className?: string
}

export function NovaPlayLogo({ className = "" }: NovaPlayLogoProps) {
  return (
    <div className={`nova-play-logo ${className}`}>
      <span className="nova-play-logo__nova">NOVA</span>
      <span className="nova-play-logo__play">PLAY</span>
      <span className="nova-play-logo__network">NETWORK</span>
    </div>
  )
}
