import dayjs from 'dayjs';

export function calculateHowManyDaysAgoItWasEdited(date: Date) {
  const differenceDays = dayjs(date).endOf('day').diff(new Date(), 'day');

  return differenceDays;
}
