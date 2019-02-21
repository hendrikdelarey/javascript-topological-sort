var Graph = {
    vertices: [0, 1, 2, 3],
    edges: {
        0: [],
        1: [0],
        2: [1],
        3: [2]
    }
}

class TopologicalSorter {
    constructor(){
        this.visitedMap = {}
        this.sortedList = []
    }

DFS_visit(graph, v) {
    this.visitedMap[v] = true;
    graph.edges[v].forEach(e => {
            if(!this.visitedMap[v]) {
                DFS_visit(vertices[e]);
            }
    });

    this.sortedList.push(v);
}

    GetSortedList (graph) {
        graph.vertices.forEach(v => {
            if(!this.visitedMap[v]) {
                this.DFS_visit(graph, v)
            }
        });

        return this.sortedList;
    }
}

let ts = new TopologicalSorter();
let orderedStack = ts.GetSortedList(Graph);

let outputString = "";
while(orderedStack.length > 0) {
    outputString += orderedStack.pop() + " "
}

console.log(outputString);
