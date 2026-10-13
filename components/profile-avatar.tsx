"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROFILE } from "@/lib/constants";
import { DELAYS, fadeInScale } from "@/lib/animations";

export function ProfileAvatar() {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      variants={fadeInScale}
      custom={DELAYS.avatar}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto -mb-[42px] w-fit"
    >
      <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border-2 border-brand-gold/30 shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(201,169,110,0.1)]">
        <div className="h-[76px] w-[76px] overflow-hidden rounded-full bg-brand-card">
          {imgError ? (
            <div
              role="img"
              aria-label={PROFILE.avatarAlt}
              className="flex h-full w-full items-center justify-center"
            >
              <span className="font-display text-2xl font-light text-brand-gold">
                {PROFILE.avatarFallback}
              </span>
            </div>
          ) : (
            <Image
              src={PROFILE.avatarSrc}
              alt={PROFILE.avatarAlt}
              width={76}
              height={76}
              sizes="76px"
              preload
              className="h-full w-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
