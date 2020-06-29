export const users = [...Array(5).keys()].map((key) => ({
  id: key + "",
  name: `Name${key}`,
}));
