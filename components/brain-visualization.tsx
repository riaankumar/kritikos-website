"use client"

import { useEffect, useRef } from "react"

/* ── Anatomical brain outline path (side profile, fits ~620x560 canvas) ── */
const BRAIN_PATH = [
  [310, 45], [265, 48], [225, 58], [188, 78], [158, 105],
  [135, 140], [118, 178], [108, 220],
  [105, 260], [108, 295], [115, 325], [128, 355],
  [138, 375], [145, 400], [148, 425], [145, 448],
  [155, 465], [175, 480], [200, 490], [235, 498],
  [270, 502], [310, 505], [350, 502],
  [385, 498], [420, 490], [445, 480], [465, 465],
  [475, 448], [472, 425], [475, 400], [482, 375],
  [492, 355], [505, 325], [512, 295], [515, 260],
  [512, 220], [502, 178], [485, 140], [462, 105],
  [432, 78], [395, 58], [355, 48], [310, 45],
]

const CENTRAL_SULCUS = [
  [310, 50], [305, 85], [298, 120], [295, 160],
  [300, 200], [310, 240], [318, 270],
]

const LATERAL_SULCUS_L = [
  [145, 310], [175, 295], [210, 285], [250, 280],
  [285, 280], [310, 278],
]

const LATERAL_SULCUS_R = [
  [475, 310], [445, 295], [410, 285], [370, 280],
  [335, 280], [310, 278],
]

const NODES = [
  { x: 220, y: 110, r: 5 }, { x: 310, y: 80, r: 6 }, { x: 400, y: 110, r: 5 },
  { x: 180, y: 170, r: 4 }, { x: 270, y: 150, r: 5 }, { x: 350, y: 150, r: 5 },
  { x: 440, y: 170, r: 4 }, { x: 230, y: 220, r: 6 }, { x: 310, y: 200, r: 7 },
  { x: 390, y: 220, r: 6 }, { x: 145, y: 290, r: 4 }, { x: 200, y: 280, r: 5 },
  { x: 310, y: 270, r: 5 }, { x: 420, y: 280, r: 5 }, { x: 475, y: 290, r: 4 },
  { x: 230, y: 340, r: 5 }, { x: 310, y: 330, r: 6 }, { x: 390, y: 340, r: 5 },
  { x: 260, y: 400, r: 4 }, { x: 310, y: 410, r: 5 }, { x: 360, y: 400, r: 4 },
  { x: 310, y: 470, r: 4 }, { x: 250, y: 190, r: 3 }, { x: 370, y: 190, r: 3 },
  { x: 170, y: 240, r: 3 }, { x: 450, y: 240, r: 3 }, { x: 200, y: 360, r: 3 },
  { x: 420, y: 360, r: 3 },
]

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [0, 4], [2, 5], [1, 4], [1, 5], [4, 5],
  [0, 3], [2, 6], [3, 22], [6, 23],
  [4, 7], [4, 8], [5, 8], [5, 9], [22, 7], [23, 9],
  [3, 7], [6, 9],
  [7, 8], [8, 9],
  [7, 11], [8, 12], [9, 13], [24, 10], [25, 14],
  [3, 24], [6, 25],
  [10, 11], [11, 12], [12, 13], [13, 14],
  [11, 15], [12, 16], [13, 17],
  [10, 26], [14, 27],
  [15, 16], [16, 17], [26, 15], [27, 17],
  [15, 18], [16, 19], [17, 20],
  [18, 19], [19, 20],
  [19, 21], [18, 21], [20, 21],
  [26, 18], [27, 20],
]

function drawSmoothPath(
  ctx: CanvasRenderingContext2D,
  pts: number[][],
  closed = false,
) {
  if (pts.length < 2) return
  ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1])
  for (let i = 1; i < pts.length - 1; i++) {
    const xc = (pts[i][0] + pts[i + 1][0]) / 2
    const yc = (pts[i][1] + pts[i + 1][1]) / 2
    ctx.quadraticCurveTo(pts[i][0], pts[i][1], xc, yc)
  }
  const last = pts[pts.length - 1]
  if (closed) {
    ctx.quadraticCurveTo(last[0], last[1], pts[0][0], pts[0][1])
    ctx.closePath()
  } else {
    ctx.lineTo(last[0], last[1])
  }
}

export default function BrainVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(0)
  const signalsRef = useRef<
    { edge: number; t: number; speed: number; reverse: boolean }[]
  >([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    const W = 620
    const H = 560

    canvas.width = W * DPR
    canvas.height = H * DPR
    canvas.style.width = `${W}px`
    canvas.style.height = `${H}px`
    ctx.scale(DPR, DPR)

    function spawnSignal() {
      const edge = Math.floor(Math.random() * EDGES.length)
      signalsRef.current.push({
        edge,
        t: 0,
        speed: 0.003 + Math.random() * 0.005,
        reverse: Math.random() > 0.5,
      })
    }
    for (let i = 0; i < 10; i++) spawnSignal()

    let time = 0

    function draw() {
      if (!ctx) return
      ctx.clearRect(0, 0, W, H)
      time += 0.008

      /* ── Brain outline glow (outer) ── */
      ctx.save()
      ctx.shadowColor = "rgba(67, 97, 238, 0.25)"
      ctx.shadowBlur = 40
      drawSmoothPath(ctx, BRAIN_PATH, true)
      ctx.strokeStyle = "rgba(67, 97, 238, 0.18)"
      ctx.lineWidth = 2.5
      ctx.stroke()
      ctx.restore()

      /* ── Brain outline (crisp inner line) ── */
      drawSmoothPath(ctx, BRAIN_PATH, true)
      ctx.strokeStyle = "rgba(67, 97, 238, 0.3)"
      ctx.lineWidth = 1.5
      ctx.stroke()

      /* ── Sulcus lines (brain folds) ── */
      const sulcusAlpha = 0.08 + Math.sin(time) * 0.03
      ctx.strokeStyle = `rgba(67, 97, 238, ${sulcusAlpha})`
      ctx.lineWidth = 0.8
      drawSmoothPath(ctx, CENTRAL_SULCUS, false)
      ctx.stroke()
      drawSmoothPath(ctx, LATERAL_SULCUS_L, false)
      ctx.stroke()
      drawSmoothPath(ctx, LATERAL_SULCUS_R, false)
      ctx.stroke()

      /* ── Neural edges ── */
      for (const [a, b] of EDGES) {
        ctx.beginPath()
        ctx.moveTo(NODES[a].x, NODES[a].y)
        ctx.lineTo(NODES[b].x, NODES[b].y)
        ctx.strokeStyle = "rgba(67, 97, 238, 0.08)"
        ctx.lineWidth = 0.8
        ctx.stroke()
      }

      /* ── Nodes with breathing pulse ── */
      for (let i = 0; i < NODES.length; i++) {
        const node = NODES[i]
        const pulse = 1 + Math.sin(time * 2 + i * 0.7) * 0.15

        // Outer glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, (node.r + 14) * pulse, 0, Math.PI * 2)
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, (node.r + 14) * pulse,
        )
        glow.addColorStop(0, "rgba(67, 97, 238, 0.18)")
        glow.addColorStop(1, "rgba(67, 97, 238, 0)")
        ctx.fillStyle = glow
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r * pulse, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(67, 97, 238, 0.5)"
        ctx.fill()
      }

      /* ── Travelling signals ── */
      const signals = signalsRef.current
      for (let i = signals.length - 1; i >= 0; i--) {
        const s = signals[i]
        s.t += s.speed
        if (s.t >= 1) {
          signals.splice(i, 1)
          spawnSignal()
          continue
        }
        const [a, b] = EDGES[s.edge]
        const from = s.reverse ? b : a
        const to = s.reverse ? a : b
        const x = NODES[from].x + (NODES[to].x - NODES[from].x) * s.t
        const y = NODES[from].y + (NODES[to].y - NODES[from].y) * s.t

        // Signal glow
        ctx.beginPath()
        ctx.arc(x, y, 18, 0, Math.PI * 2)
        const sigGlow = ctx.createRadialGradient(x, y, 0, x, y, 18)
        sigGlow.addColorStop(0, "rgba(67, 97, 238, 0.35)")
        sigGlow.addColorStop(1, "rgba(67, 97, 238, 0)")
        ctx.fillStyle = sigGlow
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(x, y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(107, 131, 245, 0.9)"
        ctx.fill()

        // Trail
        const trailT = Math.max(0, s.t - 0.1)
        const tx = NODES[from].x + (NODES[to].x - NODES[from].x) * trailT
        const ty = NODES[from].y + (NODES[to].y - NODES[from].y) * trailT
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(x, y)
        ctx.strokeStyle = "rgba(67, 97, 238, 0.25)"
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(frameRef.current)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-[620px] h-[560px]"
      style={{ imageRendering: "auto" }}
      aria-hidden="true"
    />
  )
}
