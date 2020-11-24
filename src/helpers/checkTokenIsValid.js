export const checkTokenIsValid = tokenExpireTime => {
  if (typeof tokenExpireTime === 'string' && tokenExpireTime.length) {
    // In minutes.
    const leastTimeToExpire = 2;

    const currentTime = new Date();
    const currentYearUTC = currentTime.getUTCFullYear();
    const currentMonthUTC = currentTime.getUTCMonth() + 1;
    const currentDateUTC = currentTime.getUTCDate();
    const currentHoursUTC = currentTime.getUTCHours();
    const currentMinutesUTC = currentTime.getUTCMinutes();
    const totalMinutes = currentHoursUTC * 60 + currentMinutesUTC;

    const [date, time] = tokenExpireTime.split('T');
    const [expireYear, expireMonth, expireDate] = date.split('-');
    const [expireHours, expireMinutes] = time.split(':');
    const totalMinutesToExpire =
      Number(expireHours) * 60 + Number(expireMinutes);

    const isYearValid = Number(expireYear) >= currentYearUTC;
    const isMonthValid = Number(expireMonth) >= currentMonthUTC;
    const isDateValid = Number(expireDate) >= currentDateUTC;
    const minutesDifference = totalMinutesToExpire - totalMinutes;

    return (
      isYearValid &&
      isMonthValid &&
      isDateValid &&
      minutesDifference >= leastTimeToExpire
    );
  }
  return tokenExpireTime;
};
