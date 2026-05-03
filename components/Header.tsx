import { siteConfig } from '@/lib/config';

export default function Header() {
  return (
    <header className="relative border-b border-border/50 bg-background/80 backdrop-blur-sm pt-16">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo / Server Name */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted/50 border border-border">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-gold-accent animate-pulse-gold"></div>
            </div>
            
            <div>
              <h1 className="text-xl font-bold tracking-wider text-foreground sm:text-2xl lg:text-3xl">
                {siteConfig.name}
              </h1>
              <p className="text-xs text-muted-foreground tracking-widest sm:text-sm">
                {siteConfig.tagline}
              </p>
            </div>
          </div>

          {/* Status indicator */}
          <div className="hidden items-center gap-2 sm:flex">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <span className="text-sm font-mono text-muted-foreground">ONLINE</span>
          </div>
        </div>
      </div>
    </header>
  );
}
