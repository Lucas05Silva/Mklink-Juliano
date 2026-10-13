import type { ComponentType } from "react";
import type { IconName } from "@/lib/constants";

interface IconProps {
  size?: number;
  className?: string;
}

const svgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
} as const;

export function WhatsAppIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M17.6 6.3A8.3 8.3 0 0 0 4.8 17.4L3 21l3.7-1.7A8.3 8.3 0 0 0 21 12a8.2 8.2 0 0 0-3.4-5.7z" />
      <path d="M15.6 13.9c-.3.8-1.6 1.5-2.2 1.6-.6 0-1-.2-1.8-.5a12.6 12.6 0 0 1-3.6-3.2c-.5-.7-1.1-1.9-.5-2.8.2-.3.5-.5.7-.5h.5c.2 0 .4 0 .5.4l.8 1.9c.1.2 0 .4-.1.5l-.4.5c-.1.2-.3.2-.1.5.5.8 1.1 1.4 1.8 1.9.3.2.5.1.7-.1l.6-.8c.2-.3.3-.2.5-.1l1.6.8c.2.1.4.2.5.4 0 .2 0 .7-.3 1.3z" />
    </svg>
  );
}

export function CameraIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function FacebookIcon({ size = 20, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 14, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} {...svgProps}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export const iconMap: Record<IconName, ComponentType<IconProps>> = {
  whatsapp: WhatsAppIcon,
  camera: CameraIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
};
