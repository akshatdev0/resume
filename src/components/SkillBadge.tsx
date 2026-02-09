import { Badge } from "@/components/ui/badge";
import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SkillTier } from "@/data/resume-data";

interface SkillBadgeProps {
  tier: SkillTier;
  children: React.ReactNode;
  href?: string;
  skillName?: string;
}

export default function SkillBadge({ tier, children, href, skillName }: SkillBadgeProps) {
  const isMastered = tier === "mastered";
  // Use the skillName prop if provided, otherwise try to extract from children
  const displayName = skillName || (typeof children === 'string' ? children : String(children));
  
  const badgeContent = isMastered ? (
    // neon glow effect
    <span
      className="relative inline-block overflow-hidden rounded-full bg-linear-to-b from-yellow-300 to-orange-400 p-[0.125em]"
      aria-label={`Mastered: ${displayName}`}
    >
      {/* Spinning gradient border effect - gold glow */}
      <div className="absolute inset-0 animate-[spin_4s_linear_infinite] bg-linear-to-t from-transparent via-yellow-200 to-transparent" />
      
      {/* Inner badge content - warm gold gradient */}
      <div className={cn(
        "relative rounded-full bg-linear-to-b from-yellow-200 to-orange-400 px-3 py-1 font-semibold text-orange-950 flex items-center gap-1.5 text-sm shadow-lg",
        href && "cursor-pointer hover:opacity-90 transition-opacity"
      )}>
        <Crown className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
        {children}
      </div>
    </span>
  ) : (
    // Familiar tier - use existing secondary badge styling
    <Badge variant="secondary" className={cn("text-sm px-3 py-1", href && "cursor-pointer hover:opacity-80 transition-opacity")}>
      {children}
    </Badge>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
        aria-label={`View ${displayName} documentation`}
      >
        {badgeContent}
      </a>
    );
  }

  return badgeContent;
}
