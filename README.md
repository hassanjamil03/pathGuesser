# pathGuesser
React frontent where user creates maze by selecting barriers, then selects ending point and multiple starting points (which must be on the edge?). 
User then selects which starting point they think will reach the endpoint first and clicks Go.
The maze and selected points are sent to the Go backend server, which concurrently solves the maze with the A* pathfinding algo and returns which point solved fastest.
