interface RadarChartProps {
  labels: string[];
  data: number[]; // 0-100
}

export function RadarChart({ labels, data }: RadarChartProps) {
  const size = 260;
  const center = size / 2;
  const radius = size / 2 - 40;
  const n = labels.length;
  const rings = [0.25, 0.5, 0.75, 1];

  const angleFor = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;

  const point = (i: number, r: number) => {
    const a = angleFor(i);
    return [center + Math.cos(a) * radius * r, center + Math.sin(a) * radius * r] as const;
  };

  const dataPoints = data.map((v, i) => point(i, v / 100));
  const polygon = dataPoints.map((p) => p.join(",")).join(" ");

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full">
      {/* grid rings */}
      {rings.map((r, ri) => (
        <polygon
          key={ri}
          points={labels.map((_, i) => point(i, r).join(",")).join(" ")}
          fill="none"
          stroke="oklch(1 0 0 / 0.08)"
          strokeWidth="1"
        />
      ))}
      {/* spokes */}
      {labels.map((_, i) => {
        const [x, y] = point(i, 1);
        return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="oklch(1 0 0 / 0.08)" strokeWidth="1" />;
      })}
      {/* data polygon */}
      <polygon points={polygon} fill="oklch(0.66 0.2 258 / 0.16)" stroke="var(--color-electric)" strokeWidth="2" />
      {dataPoints.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="var(--color-electric)" stroke="#fff" strokeWidth="1.2" />
      ))}
      {/* labels */}
      {labels.map((label, i) => {
        const [x, y] = point(i, 1.2);
        const anchor = Math.abs(x - center) < 6 ? "middle" : x > center ? "start" : "end";
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fontSize="9"
            fontWeight="600"
            fill="var(--color-slate-400)"
            fontFamily="var(--font-mono)"
          >
            {label}
          </text>
        );
      })}
    </svg>
  );
}
