import { downloadLinks } from '@/lib/config';

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-12 sm:py-16 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold-accent/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-border/20 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section label */}
          <p className="text-sm font-bold tracking-widest text-gold-accent uppercase">
            Get Started
          </p>
          
          {/* Section title */}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Download Modpack
          </h2>
          
          {/* Section description */}
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose your preferred platform to download the Create: Lift &amp; Logic modpack and join our technical Minecraft community.
          </p>

          {/* Download buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            {/* CurseForge Button */}
            <a
              href={downloadLinks.curseforge}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-rose-600/50 bg-gradient-to-r from-rose-600 to-rose-800 px-8 py-4 text-lg font-bold tracking-wider text-white transition-all duration-300 hover:from-rose-500 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-rose-400/0 via-rose-400/20 to-rose-400/0 transition-transform duration-500 group-hover:translate-x-full"></span>
              <span className="relative flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                CurseForge
              </span>
            </a>

            {/* Modrinth Button */}
            <a
              href={downloadLinks.modrinth}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-green-600/50 bg-gradient-to-r from-green-600 to-green-800 px-8 py-4 text-lg font-bold tracking-wider text-white transition-all duration-300 hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 transition-transform duration-500 group-hover:translate-x-full"></span>
              <span className="relative flex items-center gap-2">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                Modrinth
              </span>
            </a>
          </div>

          {/* Platform note */}
          <p className="mt-6 text-sm text-muted-foreground">
            Both platforms provide automatic updates and community support.
          </p>
        </div>
      </div>
    </section>
  );
}

