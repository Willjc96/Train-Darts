import { CENTER, DARTBOARD_NUMBERS, radii } from "./constants";
import { colours, Segment } from "./Dartboard.styles";

export function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angle: number,
) {
  const radians = (angle - 90) * (Math.PI / 180);

  return {
    x: cx + radius * Math.cos(radians),
    y: cy + radius * Math.sin(radians),
  };
}

function segmentColor(index: number, ring: "single" | "double" | "triple") {
  if (ring === "single") {
    return index % 2 === 0 ? colours.railBlack : colours.cream;
  }

  return index % 2 === 0 ? colours.signalRed : colours.brass;
}

function createSegmentPath(
  innerRadius: number,
  outerRadius: number,
  startAngle: number,
  endAngle: number,
) {
  const p1 = polarToCartesian(CENTER, CENTER, outerRadius, startAngle);

  const p2 = polarToCartesian(CENTER, CENTER, outerRadius, endAngle);

  const p3 = polarToCartesian(CENTER, CENTER, innerRadius, endAngle);

  const p4 = polarToCartesian(CENTER, CENTER, innerRadius, startAngle);

  return `
    M ${p1.x} ${p1.y}
    A ${outerRadius} ${outerRadius} 0 0 1 ${p2.x} ${p2.y}
    L ${p3.x} ${p3.y}
    A ${innerRadius} ${innerRadius} 0 0 0 ${p4.x} ${p4.y}
    Z
  `;
}

export const DartboardOuterRing = () => {
  const segments: React.ReactNode[] = [];

  DARTBOARD_NUMBERS.forEach((value, index) => {
    const startAngle = index * 18 - 9;
    const endAngle = startAngle + 18;

    const double = createSegmentPath(
      radii.doubleInner,
      radii.doubleOuter,
      startAngle,
      endAngle,
    );

    segments.push(
      <Segment
        key={`double-${value}`}
        d={double}
        fill={segmentColor(index, "double")}
        stroke="#222"
        onClick={(event) => {
          const svg = event.currentTarget.ownerSVGElement;

          if (!svg) return;

          const point = svg.createSVGPoint();

          point.x = event.clientX;
          point.y = event.clientY;
        }}
      />,
    );
  });

  return <>{segments}</>;
};
