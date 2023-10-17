export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */

export default function isValidPassword(password = "") {
  if (typeof password !== "string") password = String(password);

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;
  return true;
}

// Check if the password is exactly 10 characters
if (password.length !== 10) {
  return false;
}

// Check if the password is composed of digits and letters
if (!/^[0-9a-zA-Z]+$/.test(password)) {
  return false;
}

// Check if the password does not contain special characters
if (/[!@#$/]/.test(password)) {
  return false;
}

// Check if the password contains a mix of uppercase and lowercase characters
if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
  return false;
}

// Check for ascending or descending sequences of numbers
for (let i = 0; i < password.length - 3; i++) {
  if (
    "1234567890".includes(password[i]) &&
    "1234567890".includes(password[i + 1]) &&
    "1234567890".includes(password[i + 2]) &&
    "1234567890".includes(password[i + 3])
  ) {
    if (
      parseInt(password[i]) === parseInt(password[i + 1]) - 1 &&
      parseInt(password[i]) === parseInt(password[i + 2]) - 2 &&
      parseInt(password[i]) === parseInt(password[i + 3]) - 3
    ) {
      return false;
    }
    if (
      parseInt(password[i]) === parseInt(password[i + 1]) + 1 &&
      parseInt(password[i]) === parseInt(password[i + 2]) + 2 &&
      parseInt(password[i]) === parseInt(password[i + 3]) + 3
    ) {
      return false;
    }
  }
}

// Check against forbidden passwords
if (forbiddenPasswords.includes(password)) {
  return false;
}
  // return true;

