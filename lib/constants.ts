export type IconName = "whatsapp" | "camera" | "instagram" | "facebook";

export interface LinkItem {
  id: string;
  href: string;
  title: string;
  subtitle: string;
  icon: IconName;
  variant: "filled" | "outline";
}

const INSTAGRAM_URL = "https://www.instagram.com/julianosantosfotografia/";

// TODO: trocar pela URL da Landing Page quando estiver no ar.
// Enquanto isso, o botão Portfólio leva ao Instagram.
const PORTFOLIO_URL = INSTAGRAM_URL;

export const PROFILE = {
  name: "Juliano Santos",
  subtitle: "Fotografia e Videografia",
  tagline: "Eternizando seus melhores momentos.",
  avatarSrc: "/Juliano.jpg",
  avatarAlt: "Foto de Juliano Santos, fotógrafo",
  avatarFallback: "JS",
} as const;

export const BADGE_TEXT = "Agendas 2027 Abertas";

export const LINKS: LinkItem[] = [
  {
    id: "whatsapp",
    href: "https://api.whatsapp.com/message/F3MWONSYFYEIH1?autoload=1&app_absent=0",
    title: "Solicite um Orçamento",
    subtitle: "Atendimento direto via WhatsApp",
    icon: "whatsapp",
    variant: "filled",
  },
  {
    id: "portfolio",
    href: PORTFOLIO_URL,
    title: "Portfólio",
    subtitle: "Veja nossos melhores trabalhos",
    icon: "camera",
    variant: "outline",
  },
  {
    id: "instagram",
    href: INSTAGRAM_URL,
    title: "Instagram",
    subtitle: "@julianosantosfotografia",
    icon: "instagram",
    variant: "outline",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/julianosantosfotografia/",
    title: "Facebook",
    subtitle: "Juliano Santos Fotografia",
    icon: "facebook",
    variant: "outline",
  },
];

export const FOOTER = {
  text: "© 2026 Juliano Santos Fotografia",
} as const;
