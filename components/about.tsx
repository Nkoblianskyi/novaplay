import { FishIcon } from "@/components/animated-icons/fish-icon"

export function About() {
  return (
    <section className="about-section">
      <div className="about-section__container">
        <h2 className="about-section__title">OM AQUAVIBE</h2>
        <div className="about-section__content">
          <div className="about-section__text">
            <p className="about-section__paragraph">
              AquaVibe er skapt for å gi deg en avslappende og fascinerende opplevelse under havets overflate. Vår
              plattform kombinerer vakre undervannslandskap med engasjerende aktiviteter, der du kan utforske havets
              hemmeligheter og oppleve livet i det blå.
            </p>
            <p className="about-section__paragraph">
              Vårt dedikerte team av havbiologer og designere har bygget en verden der bølgende sjøgress, fargerike
              fisker og skjulte skatter skaper en autentisk undervannsatmosfære. Hver detalj er nøye utformet for å gi
              deg en oppslukende og avslappende opplevelse.
            </p>
            <p className="about-section__paragraph">
              I AquaVibe handler det om å oppdage og nyte havets skjønnhet. Her finner du ingen stressende elementer -
              bare en fredelig flukt inn i en undervannsfantasi der du kan svømme fritt og utforske i ditt eget tempo.
            </p>
          </div>
          <div className="about-section__image-container">
            <div className="about-section__animated-icon">
              <FishIcon size={400} isAnimated={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
