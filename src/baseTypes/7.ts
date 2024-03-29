/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday,
  Tuesday,
  Wednesdat,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: Week): boolean => {
  return day === Week.Saturday||day===Week.Sunday
}

