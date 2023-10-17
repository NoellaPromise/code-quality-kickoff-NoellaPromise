export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string.
  if (typeof password !== "string") password = String(password);
  if (password.length !== 10) return false;

  // Check if the password contains only numbers.
  if (/^[0-9]+$/.test(password)) return false;

  // Check if the password contains only alphabetic characters (both lowercase and uppercase).
  if (/^[A-Za-z]+$/.test(password)) return false;

  // Check if the password contains at least one character that is not alphanumeric (i.e., special characters).
  if (/[^A-Za-z0-9]/.test(password)) return false;

  // Check if the password contains at least one lowercase letter.
  if (!/[a-z]/.test(password)) return false;

  // Check if the password contains at least one uppercase letter.
  if (!/[A-Z]/.test(password)) return false;

  // Check if the password is included in a list of forbidden passwords.
  if (forbiddenPasswords.includes(password)) return false;
  // Check if the password contains a sequence of three or more digits in ascending or descending order.
  const arr = [
    123, 234, 345, 456, 567, 678, 789, 987, 876, 765, 654, 543, 432, 321,
  ];
  const res = arr.filter((el) => password.includes(String(el)));
  if (res.length !== 0) return false;

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}
