"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { FishIcon } from "@/components/animated-icons/fish-icon"
import { SeaweedIcon } from "@/components/animated-icons/seaweed-icon"
import { ShrimpIcon } from "@/components/animated-icons/shrimp-icon"
import { ShellIcon } from "@/components/animated-icons/shell-icon"
import { SequenceAnimation } from "@/components/sequence-animation"

// Game elements
const elements = [
  { id: "fish", value: 4, component: FishIcon },
  { id: "seaweed", value: 2, component: SeaweedIcon },
  { id: "shrimp", value: 5, component: ShrimpIcon },
  { id: "shell", value: 3, component: ShellIcon },
]

export default function GamePage() {
  const [score, setScore] = useState(5000)
  const [energy, setEnergy] = useState(50)
  const [board, setBoard] = useState<string[][]>([])
  const [isActive, setIsActive] = useState(false)
  const [matches, setMatches] = useState<{ element: string; count: number; multiplier: number; points: number }[]>([])
  const [totalPoints, setTotalPoints] = useState(0)
  const [activeColumns, setActiveColumns] = useState<boolean[]>([false, false, false, false, false])
  const [visibleBoard, setVisibleBoard] = useState<string[][]>([])

  // Animation timing references
  const animationDurations = [1000, 1400, 1800, 2200, 2600] // Different durations for each column
  const animationTimers = useRef<NodeJS.Timeout[]>([])

  // Initialize board
  useEffect(() => {
    if (board.length === 0) {
      const initialBoard = generateBoard()
      setBoard(initialBoard)
      setVisibleBoard(initialBoard)
    }

    // Cleanup timers on unmount
    return () => {
      animationTimers.current.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  const generateBoard = () => {
    const newBoard: string[][] = []
    for (let row = 0; row < 3; row++) {
      const newRow: string[] = []
      for (let col = 0; col < 5; col++) {
        const randomElement = elements[Math.floor(Math.random() * elements.length)]
        newRow.push(randomElement.id)
      }
      newBoard.push(newRow)
    }
    return newBoard
  }

  const startGame = () => {
    if (isActive || score < energy) return

    // Clear any existing timers
    animationTimers.current.forEach((timer) => clearTimeout(timer))
    animationTimers.current = []

    setIsActive(true)
    setMatches([])
    setTotalPoints(0)
    setScore((prev) => prev - energy)

    // Set all columns to active state
    setActiveColumns([true, true, true, true, true])

    // Generate new board but don't show it yet
    const newBoard = generateBoard()
    setBoard(newBoard)

    // Stop columns one by one with delays
    animationDurations.forEach((duration, colIndex) => {
      const timer = setTimeout(() => {
        setActiveColumns((prev) => {
          const updated = [...prev]
          updated[colIndex] = false
          return updated
        })

        // Update visible board column by column
        setVisibleBoard((prev) => {
          const updated = JSON.parse(JSON.stringify(prev))
          for (let row = 0; row < 3; row++) {
            updated[row][colIndex] = newBoard[row][colIndex]
          }
          return updated
        })

        // When last column stops, calculate matches
        if (colIndex === animationDurations.length - 1) {
          setTimeout(() => {
            calculateMatches(newBoard)
            setIsActive(false)
          }, 500) // Small delay after last column stops
        }
      }, duration)

      animationTimers.current.push(timer)
    })
  }

  const calculateMatches = (board: string[][]) => {
    const elementCounts: Record<string, number> = {}

    // Count elements
    board.forEach((row) => {
      row.forEach((element) => {
        elementCounts[element] = (elementCounts[element] || 0) + 1
      })
    })

    // Calculate matches
    const newMatches: { element: string; count: number; multiplier: number; points: number }[] = []
    let newTotalPoints = 0

    Object.entries(elementCounts).forEach(([element, count]) => {
      if (count >= 3) {
        const elementData = elements.find((s) => s.id === element)
        if (elementData) {
          const multiplier = elementData.value
          const points = Math.round(energy * multiplier * (count / 3))
          newMatches.push({
            element,
            count,
            multiplier,
            points,
          })
          newTotalPoints += points
        }
      }
    })

    if (newTotalPoints > 0) {
      setScore((prev) => prev + newTotalPoints)
      setMatches(newMatches)
      setTotalPoints(newTotalPoints)
    }
  }

  const decreaseEnergy = () => {
    if (energy > 10) {
      setEnergy((prev) => prev - 10)
    }
  }

  const increaseEnergy = () => {
    if (energy < 500) {
      setEnergy((prev) => prev + 10)
    }
  }

  const renderElement = (elementId: string, isMatching: boolean, size = 80) => {
    const elementData = elements.find((s) => s.id === elementId)
    if (!elementData) return null

    const IconComponent = elementData.component
    return (
      <IconComponent
        size={size}
        isAnimated={!isActive && isMatching}
        className={isMatching ? "matching-element" : ""}
      />
    )
  }

  return (
    <main className="game-page" itemScope itemType="https://schema.org/SoftwareApplication">
      <meta itemProp="applicationCategory" content="Game" />
      <meta itemProp="operatingSystem" content="Web Browser" />
      <meta itemProp="name" content="AquaVibe - Sosial Spillplattform" />
      <meta itemProp="offers" itemScope itemType="https://schema.org/Offer" />
      <meta itemProp="price" content="0" />
      <meta itemProp="priceCurrency" content="NOK" />

      <div
        className="game-page__warning"
        role="alert"
        aria-label="Advarsel om aldersgrense og at dette ikke er pengespill"
      >
        <p>
          <strong>ADVARSEL:</strong> Dette er kun et sosialt spill for underholdningsformål.
          <strong> Ingen ekte penger, ingen premier eller belønninger.</strong> Dette er IKKE pengespill.
          <span> Du må være 18 år for å spille.</span> Hvis det slutter å være gøy, ta et skritt tilbake. Du kan også
          besøke hjelpesider som{" "}
          <a
            href="https://hjelpelinjen.no"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Besøk Hjelpelinjen - Åpnes i nytt vindu"
          >
            Hjelpelinjen.no
          </a>
          ,{" "}
          <a
            href="https://gamcare.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Besøk GamCare - Åpnes i nytt vindu"
          >
            GamCare
          </a>{" "}
          eller{" "}
          <a
            href="https://gambleware.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Besøk GambleAware - Åpnes i nytt vindu"
          >
            GambleAware
          </a>{" "}
          for støtte og råd.
        </p>
      </div>

      <div className="game-board" role="application" aria-label="Spillbrett - Sosialt spill uten pengepremier">
        <div className="game-board__header">
          <div className="game-board__score" aria-live="polite" aria-atomic="true">
            <div className="game-board__score-label" id="score-label">
              POENG
            </div>
            <div className="game-board__score-value" aria-labelledby="score-label">
              {score}
            </div>
          </div>

          <div className="game-board__energy-controls" role="group" aria-label="Energikontroller">
            <button
              className="game-board__energy-button game-board__energy-button--decrease"
              onClick={decreaseEnergy}
              disabled={isActive}
              aria-label="Reduser energi"
              aria-disabled={isActive}
            >
              -
            </button>
            <div
              className="game-board__energy-value"
              aria-live="polite"
              aria-atomic="true"
              aria-label="Nåværende energi"
            >
              {energy}
            </div>
            <button
              className="game-board__energy-button game-board__energy-button--increase"
              onClick={increaseEnergy}
              disabled={isActive}
              aria-label="Øk energi"
              aria-disabled={isActive}
            >
              +
            </button>
          </div>

          <button
            className={`game-board__play-button ${isActive ? "game-board__play-button--active" : ""}`}
            onClick={startGame}
            disabled={isActive || score < energy}
            aria-label={isActive ? "Aktivt..." : "Start spillet"}
            aria-disabled={isActive || score < energy}
          >
            {isActive ? "..." : "SPILL"}
          </button>
        </div>

        <div className="game-board__grid" role="grid" aria-label="Spillbrett-elementer" aria-live="polite">
          {visibleBoard.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="game-board__row" role="row" aria-label={`Rad ${rowIndex + 1}`}>
              {row.map((element, colIndex) => (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  className={`game-board__cell ${activeColumns[colIndex] ? "game-board__cell--active" : ""}`}
                  role="gridcell"
                  aria-label={activeColumns[colIndex] ? "Aktiv" : `Element: ${element}`}
                >
                  <div className="game-board__element">
                    {activeColumns[colIndex] ? (
                      <SequenceAnimation size={80} />
                    ) : (
                      renderElement(
                        element,
                        matches.some((match) => match.element === element),
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {totalPoints > 0 && (
          <div
            className="game-board__match-message"
            role="alert"
            aria-live="assertive"
            aria-label="Poeng informasjon - Kun for underholdning, ingen reell verdi"
          >
            <div className="game-board__match-title">Poeng: {totalPoints}</div>
            <div className="game-board__match-details">
              {matches.map((match, index) => (
                <div key={`match-${index}`} className="game-board__match-item">
                  <div className="game-board__match-element">{renderElement(match.element, true, 30)}</div>
                  {match.count}x (x{match.multiplier}) = {match.points}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="game-board__value-table" aria-label="Poengtabell - Viser elementer og deres verdier">
          <h3 className="game-board__value-table-title" id="value-table-title">
            POENGTABELL
          </h3>
          <div className="game-board__value-table-items" aria-labelledby="value-table-title">
            {elements.map((element) => (
              <div
                key={element.id}
                className="game-board__value-table-item"
                aria-label={`${element.id} element gir ${element.value} ganger energi i poeng`}
              >
                <div className="game-board__value-table-element">{renderElement(element.id, false, 40)}</div>
                <div className="game-board__value-table-multiplier">x{element.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="game-page__disclaimer"
        role="alert"
        aria-label="Viktig informasjon om at dette ikke er pengespill"
      >
        <p>
          <strong>VIKTIG INFORMASJON:</strong> Dette er kun en sosial spillplattform for underholdningsformål. Ingen
          ekte penger er involvert, ingen premier eller belønninger, og ingen virtuelle gjenstander har noen reell
          monetær verdi. Dette er IKKE pengespill. Hvis det slutter å være gøy, ta et skritt tilbake. Du kan også besøke
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
      </div>

      <div className="game-page__back">
        <Link href="/" className="game-page__back-link" aria-label="Tilbake til hovedsiden">
          Tilbake til hovedsiden
        </Link>
      </div>
    </main>
  )
}
