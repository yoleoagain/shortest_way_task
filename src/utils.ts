//@ts-ignore
export const range = (length: number) => Array.from({ length }, (x: number, i: number) => i)

export function randInt(min: number, max: number) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}