export const smallUrl = (url: string) =>
  url
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

export const getHostName = (url: string) =>
  url
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")
    .replace(/^([^/]+)\/.+$/, "$1");

export const sortByKey = (key: string) => (a: any, b: any) => {
  if (a[key] > b[key]) {
    return 1;
  } else if (a[key] < b[key]) {
    return -1;
  }
  return 0;
};
