# Class 30 Reading - Implementation: Graphs

There are no reading questions. This feels weird. I'm gonna talk about an idea I had for a potential final project using graphs...

Let's say you're planning a vacation, and there are several spots you want to visit in one day. Each of these locations can be seen as nodes that are all connecdted to each other. The distance from one node to another would be a weighted edge. I haven't verified this myself, but I believe given a starting node, we could use Djikstra's shortest path algorithm to generate a shortest path tree.

On the surface, this would be a simple vacation planner app that integrates with a map API such as Google Maps and allows a user to enter a list of locations. Then we could use the distances generated by Google (including traffic delays) to give each connection a weighted edge. Since graphs are used in the travel industry, this doesn't seem completely ridiculous. You could also think of this idea as an extension of what map apps currently do anyway between two points.

[Return to Index](index.md)
