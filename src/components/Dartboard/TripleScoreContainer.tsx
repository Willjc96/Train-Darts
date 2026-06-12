import type { DartHit } from "./Dartboard";

type Props = {
  darts: DartHit[];
};
export const TripleScoreContainer = ({ darts }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "1rem",
        justifyContent: "center",
      }}
    >
      {Array.from({ length: 3 }).map((_, index) => {
        const dart = darts[index];

        const getValue = (dart: DartHit) => {
          if (dart.label === "MISS") {
            return "0";
          }
          if (!isNaN(Number(dart.label))) {
            return dart.score;
          }
          return `${dart.label} (${dart.score})`;
        };
        return (
          <div
            key={index}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "12px",
              border: "2px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              background: dart ? "#e9ecef" : "#f8f9fa",
              transition: "all 0.2s ease",
            }}
          >
            {dart ? (
              <p style={{ color: "black" }}>{getValue(dart)}</p>
            ) : (
              <h1
                style={{ margin: 0, marginBottom: "10px", marginLeft: "5px" }}
              >
                🎯
              </h1>
            )}
          </div>
        );
      })}
    </div>
  );
};
