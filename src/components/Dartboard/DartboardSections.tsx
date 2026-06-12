import { CENTER, DARTBOARD_NUMBERS, radii } from "./constants";
import { type DartHit } from "./Dartboard";
import {
  CircleSegment,
  colours,
  DartMarker,
  NumberLabel,
  Segment,
} from "./Dartboard.styles";

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

type Props = {
  markers: {
    x: number;
    y: number;
  }[];
  setMarkers: React.Dispatch<
    React.SetStateAction<
      {
        x: number;
        y: number;
      }[]
    >
  >;
  onHit: (hit: DartHit) => void;
};

export const DartboardSections = ({ markers, setMarkers, onHit }: Props) => {
  const segments: React.ReactNode[] = [];
  const labels: React.ReactNode[] = [];

  DARTBOARD_NUMBERS.forEach((value, index) => {
    const startAngle = index * 18 - 9;
    const endAngle = startAngle + 18;

    const outerSingle = createSegmentPath(
      radii.tripleOuter,
      radii.doubleInner,
      startAngle,
      endAngle,
    );

    segments.push(
      <Segment
        key={`outer-${value}`}
        d={outerSingle}
        fill={segmentColor(index, "single")}
        stroke="#222"
        onClick={(event) => {
          const svg = event.currentTarget.ownerSVGElement;

          if (!svg) return;

          const point = svg.createSVGPoint();

          point.x = event.clientX;
          point.y = event.clientY;

          const transformed = point.matrixTransform(
            svg.getScreenCTM()?.inverse(),
          );

          setMarkers((prev) => [
            ...prev.slice(-2),
            {
              x: transformed.x,
              y: transformed.y,
            },
          ]);

          onHit({
            label: `${value}`,
            value,
            multiplier: 1,
            score: value * 1,
          });
        }}
      />,
    );

    const triple = createSegmentPath(
      radii.tripleInner,
      radii.tripleOuter,
      startAngle,
      endAngle,
    );

    segments.push(
      <Segment
        key={`triple-${value}`}
        d={triple}
        fill={segmentColor(index, "triple")}
        stroke="#222"
        onClick={(event) => {
          const svg = event.currentTarget.ownerSVGElement;

          if (!svg) return;

          const point = svg.createSVGPoint();

          point.x = event.clientX;
          point.y = event.clientY;

          const transformed = point.matrixTransform(
            svg.getScreenCTM()?.inverse(),
          );

          setMarkers((prev) => [
            ...prev.slice(-2),
            {
              x: transformed.x,
              y: transformed.y,
            },
          ]);

          onHit({
            label: `T${value}`,
            value,
            multiplier: 3,
            score: value * 3,
          });
        }}
      />,
    );

    const innerSingle = createSegmentPath(
      radii.bullOuter,
      radii.tripleInner,
      startAngle,
      endAngle,
    );

    segments.push(
      <Segment
        key={`inner-${value}`}
        d={innerSingle}
        fill={segmentColor(index, "single")}
        stroke="#222"
        onClick={(event) => {
          const svg = event.currentTarget.ownerSVGElement;

          if (!svg) return;

          const point = svg.createSVGPoint();

          point.x = event.clientX;
          point.y = event.clientY;

          const transformed = point.matrixTransform(
            svg.getScreenCTM()?.inverse(),
          );

          setMarkers((prev) => [
            ...prev.slice(-2),
            {
              x: transformed.x,
              y: transformed.y,
            },
          ]);

          onHit({
            label: `${value}`,
            value,
            multiplier: 1,
            score: value * 1,
          });
        }}
      />,
    );

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

          const transformed = point.matrixTransform(
            svg.getScreenCTM()?.inverse(),
          );

          setMarkers((prev) => [
            ...prev.slice(-2),
            {
              x: transformed.x,
              y: transformed.y,
            },
          ]);

          onHit({
            label: `D${value}`,
            value,
            multiplier: 2,
            score: value * 2,
          });
        }}
      />,
    );
    const angle = index * 18;

    // Dartboard Number Label Positions
    const labelPoint = polarToCartesian(CENTER, CENTER, 335, angle);

    labels.push(
      <NumberLabel key={`label-${value}`} x={labelPoint.x} y={labelPoint.y}>
        {value}
      </NumberLabel>,
    );
  });

  return (
    <>
      {segments}
      {labels}

      <CircleSegment
        cx={CENTER}
        cy={CENTER}
        r={radii.bullOuter}
        fill={colours.brass}
        stroke="#222"
        onClick={(event) => {
          const svg = event.currentTarget.ownerSVGElement;

          if (!svg) return;

          const point = svg.createSVGPoint();

          point.x = event.clientX;
          point.y = event.clientY;

          const transformed = point.matrixTransform(
            svg.getScreenCTM()?.inverse(),
          );

          setMarkers((prev) => [
            ...prev.slice(-2),
            {
              x: transformed.x,
              y: transformed.y,
            },
          ]);

          onHit({
            label: `${25}`,
            value: 25,
            multiplier: 1,
            score: 25,
          });
        }}
      />

      <CircleSegment
        cx={CENTER}
        cy={CENTER}
        r={radii.bullInner}
        fill={colours.signalRed}
        stroke="#222"
        onClick={(event) => {
          const svg = event.currentTarget.ownerSVGElement;

          if (!svg) return;

          const point = svg.createSVGPoint();

          point.x = event.clientX;
          point.y = event.clientY;

          const transformed = point.matrixTransform(
            svg.getScreenCTM()?.inverse(),
          );

          setMarkers((prev) => [
            ...prev.slice(-2),
            {
              x: transformed.x,
              y: transformed.y,
            },
          ]);

          onHit({
            label: "Bull",
            value: 25,
            multiplier: 2,
            score: 50,
          });
        }}
      />

      {markers.map((marker, index) => (
        <DartMarker
          key={index}
          cx={marker.x}
          cy={marker.y}
          r={8}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </>
  );
};
