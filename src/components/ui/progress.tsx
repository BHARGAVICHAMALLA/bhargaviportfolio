import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-gradient-to-r from-primary via-primary/90 to-primary/80 transition-all duration-[2000ms] ease-out shadow-sm relative overflow-hidden"
      style={{ 
        transform: `translateX(-${100 - (value || 0)}%)`,
        background: `linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary)/.9) 50%, hsl(var(--primary)/.8) 100%)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
    </ProgressPrimitive.Indicator>
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
