import Image from "next/image"

interface NovaPlayLogoImageProps {
  className?: string
}

export function NovaPlayLogoImage({ className = "" }: NovaPlayLogoImageProps) {
  return (
    <div className={`nova-play-logo-image ${className}`}>
      <Image src="/novaplay-logo.png" alt="NovaPlay Network Logo" width={180} height={50} priority />
    </div>
  )
}
