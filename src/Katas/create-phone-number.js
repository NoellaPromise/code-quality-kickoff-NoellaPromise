// eslint-disable-next-line unicorn/filename-case

function createPhoneNumber(numbers) {
  let format = "(xxx) xxx-xxxx";

  for (const number_ of numbers) {
    format = format.replace("x", number_);
  }

  return format;
}
