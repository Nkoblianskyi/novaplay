import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Poppins } from "next/font/google"
import { Header } from "@/components/header"
import { AgeRestrictionIcon } from "@/components/age-restriction-icon"
import "@/app/globals.scss"
import "@/app/spill/game-page.scss"

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "AquaVibe - Sosial Spillplattform",
  description: "En morsom sosial spillplattform for underholdning. Ingen ekte penger eller premier involvert.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <body className={poppins.className} itemScope itemType="https://schema.org/WebPage">
        <div
          className="disclaimer disclaimer--top disclaimer--sticky"
          role="alert"
          aria-label="Advarsel om aldersgrense og at dette ikke er pengespill"
        >
          <p className="disclaimer__text">
            <strong>ADVARSEL:</strong> AquaVibe er kun en sosial spillplattform for underholdningsformål. Ingen ekte
            penger er involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
            Du må være 18 år eller eldre for å bruke denne plattformen. Hvis det slutter å være gøy, ta et skritt
            tilbake. Du kan også besøke hjelpesider som{" "}
            <a href="https://hjelpelinjen.no" target="_blank" rel="noopener noreferrer">
              Hjelpelinjen.no
            </a>
            ,{" "}
            <a href="https://gamcare.org.uk" target="_blank" rel="noopener noreferrer">
              GamCare
            </a>{" "}
            eller{" "}
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
              GambleAware
            </a>{" "}
            for støtte og råd.
          </p>
        </div>
        <Header />
        {children}
        <footer className="footer" role="contentinfo" aria-label="Bunntekst med kontaktinformasjon og lenker">
          <div className="footer__content">
            <div className="footer__logo-container" aria-label="Støtteorganisasjoner">
              <a
                href="https://hjelpelinjen.no"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__logo-link"
                aria-label="Besøk Hjelpelinjen - Åpnes i nytt vindu"
              >
                <img src="/aware.webp" alt="Hjelpelinjen logo" className="footer__logo" />
              </a>
              <a
                href="https://www.gamcare.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__logo-link"
                aria-label="Besøk GamCare - Åpnes i nytt vindu"
              >
                <img src="/aware2 (1).png" alt="GamCare logo" className="footer__logo" />
              </a>
              <a
                href="https://www.gambleaware.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__logo-link"
                aria-label="Besøk GambleAware - Åpnes i nytt vindu"
              >
                <img src="/aware1 (1).webp" alt="GambleAware logo" className="footer__logo" />
              </a>
              <div className="footer__age-restriction">
                <AgeRestrictionIcon size={50} />
              </div>
            </div>
            <div className="footer__links" role="navigation" aria-label="Bunntekst navigasjon">
              <a href="/vilkar" className="footer__link" aria-label="Vilkår for bruk">
                Vilkår
              </a>
              <a href="/personvern" className="footer__link" aria-label="Personvernpolicy">
                Personvernpolicy
              </a>
              <a href="/ansvarsfraskrivelse" className="footer__link" aria-label="Ansvarsfraskrivelse">
                Ansvarsfraskrivelse
              </a>
            </div>
            <div
              className="footer__company"
              itemScope
              itemType="https://schema.org/Organization"
              aria-label="Firmaopplysninger"
            >
              <p>
                <span itemProp="name">© 2023 NovaPlay Network</span>
              </p>
              <p>
                <a href="https://novaplaynetwork.com" target="_blank" rel="noopener noreferrer" itemProp="url">
                  novaplaynetwork.com
                </a>
              </p>
            </div>
            <div
              className="disclaimer disclaimer--bottom"
              role="alert"
              aria-label="Viktig informasjon om at dette ikke er pengespill"
            >
              <p className="disclaimer__text">
                <strong>VIKTIG INFORMASJON:</strong> Dette er kun en sosial spillplattform for underholdningsformål.
                Ingen ekte penger er involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen
                reell verdi. Dette er IKKE pengespill. Du må være 18 år eller eldre for å bruke denne plattformen. Hvis
                aktivitetene på vår plattform begynner å påvirke ditt daglige liv negativt, anbefaler vi at du tar en
                pause og vurderer å søke hjelp. Hvis det slutter å være gøy, ta et skritt tilbake. Du kan også besøke
                hjelpesider som{" "}
                <a href="https://hjelpelinjen.no" target="_blank" rel="noopener noreferrer">
                  Hjelpelinjen.no
                </a>
                ,{" "}
                <a href="https://gamcare.org.uk" target="_blank" rel="noopener noreferrer">
                  GamCare
                </a>{" "}
                eller{" "}
                <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
                  GambleAware
                </a>{" "}
                for støtte og råd.
              </p>
              <p className="disclaimer__text">
                <strong>IMPORTANT INFORMATION:</strong> This is a social gaming platform intended solely for entertainment purposes.
                No real money is involved, no prizes or rewards are offered, and no virtual items have any real-world value. This is
                NOT gambling. You must be 18 years or older to use this platform. If your activity on our platform begins to
                negatively affect your daily life, we recommend taking a break and considering seeking help. If it stops being fun,
                take a step back. You can also visit support sites like{" "}
                <a href="https://hjelpelinjen.no" target="_blank" rel="noopener noreferrer">
                  Hjelpelinjen.no
                </a>
                ,{" "}
                <a href="https://gamcare.org.uk" target="_blank" rel="noopener noreferrer">
                  GamCare
                </a>{" "}
                or{" "}
                <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
                  GambleAware
                </a>{" "}
                for help and guidance.
              </p>

            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
