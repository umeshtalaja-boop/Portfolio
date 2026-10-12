import { useEffect, useRef, useState } from "react"
import {
  Code2,
  ContactRound,
  ExternalLink,
  GitBranch,
  LoaderCircle,
  Mail,
  Phone,
  Send,
} from "lucide-react"
import { contactConfig, images } from "../data.js"
import { Eyebrow } from "../components/UI.jsx"

const emptyForm = { name: "", email: "", subject: "", message: "" }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = "Please enter your name."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email address."
  if (!form.subject.trim()) errors.subject = "Please add a subject."
  if (form.message.trim().length < 10)
    errors.message = "Please share at least a few details."
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: "", message: "" })
  const [loading, setLoading] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  function update(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: "" }))
    if (status.type) setStatus({ type: "", message: "" })
  }

  function submit(event) {
    event.preventDefault()
    const nextErrors = validate(form)
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setStatus({
        type: "error",
        message: "Check the highlighted fields and try again.",
      })
      return
    }

    setLoading(true)
    setStatus({ type: "", message: "" })
    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`,
    )

    timeoutRef.current = window.setTimeout(() => {
      setLoading(false)
      setStatus({
        type: "success",
        message:
          "Your email client is opening with this message ready to send.",
      })
      window.location.href = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`
      setForm(emptyForm)
    }, 550)
  }

  return (
    <section className="contact-page">
      <div className="contact-background">
        <img
          src={images.home}
          alt="Warm sunlight emerging over a dark planetary horizon"
          fetchPriority="high"
        />
        <div className="contact-atmosphere" />
        <div className="contact-stars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="contact-moon" aria-hidden="true">
          <img src={images.lunar} alt="" />
        </div>
      </div>

      <div className="contact-layout shell">
        <div className="contact-copy">
          <Eyebrow light>Let&apos;s connect</Eyebrow>
          <h1>
            Let&apos;s Create
            <br />
            <em>Something Extraordinary.</em>
          </h1>
          <p>
            Have a project, collaboration, AI/ML idea, or development
            opportunity in mind? Send a signal and let&apos;s explore what we
            can build together.
          </p>
          <div className="contact-links">
            <a href={`mailto:${contactConfig.email}`}>
              <Mail size={17} />
              {contactConfig.email}
            </a>
            <a href={`mailto:${contactConfig.universityEmail}`}>
              <Mail size={17} />
              {contactConfig.universityEmail}
            </a>
            <a href={contactConfig.github} target="_blank" rel="noreferrer">
              <GitBranch size={17} />
              GitHub
            </a>
            <a href={contactConfig.leetcode} target="_blank" rel="noreferrer">
              <Code2 size={17} />
              LeetCode
            </a>
            <a href={contactConfig.gfg} target="_blank" rel="noreferrer">
              <ExternalLink size={17} />
              GeeksforGeeks
            </a>
            <a href={contactConfig.linkedin} target="_blank" rel="noreferrer">
              <ContactRound size={17} />
              LinkedIn
            </a>
            <a href={`tel:${contactConfig.phone.replace(/\s/g, "")}`}>
              <Phone size={17} />
              {contactConfig.phone}
            </a>
          </div>
          <span className="status">
            <i />
            Available for select projects and collaborations
          </span>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-heading">
            <span>New transmission</span>
            <i>05 — CONTACT</i>
          </div>

          <div className="form-row">
            <label htmlFor="contact-name">
              <span>Name</span>
              <input
                id="contact-name"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Jane Smith"
                autoComplete="off"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && <small id="name-error">{errors.name}</small>}
            </label>
            <label htmlFor="contact-email">
              <span>Email</span>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                placeholder="jane@company.com"
                autoComplete="off"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <small id="email-error">{errors.email}</small>}
            </label>
          </div>

          <label htmlFor="contact-subject">
            <span>Subject</span>
            <input
              id="contact-subject"
              name="subject"
              value={form.subject}
              onChange={update}
              placeholder="Project, collaboration, or opportunity"
              autoComplete="off"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && (
              <small id="subject-error">{errors.subject}</small>
            )}
          </label>

          <label htmlFor="contact-message">
            <span>Message</span>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={update}
              rows="3"
              placeholder="Tell me a little about the idea, timing, and ambition…"
              autoComplete="off"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <small id="message-error">{errors.message}</small>
            )}
          </label>

          <p className="mailto-note">
            No backend is connected. Sending opens your default email client.
          </p>
          <div className="form-actions">
            <p className={`form-message ${status.type}`} aria-live="polite">
              {status.message || "Usually responds within 2–3 business days."}
            </p>
            <button
              className="action action-primary"
              type="submit"
              disabled={loading}
            >
              <span>{loading ? "Preparing…" : "Send transmission"}</span>
              {loading ? (
                <LoaderCircle className="spin" size={15} />
              ) : (
                <Send size={15} />
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
