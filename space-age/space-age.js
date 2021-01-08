const EARTH_YEARS_IN_SECONDS = 31557600;

const PLANET_YEARS = {
  earth: 1,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

export const age = (planet, time) => {
  const planetTime =
    planet in PLANET_YEARS
      ? time / (EARTH_YEARS_IN_SECONDS * PLANET_YEARS[planet])
      : 0;

  return Number(planetTime.toFixed(2));
};
