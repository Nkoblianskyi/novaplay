import { FishIcon } from "@/components/animated-icons/fish-icon"
import { ShrimpIcon } from "@/components/animated-icons/shrimp-icon"
import { ShellIcon } from "@/components/animated-icons/shell-icon"

export function Features() {
  return (
    <section className="features-section">
      <div className="features-section__container">
        <h2 className="features-section__title">SVØM DYPT, UTFORSK VIDT</h2>
        <p className="features-section__description">
          I "Finns Undervannseventyr" styrer du den fargerike fisken Finn gjennom et levende og vakkert
          undervannslandskap. Ditt mål er å samle så mye sjøgress, reker og skjell som mulig mens du utforsker korallrev
          og oppdager skjulte skatter. Med intuitive kontroller og vakker grafikk blir du raskt oppslukt i dette
          fredelige eventyret.
        </p>
        <div className="features-section__grid">
          <div className="feature-card">
            <div className="feature-card__icon-container">
              <FishIcon size={80} isAnimated={true} />
            </div>
            <h3 className="feature-card__title">Undervannsvenner</h3>
            <p className="feature-card__description">
              Møt Finn og hans venner under havet. Svøm gjennom fargerike korallrev og opplev livet i det blå.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon-container">
              <ShellIcon size={80} isAnimated={true} />
            </div>
            <h3 className="feature-card__title">Samle Skatter</h3>
            <p className="feature-card__description">
              Finn skjulte skjell og andre skatter på havbunnen. Hver skatt gir deg nye muligheter og opplevelser.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-card__icon-container">
              <ShrimpIcon size={80} isAnimated={true} />
            </div>
            <h3 className="feature-card__title">Spennende Spill</h3>
            <p className="feature-card__description">
              Prøv våre engasjerende spill med undervannstema. Samle poeng og ha det gøy i en avslappende atmosfære.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
