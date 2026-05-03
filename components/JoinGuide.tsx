import { discordLink } from '@/lib/config';

export default function JoinGuide() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -z-10 h-full w-full max-w-4xl -translate-x-1/2 bg-gradient-to-b from-gold-accent/10 via-transparent to-transparent"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Section label */}
          <p className="text-sm font-bold tracking-widest text-gold-accent uppercase">
            Quick Start
          </p>
          
          {/* Section title */}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Join Guide
          </h2>
          
          {/* Section description */}
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Follow these simple steps to become part of our technical Minecraft community.
          </p>
        </div>

        {/* Numbered list */}
        <div className="mt-12 sm:mt-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold-accent via-border to-transparent sm:left-1/2"></div>

            <ol className="relative space-y-8 sm:space-y-12">
              {[1, 2, 3].map((num, index) => (
                <li key={index} className="relative pl-16 sm:pl-0 lg:pl-16">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-muted border-2 border-gold-accent sm:left-1/2 sm:-translate-x-1/2">
                    <span className="text-xl font-bold text-gold-accent">
                      {num}
                    </span>
                  </div>
                  
                  <div className="mt-1 rounded-lg border border-border/50 bg-muted/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold-accent/50 sm:ml-0 sm:mt-0 sm:pl-8">
                    <p className="text-lg text-foreground">
                      {index === 0 && 'Download the modpack profile from CurseForge or Modrinth.'}
                      {index === 1 && 'Join our Discord community server.'}
                      {index === 2 && 'Post your IGN (In-Game Name) in the #whitelist channel to get access.'}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <a
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gold-accent/50 bg-gold-accent/10 px-8 py-3 text-gold-accent transition-all duration-300 hover:bg-gold-accent/20 hover:text-gold-accent"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z" />
            </svg>
            Join Discord
          </a>
        </div>
      </div>
    </section>
  );
}

