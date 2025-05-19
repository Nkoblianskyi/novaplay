import { FishIcon } from "@/components/animated-icons/fish-icon"
import { SeaweedIcon } from "@/components/animated-icons/seaweed-icon"
import { ShrimpIcon } from "@/components/animated-icons/shrimp-icon"
import { ShellIcon } from "@/components/animated-icons/shell-icon"

export function GamePreview() {
  return (
    <section className="game-preview-section">
      <div className="game-preview-section__container">
        <div className="game-preview-section__content">
          <div className="game-preview-section__text">
            <h2 className="game-preview-section__title">FINNS UNDERVANNSEVENTYR</h2>
            <p className="game-preview-section__description">
              Bli med Finn på en fredelig reise under havoverflaten. Samle sjøgress, reker og skjell mens du utforsker
              korallrev og oppdager det fargerike livet i havet.
            </p>
            <ul className="game-preview-section__features-list">
              <li>
                <span className="game-preview-section__feature-icon">🌊</span>
                <span>Utforsk vakre undervannslandskap</span>
              </li>
              <li>
                <span className="game-preview-section__feature-icon">🐚</span>
                <span>Oppdag skjulte skatter</span>
              </li>
              <li>
                <span className="game-preview-section__feature-icon">🐟</span>
                <span>Møt fargerike havbeboere</span>
              </li>
              <li>
                <span className="game-preview-section__feature-icon">🎮</span>
                <span>Avslappende og engasjerende opplevelse</span>
              </li>
            </ul>
          </div>
          <div className="game-preview-section__image">
            <div className="game-preview-section__ocean-scene">
              <FishIcon size={100} isAnimated={true} className="game-preview-section__fish" />
              <SeaweedIcon size={80} isAnimated={true} className="game-preview-section__seaweed-1" />
              <ShellIcon size={60} isAnimated={true} className="game-preview-section__shell" />
              <ShrimpIcon size={70} isAnimated={true} className="game-preview-section__shrimp" />
              <SeaweedIcon size={90} isAnimated={true} className="game-preview-section__seaweed-2" />
            </div>
          </div>
        </div>
      </div>

      <div
        className="disclaimer disclaimer--top disclaimer--sticky"
        role="alert"
        aria-label="Informasjon om ansvar og aldersgrense"
      >
        <p className="disclaimer__text">
          <strong>VIKTIG INFORMASJON:</strong> AquaVibe er en digital opplevelse laget kun for avslapning og underholdning.
          Ingen ekte penger er involvert, og ingen elementer har økonomisk verdi. Plattformen er kun for brukere over 18 år.
          Hvis det slutter å være morsomt, ta en pause. Du kan også besøke støttesider som{" "}
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
    </section>
  )
}
