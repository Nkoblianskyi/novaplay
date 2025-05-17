import Image from "next/image"

export function Hero() {
  return (
    <section className="hero-section" itemScope itemType="https://schema.org/Thing" aria-labelledby="hero-title">
      <div className="hero-section__content">
        <div className="hero-section__text">
          <h1 className="hero-section__title" id="hero-title" itemProp="name">
            AQUAVIBE
          </h1>
          <p className="hero-section__subtitle" itemProp="description">
            Utforsk Havets Hemmeligheter
          </p>
          <p className="hero-section__description">
            Dykk ned i en verden av undervannseventyr og spennende opplevelser. Svøm med fargerike fisker, samle skatter
            og opplev havets magi.
          </p>
          <div className="hero-section__disclaimer">
            <p>KUN FOR UNDERHOLDNING - Ingen ekte penger, ingen premier</p>
          </div>
        </div>
        <div className="hero-section__visual">
          <div className="hero-section__bubbles">
            <div className="bubble bubble--1"></div>
            <div className="bubble bubble--2"></div>
            <div className="bubble bubble--3"></div>
            <div className="bubble bubble--4"></div>
            <div className="bubble bubble--5"></div>
          </div>
          <div className="hero-section__image-container">
            <Image
              src="/underwater-adventure.png"
              alt="Magisk undervannsscene"
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
