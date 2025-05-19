import Image from "next/image"

export function Hero() {
  return (
    <section
      className="hero-section"
      itemScope
      itemType="https://schema.org/CreativeWork"
      aria-labelledby="hero-title"
    >
      <div className="hero-section__content">
        <div className="hero-section__text">
          <h1 className="hero-section__title" id="hero-title" itemProp="name">
            AQUAVIBE
          </h1>
          <p className="hero-section__subtitle" itemProp="about">
            Utforsk Havets Hemmeligheter
          </p>
          <p className="hero-section__description" itemProp="description">
            Dykk ned i en verden av undervannseventyr og rolige opplevelser. Svøm med fargerike fisker, oppdag skjulte skatter,
            og opplev magien under overflaten – i ditt eget tempo.
          </p>
          <div className="hero-section__disclaimer" role="note">
            <p>
              <strong>FOR UNDERHOLDNING:</strong> AquaVibe er en avslappende digital opplevelse uten bruk av ekte penger.
            </p>
          </div>
        </div>

        <div className="hero-section__visual">
          <div className="hero-section__bubbles" aria-hidden="true">
            <div className="bubble bubble--1" />
            <div className="bubble bubble--2" />
            <div className="bubble bubble--3" />
            <div className="bubble bubble--4" />
            <div className="bubble bubble--5" />
          </div>
          <div className="hero-section__image-container">
            <Image
              src="/underwater-adventure.png"
              alt="Illustrasjon av en undervannsverden"
              width={600}
              height={400}
              className="hero-section__image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
