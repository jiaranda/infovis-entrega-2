const createMap = async (geoData) => {
  const width = 500;
  const height = 500;
  const projection = d3.geoMercator().fitSize([width, height], geoData);
  const geoPaths = d3.geoPath().projection(projection);
  const mapContainer = d3
    .select("#map")
    .style("height", `${height}px`)
    .style("width", `${width}px`);

  const svg = d3
    .select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  svg
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

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

  let zoom = d3
    .zoom()
    .extent([
      [0, 0],
      [width, height],
    ])
    .translateExtent([
      [0, 0],
      [width, height],
    ])
    .scaleExtent([1, 7])
    .on("zoom", (event) => {
      mapGroup.attr("transform", event.transform);
    });

  mapContainer.call(zoom);

  return svg;
};
