const fallbackImages = [
  "/Buddha-Dordenma-Statue-by-Alicia-Warner-16.jpg",
  "/Paro Dzong lit twilight  DOT AA Original Bhutan Travels.jpg",
  "/Punakha Dzong Twilight  DOT AA Original Bhutan Travels.jpg",
  "/Phobjikha-valley-by-Alicia-Warner-34.jpg",
  "/Haa by Marcus Westberg33.jpg",
  "/Thimphu Tshechu by Bassem Nimah88.jpg",
  "/By Marcus Westberg Punakha 2023_7.jpg",
  "/Ben-Richards-Tourism-Bhutan-037.jpg",
  "/High mountain treks.jpg",
  "/village with rice paddy fields  DOT AA Original Bhutan Travels.jpg",
] as const;

export function getFallbackImage(label: string) {
  const index = Array.from(label).reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );

  return fallbackImages[index % fallbackImages.length];
}
