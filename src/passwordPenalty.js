/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */

export default function penaltyPoints(password = "") {
  if (password === null || typeof password !== "string") return 0;
  
// Match and capture sequences of repeated lowercase letters and digits (case-insensitive)
  const regex = /([a-z0-9])\1+/gi;
  const matches = password.match(regex) || [];

  let count = 0;

  matches.forEach((match) => {
    if (match.length === 2) count += 1;
    if (match.length > 2) count += 2;
  });
  return count;
}
