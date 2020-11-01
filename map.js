const createMap = async (geoData) => {
  const projection = d3.geoMercator().fitSize(["500", "500"], geoData);
  const geoPaths = d3.geoPath().projection(projection);

  const svg = d3
    .select("#map")
    .append("svg")
    .attr("width", "500")
    .attr("height", "500");

  svg
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", "500")
    .attr("height", "500");

  const mapGroup = svg
    .append("g")
    .attr("clip-path", "url(#clip)")
    .attr("id", "mapGroup");

  mapGroup
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
