import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Facebook, Youtube, Music, MessageCircle } from 'lucide-react';
const socialMediaItems = [{
  icon: Twitter,
  label: 'Twitter',
  href: 'https://twitter.com'
}, {
  icon: Instagram,
  label: 'Instagram',
  href: 'https://instagram.com'
}, {
  icon: Facebook,
  label: 'Facebook',
  href: 'https://facebook.com'
}, {
  icon: Youtube,
  label: 'YouTube',
  href: 'https://youtube.com'
}, {
  icon: Music,
  label: 'TikTok',
  href: 'https://tiktok.com'
}, {
  icon: MessageCircle,
  label: 'Discord',
  href: 'https://discord.com'
}] as any[];

// @component: SocialMediaLinks
export const SocialMediaLinks = () => {
  // @return
  return <div className="flex items-center justify-center space-x-6">
      {socialMediaItems.map(item => <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{
      scale: 1.1,
      y: -2
    }} whileTap={{
      scale: 0.95
    }} transition={{
      duration: 0.2
    }} className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer" aria-label={item.label}>
          <item.icon className="w-6 h-6" />
        </motion.a>)}
    </div>;
};
