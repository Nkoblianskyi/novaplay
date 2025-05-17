import { FishIcon } from "@/components/animated-icons/fish-icon"
import { SeaweedIcon } from "@/components/animated-icons/seaweed-icon"
import { ShellIcon } from "@/components/animated-icons/shell-icon"

export function Characters() {
  return (
    <section className="characters-section">
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
      <div className="characters-section__container">
        <h2 className="characters-section__title">UNDERVANNSVENNER OG SKATTER</h2>
        <p className="characters-section__description">
          Bli med på et spennende undervannseventyr med den nysgjerrige fisken Finn som svømmer gjennom det klare, blå
          havet. Hjelp Finn med å samle sjøgress, reker og skjell mens han navigerer mellom korallrev og andre
          havbeboere. Dette er en reise full av oppdagelser, farger og ro - perfekt for alle som ønsker å oppleve havets
          magi.
        </p>
        <div className="characters-section__grid">
          <div className="character-card">
            <div className="character-card__image-container">
              <div className="character-card__animated-icon">
                <FishIcon size={200} isAnimated={true} />
              </div>
            </div>
            <h3 className="character-card__name">FISKEN FINN</h3>
            <p className="character-card__trait">Nysgjerrig. Fargerik. Eventyrlysten.</p>
            <p className="character-card__description">
              Finn er en livlig og vennlig fisk med en forkjærlighet for å utforske havets hemmeligheter. Med sine raske
              finner og skarpe øyne kan han navigere gjennom selv de mest komplekse korallrev på jakt etter spennende
              oppdagelser.
            </p>
          </div>
          <div className="character-card">
            <div className="character-card__image-container">
              <div className="character-card__animated-icon">
                <SeaweedIcon size={200} isAnimated={true} />
              </div>
            </div>
            <h3 className="character-card__name">HAVETS SJØGRESS</h3>
            <p className="character-card__trait">Næringsrikt. Livgivende.</p>
            <p className="character-card__description">
              Sjøgresset i havet er ikke bare vakkert, det gir også Finn ekstra energi til å svømme lengre og raskere.
              Jo mer sjøgress han samler, desto bedre blir hans evner til å utforske nye områder av havet.
            </p>
          </div>
          <div className="character-card">
            <div className="character-card__image-container">
              <div className="character-card__animated-icon">
                <ShellIcon size={200} isAnimated={true} />
              </div>
            </div>
            <h3 className="character-card__name">SKJELL-SKATTER</h3>
            <p className="character-card__trait">Sjeldne. Vakre. Verdifulle.</p>
            <p className="character-card__description">
              Skjellene er havets skjulte skatter. Når Finn finner et skjell, får han spesielle krefter som hjelper ham
              å oppdage hemmelige stier og skjulte områder i det store, blå havet.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
