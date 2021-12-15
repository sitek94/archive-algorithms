import fs from "fs";
import path from "path";

const file = fs.readFileSync(path.join(__dirname, "input.txt"), "utf8");
const lines = file.split("\n");
const edges = createEdges(lines, "-");

function bfs(graph: Graph, from: string, to: string) {
  let queue = [{}];
}

type Graph = Record<string, string[]>;

function createGraph(edges: [string, string][]) {
  const graph: Record<string, string[]> = {};

  for (let [from, to] of edges) {
    addEdge(from, to);
    addEdge(to, from);
  }

  function addEdge(from: string, to: string) {
    if (!graph[from]) {
      graph[from] = [];
    } else {
      graph[from].push(to);
    }
  }

  return graph;
}

function createEdges(lines: string[], separator: string) {
  return lines.map((line) => line.split(separator));
}
