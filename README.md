# What is the program
We created a simple game. It is not playable, but it shows how simply can games be made with the use of design patterns.

The main functionality of the program is to show different boxes, who have different sizes, different sets of colors, different behaviors and in general have completely different properties. 


# Patterns
Desing patterns that we used in our application

## Patterns used, their rough file locations
* Creational
  * Singleton: `src/Game.ts`
  * Builder: `src/base/BoxBuilder.ts`
* Structural
  * Facade: `src/base/CanvasFacade.ts`
  * Adapter: `src/base/Renderer.ts`
* Behavioral
  * Observer: `src/events/*` (event managers), `/src/base/Box.ts` (listeners)
  * Strategy: `src/strategy/BoxStrategy.ts`

## Brief pattern reasoning
We use a singleton Game class to controll all the top-level logic and state of the game. It is made sigleton so any object can access its state or methods from anywhere.
Main entities of our game are boxes, which are all different. For convinient creation of those boxes, we use builder pattern. We benefit from it in self-documenting and flexible way of box creation.
HTML Canvas Graphics is a big and complicated library, from which we do not need full functionality. Using this library direclty would mean mixing our client code with a lot of canvas implementaion details. Therefore, to keep the codebase clean, we used Facade pattern to separate all the canvas graphics inner logic behind.
Our game only works with boxes (by idea and design), and while our Canvas Facade simplifies the canvas logic, to keep it reusable and with a single-responsability principle, that facade provides more or a generic interface. Our boxes would like to work with a more friendly for them interface, therefore we use an Adapter to match those interfaces. Everyone is happy.
We use observer pattern to provide event managers for our game. Those event managers make sure that the boxes's update and draw methods are executed when the game tells them to do so (from the game loop)
Finally, a strategy pattern allows our boxes to get assigned (on creation) with different behaviours. It controls only the movement behaviour, but it is expandable to make support for any behavoiour box would want to have (examples: having a shadow, changing speed, color)

# Cooperation
This application has been created in collaboration between Iosif Z. (@orizzzar) and Daniils A. (@snowbalzz).

