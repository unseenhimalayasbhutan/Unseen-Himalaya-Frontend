export type TourPriceGroup = {
  one: number;
  twoThree: number;
  fourSix: number;
};

export const b2cUsdTourPrices: Record<string, TourPriceGroup> = {
  "UH-NAC-001": { one: 949, twoThree: 754, fourSix: 590 },
  "UH-NAC-002": { one: 967, twoThree: 775, fourSix: 610 },
  "UH-NAC-003": { one: 1322, twoThree: 1066, fourSix: 842 },
  "UH-NAC-004": { one: 1306, twoThree: 1047, fourSix: 823 },
  "UH-NAC-005": { one: 1661, twoThree: 1337, fourSix: 1055 },
  "UH-NAC-006": { one: 2016, twoThree: 1627, fourSix: 1287 },
  "UH-NAC-007": { one: 1999, twoThree: 1608, fourSix: 1269 },
  "UH-NAC-008": { one: 2360, twoThree: 1904, fourSix: 1505 },
  "UH-NAC-009": { one: 2721, twoThree: 2199, fourSix: 1740 },
  "UH-NAC-010": { one: 2715, twoThree: 2194, fourSix: 1737 },
  "UH-LET-001": { one: 1306, twoThree: 1047, fourSix: 823 },
  "UH-LET-002": { one: 1306, twoThree: 1047, fourSix: 823 },
  "UH-LET-003": { one: 1306, twoThree: 1047, fourSix: 823 },
  "UH-LET-004": { one: 1661, twoThree: 1337, fourSix: 1055 },
  "UH-LET-005": { one: 1661, twoThree: 1337, fourSix: 1055 },
  "UH-LET-006": { one: 1999, twoThree: 1608, fourSix: 1269 },
  "UH-LET-007": { one: 2360, twoThree: 1904, fourSix: 1505 },
  "UH-LET-008": { one: 2354, twoThree: 1899, fourSix: 1501 },
  "UH-LET-009": { one: 2721, twoThree: 2199, fourSix: 1740 },
  "UH-LET-010": { one: 2715, twoThree: 2194, fourSix: 1737 },
  "UH-FT-001": { one: 1288, twoThree: 1026, fourSix: 804 },
  "UH-FT-002": { one: 1663, twoThree: 1339, fourSix: 1057 },
  "UH-FT-003": { one: 1659, twoThree: 1335, fourSix: 1054 },
  "UH-FT-004": { one: 1671, twoThree: 1345, fourSix: 1061 },
  "UH-FT-005": { one: 1644, twoThree: 1318, fourSix: 1037 },
  "UH-FT-006": { one: 2382, twoThree: 1928, fourSix: 1526 },
  "UH-FT-007": { one: 3033, twoThree: 2444, fourSix: 1930 },
  "UH-FT-008": { one: 3013, twoThree: 2421, fourSix: 1909 },
  "UH-FT-009": { one: 4102, twoThree: 3312, fourSix: 2619 },
};

export function getB2cUsdPrice(tourCode?: string) {
  if (!tourCode) return undefined;

  return b2cUsdTourPrices[tourCode];
}

export function formatUsd(value: number) {
  return `US $${value.toLocaleString("en-US")}`;
}
