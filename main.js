const main = async () => {
  const listingsData = await loadCSV("data/listings.csv");
  const neighborhoodsGeoData = await loadJSON("data/neighborhoods.geojson");
  const mapContainer = d3.select("#map");
  const mapSVG = await createMap(neighborhoodsGeoData);

  let zoom = d3
    .zoom()
    .extent([
      [0, 0],
      [500, 500],
    ])
    .translateExtent([
      [-100, -100],
      [500 + 100, 500 + 100],
    ])
    .scaleExtent([1, 12])
    .on("zoom", (event) => {
      mapSVG.select("#mapGroup").attr("transform", event.transform);
    });

  mapContainer.call(zoom);
};

main();
