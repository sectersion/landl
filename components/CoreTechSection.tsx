import { coreTech } from '@/lib/config';

export default function CoreTechSection() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section label */}
          <p className="text-sm font-bold tracking-widest text-gold-accent uppercase">
            Core Technology
          </p>
          
          {/* Section title */}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Industrial Framework
          </h2>
          
          {/* Section description */}
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Powered by cutting-edge mods and enterprise-grade infrastructure.
          </p>
        </div>

        {/* Three-column grid */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {/* Automation Column */}
          <article className="relative overflow-hidden rounded-lg border border-border/50 bg-muted/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold-accent/50">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 text-xl">
                {coreTech.automation.icon}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {coreTech.automation.title}
              </h3>
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground">
              {coreTech.automation.description}
            </p>
            
            <ul className="mt-4 space-y-2">
              {coreTech.automation.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-accent"></span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Aerospace Column */}
          <article className="relative overflow-hidden rounded-lg border border-border/50 bg-muted/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold-accent/50">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 text-xl">
                {coreTech.aerospace.icon}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {coreTech.aerospace.title}
              </h3>
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground">
              {coreTech.aerospace.description}
            </p>
            
            <ul className="mt-4 space-y-2">
              {coreTech.aerospace.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-accent"></span>
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Infrastructure Column */}
          <article className="relative overflow-hidden rounded-lg border border-border/50 bg-muted/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold-accent/50">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 text-xl">
                {coreTech.infrastructure.icon}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {coreTech.infrastructure.title}
              </h3>
            </div>
            
            <p className="mt-4 text-sm text-muted-foreground">
              {coreTech.infrastructure.description}
            </p>
            
            <ul className="mt-4 space-y-2">
              {coreTech.infrastructure.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-accent"></span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
