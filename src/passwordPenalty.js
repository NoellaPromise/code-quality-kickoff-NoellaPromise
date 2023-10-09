/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  if (password === null) return 0;
  if (typeof password !== "string") password = String(password);

  let count = 0;
  let Regex = /([a-z0-9])\1+/gi;
  let arrOfMatching = password.match(Regex) || 0;
  if (arrOfMatching === 0) return 0;
  for (let char of arrOfMatching) {
    if (char.length === 2) count += 1;
    if (char.length > 2) count += 2;
  }
  return count;
}
