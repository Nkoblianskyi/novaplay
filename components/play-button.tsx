"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function PlayButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  const openDialog = () => setIsDialogOpen(true)
  const closeDialog = () => setIsDialogOpen(false)
  const confirmAge = () => router.push("/spill")

  return (
    <div className="play-button" itemScope itemType="https://schema.org/InteractionCounter">
      <button
        type="button"
        className="play-button__button"
        onClick={openDialog}
        aria-label="Start AquaVibe - Aldersbekreftelse kreves"
        aria-haspopup="dialog"
      >
        Spill AquaVibe
      </button>

      {isDialogOpen && (
        <div
          className="age-verification"
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-verification-title"
        >
          <div className="age-verification__content">
            <h3 id="age-verification-title" className="age-verification__title">
              Aldersbekreftelse
            </h3>
            <p className="age-verification__text">
              <strong>Viktig:</strong> Du må bekrefte at du er 18 år eller eldre for å bruke AquaVibe.
            </p>

            <div className="age-verification__disclaimer" role="alert">
              <p>
                <strong>VIKTIG INFORMASJON:</strong> AquaVibe er en sosial plattform laget kun for underholdning.
                Ingen ekte penger er involvert, ingen gevinster eller belønninger tilbys, og virtuelle elementer har ingen virkelig verdi.
                Dette er IKKE pengespill. Hvis det slutter å være gøy, ta et skritt tilbake. Du kan også besøke hjelpetjenester som{" "}
                <a href="https://hjelpelinjen.no" target="_blank" rel="noopener noreferrer">
                  Hjelpelinjen.no
                </a>
                ,{" "}
                <a href="https://gamcare.org.uk" target="_blank" rel="noopener noreferrer">
                  GamCare
                </a>{" "}
                eller{" "}
                <a href="https://gambleaware.org" target="_blank" rel="noopener noreferrer">
                  GambleAware
                </a>{" "}
                for støtte og veiledning.
              </p>
            </div>

            <div className="age-verification__buttons">
              <button
                type="button"
                onClick={confirmAge}
                className="age-verification__button age-verification__button--confirm"
                aria-label="Bekreft at du er 18 år eller eldre"
              >
                Jeg bekrefter at jeg er over 18 år
              </button>
              <button
                type="button"
                onClick={closeDialog}
                className="age-verification__button age-verification__button--cancel"
                aria-label="Avbryt og gå tilbake"
              >
                Avbryt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
