"use client";

import { motion, MotionConfig } from "framer-motion";
import { LINKS } from "@/lib/constants";
import { DELAYS, fadeIn } from "@/lib/animations";
import { BadgePill } from "./badge-pill";
import { Footer } from "./footer";
import { LinkButton } from "./link-button";
import { ProfileAvatar } from "./profile-avatar";
import { ProfileInfo } from "./profile-info";

export function MkLinkCard() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="flex min-h-dvh items-center justify-center bg-brand-bg bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,169,110,0.03)_0%,transparent_70%)] px-4 py-6">
        <div className="w-full max-w-[420px]">
          <ProfileAvatar />

          <motion.div
            variants={fadeIn}
            custom={DELAYS.card}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden rounded-card border-[0.5px] border-white/[0.06] bg-brand-card shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-linear-to-b from-brand-gold/[0.04] to-transparent"
            />

            <div className="relative px-5 pb-8 pt-14 min-[400px]:px-7">
              <ProfileInfo />
              <BadgePill />

              <ul className="flex flex-col gap-3" aria-label="Links">
                {LINKS.map((link, i) => (
                  <LinkButton key={link.id} link={link} index={i} />
                ))}
              </ul>
            </div>
          </motion.div>

          <Footer />
        </div>
      </main>
    </MotionConfig>
  );
}
