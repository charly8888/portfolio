export function getRandomHexadecimalColor() {
  return `#${Math.random().toString(16).slice(-6)}`
}
