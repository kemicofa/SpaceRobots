# Space Robots

## Description
Hello! You've been promoted as the chief engineer of the new Robot Space Mission ! Congratulations !

We need you to create a full proof solution that will not fail in production to deploy robots on mars..

It needs to be **efficient** AND *fully* **tested**

## Part 1: What you need to do !

1. Define a 2x2 grid, this needs to be generic as we don't know where the robots will land as of right now

2. Place a robot anywhere on the map that doesn't already have an existing robot
  * It's default direction will be North (N)

3. A robot can accept a string of actions (i.e.: "LRM" )
  * A robot can turn either Left (L) or Right (R)
  * A robot can move by one grid point in it's current direction
  * Only valid actions should be accepted
  * A robot cannot move outside the grid or on a grid that is already occupied

4. Only one robot can be deployed at once, once the robots actions have completed can a second robot be deployed

## Part 2: Visual Testing !