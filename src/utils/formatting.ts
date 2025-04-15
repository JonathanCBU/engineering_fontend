export const formatReadableInt = (value: number): string => {
  if (value == 1) {
    return `${value}st`;
  }

  if (value == 2) {
    return `${value}nd`;
  }

  if (value == 3) {
    return `${value}rd`;
  }

  return `${value}th`;
};
