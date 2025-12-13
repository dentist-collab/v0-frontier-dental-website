import React from 'react';
import { motion } from 'framer-motion';
import { Check, LucideIcon } from 'lucide-react';
interface Feature {
  icon: LucideIcon;
  text: string;
}
interface PricingCardProps {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: Feature[];
  popular: boolean;
  isYearly: boolean;
  index: number;
}

// @component: PricingCard
export const PricingCard = ({
  name,
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  popular,
  isYearly,
  index
}: PricingCardProps) => {
  // @return
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8,
    delay: 0.1 * index,
    ease: "easeOut"
  }} className={`relative bg-card border rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${popular ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-border hover:border-primary/50'}`}>
      {popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            <span>Most Popular</span>
          </div>
        </div>}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2 font-sans">
          <span>{name}</span>
        </h3>
        <p className="text-muted-foreground mb-6">
          <span>{description}</span>
        </p>
        
        <div className="mb-6">
          <div className="flex items-baseline justify-center">
            <span className="text-5xl font-bold text-foreground">
              ${isYearly ? Math.floor(yearlyPrice / 12) : monthlyPrice}
            </span>
            <span className="text-muted-foreground ml-2">
              /month
            </span>
          </div>
          {isYearly && <p className="text-sm text-muted-foreground mt-2">
              <span>Billed annually (${yearlyPrice}/year)</span>
            </p>}
        </div>

        <button className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-card border border-border text-foreground hover:bg-accent hover:text-accent-foreground'}`}>
          <span>Get Started</span>
        </button>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-foreground mb-4 font-sans">
          <span>Everything included:</span>
        </h4>
        <ul className="space-y-3">
          {features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <div className="flex items-center space-x-2">
                <feature.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{feature.text}</span>
              </div>
            </li>)}
        </ul>
      </div>
    </motion.div>;
};
