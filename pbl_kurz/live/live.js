const inputNode = document.querySelector("#seq");
const kNode = document.querySelector("#k-length");

let input = inputNode.value || inputNode.placeholder;
let k = kNode.value || kNode.placeholder;

kNode.addEventListener(
  "change",
  (event) => {
    k = event.target.value;
  }
);
inputNode.addEventListener(
  "change",
  (event) => {
    input = event.target.value;
  }
);


function makeGraph() {
  const nodes = R.compose(
    R.map(R.join("")),
    R.aperture(k - 1)
  )(input === "" ? inputNode.placeholder : input);
  const links = [];

  for (let i = 0; i < nodes.length - 1; ++i) {
    const link = {source: nodes[i], target: nodes[i + 1], value: 1};
    const existingLink =
          R.find(R.allPass([R.eqProps("source", link), R.eqProps("target", link)]), links);
    if (existingLink) {
      existingLink.value++;
    } else {
      links.push(link);
    }
  }

  let container = document.querySelector("#canvas");
  container.parentNode.replaceChild(container.cloneNode(false), container);
  container = document.querySelector("#canvas");

  const graph = Viva.Graph.graph();
  const graphics = Viva.Graph.View.svgGraphics();
  const layout = Viva.Graph.Layout.forceDirected(graph, {
    springLength: 50,
    springCoeff: 0.0005,
    dragCoeff: 0.02,
    gravity: -5
  });
  const renderer = Viva.Graph.View.renderer(graph, {container, graphics, layout});

  nodes.forEach(
    (name => graph.addNode(name, {name}))
  );
  links.forEach(
    ({source, target}) => graph.addLink(source, target)
  );

  const triangle = Viva.Graph.svg("marker")
        .attr("viewBox", "0 0 10 01")
        .attr("refX", 0)
        .attr("refY", 5)
        .attr("markerUnits", "strokeWidth")
        .attr("markerWidth", 4)
        .attr("markerHeight", 3)
        .attr("orient", "auto");

  graphics
    .node(
      node => Viva.Graph.svg("text")
        .text(node.data && node.data.name || "")
    )
    .placeNode(
      (nodeUI, pos) => nodeUI.attr("x", pos.x).attr("y", pos.y)
    )
    .link(
      ({fromId, toId}) => {
        const fromNode = graphics.getNodeUI(fromId);
        const toNode = graphics.getNodeUI(toId);
        return Viva.Graph.svg("line")
          .attr("x1", fromNode.x)
          .attr("y1", fromNode.y)
          .attr("x2", toNode.x)
          .attr("y2", toNode.y)
          .attr("stroke", "rgba(0,0,0,0.3)")
          .attr("marker-end", triangle);
      }
    );

  renderer.run();
}
