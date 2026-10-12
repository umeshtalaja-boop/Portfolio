import { MagneticLink } from "../components/UI.jsx"

export default function NotFound() {
  return (
    <section className="not-found shell">
      <span>404 / SIGNAL LOST</span>
      <h1>
        This coordinate
        <br />
        doesn&apos;t exist.
      </h1>
      <p>The page may have drifted beyond the observable interface.</p>
      <MagneticLink to="/">Return home</MagneticLink>
    </section>
  )
}
