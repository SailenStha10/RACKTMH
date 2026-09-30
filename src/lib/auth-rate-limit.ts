/**
 * In-memory login rate limiting for local development only. This resets on
 * every server restart and is per-process, so it does nothing useful across
 * multiple serverless instances (e.g. Vercel). Replace with a shared store
 * (Redis/Upstash) before relying on this in production.
 */

const WINDOW_MS = 5 * 60 * 1000
const MAX_ATTEMPTS = 5

const attempts = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(key: string): boolean {
  const entry = attempts.get(key)
  const now = Date.now()

  if (!entry || now > entry.resetAt) {
    return false
  }

  return entry.count >= MAX_ATTEMPTS
}

function recordAttempt(key: string): void {
  const now = Date.now()
  const entry = attempts.get(key)

  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return
  }

  entry.count += 1
}

function clearAttempts(key: string): void {
  attempts.delete(key)
}

export { isRateLimited, recordAttempt, clearAttempts }
