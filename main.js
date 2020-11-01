const main = async () => {
  const listingsData = await loadCSV("data/listings.csv");
  const neighborhoodsGeoData = await loadJSON("data/neighborhoods.geojson");
  const mapSVG = await createMap(neighborhoodsGeoData, listingsData);
  console.log(listingsData);
};

main();
