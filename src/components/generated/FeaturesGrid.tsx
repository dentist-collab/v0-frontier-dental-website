import type React from "react"
import { Brain, Calendar, Zap, Heart, Moon, Sparkles } from "lucide-react"
type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}
const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-6 bg-[#FAFAFA] rounded-[10px] p-6 w-full min-h-[128px]">
      <div className="flex items-center justify-center w-6 h-6 bg-[#E5E5E5] rounded-[6px]">
        <div className="flex items-center justify-center w-5 h-5 bg-white rounded shadow-[0_0.6px_1px_0.6px_rgba(0,0,0,0.08),0_2px_6px_0_rgba(0,0,0,0.06),0_6px_18px_0_rgba(0,0,0,0.02)]">
          {icon}
        </div>
      </div>
      <div className="flex flex-col gap-0 w-full">
        <p className="text-[#262626] text-base leading-6 font-normal">{title}</p>
        <p className="text-[#737373] text-base leading-6 font-normal">{description}</p>
      </div>
    </div>
  )
}
type FeaturesGridProps = {
  className?: string
}

// @component: FeaturesGrid
export const FeaturesGrid = ({ className = "" }: FeaturesGridProps) => {
  const features = [
    {
      icon: <Brain className="w-4 h-4 text-[#262626]" strokeWidth={1.25} />,
      title: "Daily Intentions",
      description: "Start each day by choosing what truly matters",
    },
    {
      icon: <Calendar className="w-4 h-4 text-[#262626]" strokeWidth={1.25} />,
      title: "Energy-Based Planning",
      description: "Plan your work around your energy, not just time",
    },
    {
      icon: <Zap className="w-4 h-4 text-[#262626]" strokeWidth={1.25} />,
      title: "Focus Sessions",
      description: "Deep work blocks with mindful transitions",
    },
    {
      icon: <Heart className="w-4 h-4 text-[#262626]" strokeWidth={1.25} />,
      title: "Balance Reminders",
      description: "Gentle nudges toward rest and reflection",
    },
    {
      icon: <Moon className="w-4 h-4 text-[#262626]" strokeWidth={1.25} />,
      title: "Evening Reflection",
      description: "End your day with gratitude, not exhaustion",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-[#262626]" strokeWidth={1.25} />,
      title: "Calm Interface",
      description: "Uncluttered design that respects your attention",
    },
  ] as any[]

  // @return
  return (
    null
  )
}
