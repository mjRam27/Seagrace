'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Global imperative behaviors that match the original site:
 * nav scroll state, mobile menu, scroll reveals, animated counters,
 * hero spotlight, card spotlight, and magnetic buttons.
 * Runs after hydration and re-binds whenever the route changes.
 */
export default function Interactions() {
  const pathname = usePathname();
  useEffect(() => {
    const $ = <T extends Element>(s: string, r: ParentNode = document) => r.querySelector<T>(s);
    const $$ = <T extends Element>(s: string, r: ParentNode = document) => Array.from(r.querySelectorAll<T>(s));
    const cleanups: Array<() => void> = [];

    // nav scroll state
    const nav = $<HTMLElement>('.nav');
    if (nav && !nav.classList.contains('scrolled')) {
      const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    // mobile menu
    const toggle = $<HTMLButtonElement>('.nav-toggle');
    const menu = $<HTMLElement>('.mobile-menu');
    if (toggle && menu) {
      const close = () => { toggle.classList.remove('open'); menu.classList.remove('open'); document.body.classList.remove('no-scroll'); };
      const onToggle = () => {
        const open = menu.classList.toggle('open');
        toggle.classList.toggle('open', open);
        document.body.classList.toggle('no-scroll', open);
      };
      toggle.addEventListener('click', onToggle);
      const links = $$('a', menu);
      links.forEach((a) => a.addEventListener('click', close));
      cleanups.push(() => { toggle.removeEventListener('click', onToggle); links.forEach((a) => a.removeEventListener('click', close)); });
    }

    // reveal on scroll
    const reveals = $$<HTMLElement>('[data-reveal], .reveal-clip');
    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io!.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach((el) => io!.observe(el));
      cleanups.push(() => io!.disconnect());
    } else {
      reveals.forEach((el) => el.classList.add('in'));
    }

    // hero spotlight + rings parallax
    const spot = $<HTMLElement>('.hero__spot');
    const rings = $<HTMLElement>('.hero__rings');
    const onHeroMove = (e: MouseEvent) => {
      if (spot) { spot.style.setProperty('--mx', e.clientX + 'px'); spot.style.setProperty('--my', e.clientY + 'px'); }
      if (rings) {
        const x = e.clientX / window.innerWidth - 0.5, y = e.clientY / window.innerHeight - 0.5;
        rings.style.transform = `translate(${x * 22}px, ${y * 22}px)`;
      }
    };
    if (spot || rings) {
      window.addEventListener('mousemove', onHeroMove, { passive: true });
      cleanups.push(() => window.removeEventListener('mousemove', onHeroMove));
    }

    // card spotlight
    const cards = $$<HTMLElement>('.svc, .quote');
    const cardHandlers: Array<[HTMLElement, (e: MouseEvent) => void]> = [];
    cards.forEach((card) => {
      const h = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', e.clientX - r.left + 'px');
        card.style.setProperty('--my', e.clientY - r.top + 'px');
      };
      card.addEventListener('mousemove', h);
      cardHandlers.push([card, h]);
    });
    cleanups.push(() => cardHandlers.forEach(([c, h]) => c.removeEventListener('mousemove', h)));

    // animated counters
    const counters = $$<HTMLElement>('[data-count]');
    if (counters.length && 'IntersectionObserver' in window) {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const raw = el.dataset.count || '0';
          const target = parseFloat(raw);
          const dec = (raw.split('.')[1] || '').length;
          const dur = 1500, t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = (target * eased).toFixed(dec);
            if (p < 1) requestAnimationFrame(tick); else el.textContent = target.toFixed(dec);
          };
          requestAnimationFrame(tick);
          cio.unobserve(el);
        });
      }, { threshold: 0.6 });
      counters.forEach((c) => cio.observe(c));
      cleanups.push(() => cio.disconnect());
    }

    // magnetic buttons
    const mags = $$<HTMLElement>('[data-magnetic]');
    const magHandlers: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = [];
    mags.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
      };
      const leave = () => { btn.style.transform = ''; };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      magHandlers.push([btn, move, leave]);
    });
    cleanups.push(() => magHandlers.forEach(([b, m, l]) => { b.removeEventListener('mousemove', m); b.removeEventListener('mouseleave', l); }));

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
