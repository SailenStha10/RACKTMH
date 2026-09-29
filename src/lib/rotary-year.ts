/** Rotary year runs July 1 - June 30. Returns e.g. "2026-27". */
export function getCurrentRotaryYear(date: Date = new Date()): string {
  const year = date.getFullYear()
  const isBeforeJuly = date.getMonth() < 6 // 0-indexed: 6 = July

  const startYear = isBeforeJuly ? year - 1 : year
  const endYear = (startYear + 1) % 100

  return `${startYear}-${String(endYear).padStart(2, "0")}`
}
