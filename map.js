const createMap = async (geoData) => {
  const projection = d3.geoMercator().fitSize(["800", "500"], geoData);
  const geoPaths = d3.geoPath().projection(projection);

  const svg = d3
    .select("#map")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "500");

  svg
    .selectAll("path")
    .data(geoData.features)
    .enter()
    .append("path")
    .attr("d", geoPaths)
    .attr("fill", "blue")
    .attr("opacity", 0.3)
    .attr("stroke", "blue");
  return svg;
};
