export function getRandomInteger(min: number, max: number) {
  // Inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}
