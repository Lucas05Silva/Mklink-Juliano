"use client";

import { motion } from "framer-motion";
import type { LinkItem } from "@/lib/constants";
import { buttonHover, buttonStagger, buttonTap, hoverSpring } from "@/lib/animations";
import { ArrowUpRightIcon, iconMap } from "./icons";

interface LinkButtonProps {
  link: LinkItem;
  index: number;
}

export function LinkButton({ link, index }: LinkButtonProps) {
  const Icon = iconMap[link.icon];
  const isFilled = link.variant === "filled";

  // A entrada fica no <li> e o hover no <a>: assim, ao tirar o mouse,
  // o botão volta com a mola em vez de herdar o delay da entrada.
  return (
    <motion.li variants={buttonStagger} custom={index} initial="hidden" animate="visible">
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${link.title} — ${link.subtitle} (abre em nova aba)`}
        whileHover={buttonHover}
        whileTap={buttonTap}
        transition={hoverSpring}
        className={`group flex cursor-pointer items-center gap-3.5 rounded-button px-[18px] py-4 no-underline transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/60 ${
          isFilled
            ? "bg-brand-gold hover:bg-brand-gold-hover hover:shadow-[0_4px_16px_rgba(201,169,110,0.25)]"
            : "border-[0.5px] border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
        }`}
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            isFilled ? "bg-brand-bg/15" : "bg-brand-gold/10"
          }`}
        >
          <Icon className={isFilled ? "text-brand-bg" : "text-brand-gold"} />
        </span>

        <span className="min-w-0 flex-1">
          <span
            className={`mb-0.5 block font-body text-[15px] font-medium leading-snug ${
              isFilled ? "text-brand-bg" : "text-brand-cream"
            }`}
          >
            {link.title}
          </span>
          <span
            className={`block font-body text-[11px] font-normal leading-snug ${
              isFilled ? "text-brand-bg/75" : "text-brand-cream/55"
            }`}
          >
            {link.subtitle}
          </span>
        </span>

        <ArrowUpRightIcon
          className={`shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
            isFilled ? "text-brand-bg/40" : "text-brand-cream/40"
          }`}
        />
      </motion.a>
    </motion.li>
  );
}
