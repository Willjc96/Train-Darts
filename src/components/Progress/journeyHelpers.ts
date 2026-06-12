import { JOURNEY_STATIONS } from "./constants";

export const getJourneyProgress = (total: number) => {
  const stations = JOURNEY_STATIONS;

  const currentIndex = stations.findLastIndex(
    (station) => total >= station.score,
  );

  const currentStation = stations[currentIndex];
  const nextStation = stations[Math.min(currentIndex + 1, stations.length - 1)];

  const localProgress =
    currentStation === nextStation
      ? 100
      : ((total - currentStation.score) /
          (nextStation.score - currentStation.score)) *
        100;

  const overallProgress = (total / stations[stations.length - 1].score) * 100;

  return {
    currentIndex,
    currentStation,
    nextStation,
    localProgress,
    overallProgress,
  };
};
