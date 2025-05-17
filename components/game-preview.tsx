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
              Bli med Finn på et spennende eventyr under havet. Samle sjøgress, reker og skjell mens du navigerer
              gjennom korallrev og møter andre havbeboere.
            </p>
            <ul className="game-preview-section__features-list">
              <li>
                <span className="game-preview-section__feature-icon">🌊</span>
                <span>Utforsk vakre undervannslandskap</span>
              </li>
              <li>
                <span className="game-preview-section__feature-icon">🐚</span>
                <span>Samle sjeldne skatter</span>
              </li>
              <li>
                <span className="game-preview-section__feature-icon">🐟</span>
                <span>Møt fargerike havbeboere</span>
              </li>
              <li>
                <span className="game-preview-section__feature-icon">🎮</span>
                <span>Engasjerende spillmekanikk</span>
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
        aria-label="Advarsel om aldersgrense og at dette ikke er pengespill"
      >
        <p className="disclaimer__text">
          <strong>ADVARSEL:</strong> AquaVibe er kun en sosial spillplattform for underholdningsformål. Ingen ekte
          penger er involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell verdi.
          Du må være 18 år eller eldre for å bruke denne plattformen.
        </p>
      </div>
    </section>
  )
}
