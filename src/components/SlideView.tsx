"use client";

import { useEffect, useRef, useState } from "react";
import type { Slide } from "@/lib/types";
import { BlockList } from "./Blocks";
import { Icon } from "./Icon";

export const SLIDE_W = 1600;
export const SLIDE_H = 900;

/** Renders one slide on a fixed 1600×900 canvas. */
export function SlideView({
  slide,
  index,
  total,
  revealed,
  still,
}: {
  slide: Slide;
  index: number;
  total: number;
  revealed: boolean;
  still?: boolean;
}) {
  const variant = slide.variant ?? "default";
  const ctx = { revealed, still };

  if (variant === "title" || variant === "section" || variant === "end") {
    return (
      <article className={`slide slide-${variant}`} data-slide={slide.id}>
        <div className="hero">
          {slide.icon && (
            <div className="glass hero-icon">
              <Icon name={slide.icon} size={variant === "section" ? 64 : 72} />
            </div>
          )}
          {slide.kicker && <p className="kicker">{slide.kicker}</p>}
          <h1>{slide.title}</h1>
          {slide.subtitle && <p className="subtitle">{slide.subtitle}</p>}
          {variant === "title" && (
            <div className="hero-meta">
              <span className="glass pill">Part 1 · AI concepts</span>
              <span className="glass pill">Part 2 · AI on Azure</span>
              <span className="glass pill">6 sessions · 14 modules</span>
            </div>
          )}
        </div>
        <SlideFooter slide={slide} index={index} total={total} />
      </article>
    );
  }

  return (
    <article className="slide slide-default" data-slide={slide.id}>
      <header className="slide-head">
        {slide.kicker && <p className="kicker">{slide.kicker}</p>}
        <h2>{slide.title}</h2>
        {slide.subtitle && <p className="subtitle">{slide.subtitle}</p>}
      </header>
      <div className="slide-body">{slide.blocks && <BlockList blocks={slide.blocks} ctx={ctx} />}</div>
      <SlideFooter slide={slide} index={index} total={total} />
    </article>
  );
}

function SlideFooter({ slide, index, total }: { slide: Slide; index: number; total: number }) {
  return (
    <footer className="slide-foot">
      <span>AI-901 · {slide.section}</span>
      <span>
        {index + 1} / {total}
      </span>
    </footer>
  );
}

/** Scales a 1600×900 slide to fit its container while keeping the aspect ratio. */
export function SlideFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setScale(Math.min(width / SLIDE_W, height / SLIDE_H));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className={`slide-frame ${className}`}>
      <div
        className="slide-canvas"
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          transform: `translate(-50%, -50%) scale(${scale})`,
          visibility: scale ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
