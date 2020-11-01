const loadCSV = async (path) => {
  return await d3.csv(path);
};

const loadJSON = async (path) => {
  const data = await d3.json(path);
  return data;
};
