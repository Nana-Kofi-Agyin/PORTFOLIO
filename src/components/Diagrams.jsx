const Box = ({ x, y, w = 150, h = 64, title, sub }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="6" fill="var(--surface)" stroke="var(--line)" />
    <text x={x + w / 2} y={y + 27} textAnchor="middle" fill="var(--fg)" fontSize="15" fontWeight="600">
      {title}
    </text>
    <text x={x + w / 2} y={y + 46} textAnchor="middle" fill="var(--muted)" fontSize="13">
      {sub}
    </text>
  </g>
);

const Arrow = ({ x1, y1, x2, y2, label, lx, ly }) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#arrow)" />
    {label && (
      <text x={lx} y={ly} textAnchor="middle" fill="var(--muted)" fontSize="12">
        {label}
      </text>
    )}
  </g>
);

// Generic MERN request flow. The payment box is a placeholder until you confirm the provider.
export const MernDiagram = () => (
  <svg
    viewBox="0 0 640 250"
    role="img"
    aria-label="Data flow: the browser (React and Redux) sends requests to an Express API on Node.js. The API reads and writes MongoDB and calls a payment provider."
    className="w-full h-auto"
  >
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill="var(--muted)" />
      </marker>
    </defs>
    <Box x={10} y={70} title="Browser" sub="React, Redux" />
    <Box x={245} y={70} title="API" sub="Node.js, Express" />
    <Box x={480} y={70} title="Database" sub="MongoDB" />
    <Box x={245} y={176} title="Payments" sub="[provider to confirm]" />
    <Arrow x1={160} y1={102} x2={243} y2={102} label="HTTPS, JSON" lx={201} ly={92} />
    <Arrow x1={395} y1={102} x2={478} y2={102} label="queries" lx={436} ly={92} />
    <Arrow x1={320} y1={134} x2={320} y2={174} />
  </svg>
);
