import { ExternalLink } from "lucide-react"

const universeSites = [
  { label: "AURALIS", href: "https://auralis-eternal-light.lovable.app/" },
  { label: "EDU", href: "https://edu-eternal-dominion-universe.vercel.app" },
  { label: "E16 Portal", href: "https://e16super.netlify.app/" },
  { label: "Eureka Space", href: "https://eurekaspace.netlify.app/" },
  { label: "Layla Land", href: "https://laylaland.netlify.app/" },
  { label: "Iris Worlds", href: "https://irisworlds.netlify.app/" },
  { label: "Orbital Eternity", href: "https://orbital-eternity.netlify.app/" },
  { label: "Genesis Vault", href: "https://note.com/gensnotes" },
]

const auralisMembers = [
  { label: "Kate Patton", href: "https://katepatton.lovable.app" },
  { label: "Lillie Ardent", href: "https://lillieardentsuper.lovable.app" },
  { label: "Ninny Offenbach", href: "https://ninnyoffenbach.lovable.app" },
  { label: "Kate Claudia", href: "https://kate1st.netlify.app/" },
]

function FooterSection({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-edu-muted mb-3">
        {title}
      </h3>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-edu-text/70 hover:text-[#3b82f6] transition-colors"
            >
              <ExternalLink className="h-3 w-3 shrink-0" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-edu-border bg-edu-bg">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-bold text-[#3b82f6]">Game of Mina</p>
            <p className="mt-1 text-xs text-edu-muted">
              E16 Binary Star System Chronicle &mdash; A universe encyclopedia
              project.
            </p>
          </div>

          <FooterSection title="Universe Sites" links={universeSites} />

          <FooterSection title="AURALIS Members" links={auralisMembers} />
        </div>

        <div className="mt-8 border-t border-edu-border pt-4">
          <p className="text-center text-[11px] text-edu-muted">
            &copy; {new Date().getFullYear()} Game of Mina &mdash; Part of the
            Eternal Dominion Universe
          </p>
        </div>
      </div>
    </footer>
  )
}
