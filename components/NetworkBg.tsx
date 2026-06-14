'use client';

import { useEffect, useRef } from 'react';

/**
 * Ambient network / current background.
 * Drifting node-graph with glowing pulses of "current" flowing along edges.
 * Monochrome, performance-capped, motion- and visibility-aware.
 */
export default function NetworkBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, DPR = 1;
    type Node = { x: number; y: number; vx: number; vy: number };
    type Pulse = { a: number; b: number; t: number; speed: number; life: number };
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK = 158;
    const LINK2 = LINK * LINK;

    function initNodes() {
      const count = Math.max(18, Math.min(Math.round((W * H) / 24000), 88));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2 });
      }
      pulses = [];
    }

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas!.width = Math.round(W * DPR);
      canvas!.height = Math.round(H * DPR);
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
      initNodes();
    }

    function neighbors(i: number) {
      const out: number[] = [];
      const a = nodes[i];
      for (let j = 0; j < nodes.length; j++) {
        if (j === i) continue;
        const dx = a.x - nodes[j].x, dy = a.y - nodes[j].y;
        if (dx * dx + dy * dy < LINK2) out.push(j);
      }
      return out;
    }

    function spawnPulse() {
      if (nodes.length < 2) return;
      const a = (Math.random() * nodes.length) | 0;
      const nb = neighbors(a);
      if (!nb.length) return;
      pulses.push({ a, b: nb[(Math.random() * nb.length) | 0], t: Math.random() * 0.15, speed: 0.005 + Math.random() * 0.009, life: 4 + ((Math.random() * 5) | 0) });
    }

    function frame() {
      ctx!.clearRect(0, 0, W, H);
      for (let k = 0; k < nodes.length; k++) {
        const n = nodes[k];
        n.x += n.vx; n.y += n.vy;
        if (n.x < -20) n.x = W + 20; else if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20; else if (n.y > H + 20) n.y = -20;
      }
      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const ni = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nj = nodes[j];
          const dx = ni.x - nj.x, dy = ni.y - nj.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK2) {
            const d = Math.sqrt(d2);
            const fade = 1 - d / LINK;
            const mx = (ni.x + nj.x) * 0.5 - mouse.x;
            const my = (ni.y + nj.y) * 0.5 - mouse.y;
            const near = mx * mx + my * my < 34000 ? 0.14 : 0;
            ctx!.strokeStyle = 'rgba(255,255,255,' + (fade * 0.085 + near).toFixed(3) + ')';
            ctx!.beginPath(); ctx!.moveTo(ni.x, ni.y); ctx!.lineTo(nj.x, nj.y); ctx!.stroke();
          }
        }
      }
      ctx!.fillStyle = 'rgba(255,255,255,0.20)';
      for (let k = 0; k < nodes.length; k++) {
        ctx!.beginPath(); ctx!.arc(nodes[k].x, nodes[k].y, 1.3, 0, 6.2832); ctx!.fill();
      }
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pu = pulses[p];
        const A = nodes[pu.a], B = nodes[pu.b];
        if (!A || !B) { pulses.splice(p, 1); continue; }
        pu.t += pu.speed;
        if (pu.t >= 1) {
          if (--pu.life <= 0) { pulses.splice(p, 1); continue; }
          const nb = neighbors(pu.b);
          if (!nb.length) { pulses.splice(p, 1); continue; }
          pu.a = pu.b; pu.b = nb[(Math.random() * nb.length) | 0]; pu.t = 0; continue;
        }
        const x = A.x + (B.x - A.x) * pu.t;
        const y = A.y + (B.y - A.y) * pu.t;
        const tx = A.x + (B.x - A.x) * Math.max(0, pu.t - 0.12);
        const ty = A.y + (B.y - A.y) * Math.max(0, pu.t - 0.12);
        const grad = ctx!.createLinearGradient(tx, ty, x, y);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(1, 'rgba(255,255,255,0.55)');
        ctx!.strokeStyle = grad; ctx!.lineWidth = 1.4;
        ctx!.beginPath(); ctx!.moveTo(tx, ty); ctx!.lineTo(x, y); ctx!.stroke();
        ctx!.save();
        ctx!.shadowColor = 'rgba(255,255,255,0.9)';
        ctx!.shadowBlur = 8;
        ctx!.fillStyle = 'rgba(255,255,255,0.92)';
        ctx!.beginPath(); ctx!.arc(x, y, 1.7, 0, 6.2832); ctx!.fill();
        ctx!.restore();
      }
      const want = Math.min(15, Math.max(4, nodes.length / 5));
      if (pulses.length < want && Math.random() < 0.35) spawnPulse();
    }

    let raf = 0;
    const loop = () => { frame(); raf = requestAnimationFrame(loop); };
    const start = () => { if (!raf) loop(); };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onResize = () => resize();
    const onVis = () => { if (document.hidden) stop(); else if (!reduce) start(); };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVis);

    resize();
    if (reduce) { for (let i = 0; i < 18; i++) spawnPulse(); frame(); }
    else start();

    return () => {
      stop();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="netbg"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
}
