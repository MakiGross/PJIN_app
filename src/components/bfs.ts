class Node {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Graph {
  graph: Map<string, Set<string>>;

  constructor() {
    this.graph = new Map();
  }

  addNode(node: Node): void {
    if (!this.graph.has(node.name)) {
      this.graph.set(node.name, new Set());
    }
  }

  addEdges(from: Node, toNodes: Node[]): void {
    this.addNode(from);
    toNodes.forEach(to => {
      this.addNode(to);
      this.graph.get(from.name)!.add(to.name);
      this.graph.get(to.name)!.add(from.name);
    });
  }
}

async function parseConfigFile(config: string): Promise<Graph> {
  const result = new Graph();
  const lines = config.split('\n');

  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length > 1) {
      parts.forEach(p=>result.addNode(new Node(p)))
      const from = new Node(parts[0]);
      const toNodes = parts.slice(1).map(name => new Node(name));
      result.addEdges(from, toNodes);
    }
  }

  return result;
}

function reconstructPath(from: Node, to: Node, predecessors: Map<string, Node>): Node[] {
  const result: Node[] = [to];
  while (result[result.length - 1] !== from) {
    result.push(predecessors.get(result[result.length - 1].name)!);
  }
  result.reverse();
  return result;
}

async function findPath(from: Node, to: Node, graph: Graph): Promise<Node[] | string[]> {
  const visited = new Map<string, boolean>();
  for (const node of graph.graph.keys()) {
    visited.set(node, false);
  }
  visited.set(from.name, true);

  const predecessors = new Map<string, Node>();
  const queue: Node[] = [from];

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    if (graph.graph.has(currentNode.name)) {
      for (const neighbor of graph.graph.get(currentNode.name)!) {
        if (!graph.graph.has(neighbor) || visited.get(neighbor)) {
          continue;
        }
        visited.set(neighbor, true);
        predecessors.set(neighbor, currentNode);
        queue.push(new Node(neighbor));
        if (neighbor === to.name) {
          return reconstructPath(from, to, predecessors);
        }
      }
    }
  }

  return ['Cesta nenalezena.'];
}

async function Search(config: string, from: string, to:string): Promise<string> {
  
  if(from === to)
    return "Nikam nechoď, jsi tu :)"

  const g = await parseConfigFile(config);

  const path = await findPath(new Node(from), new Node(to), g);
  return path.map(n=>typeof(n) == "string" ? n : n.name).join(' -> ')

  
}

export default Search;

