# What is the program
We created a simple game. It is not playable, but it shows how simply can games be made with the use of design patterns.

The main functionality of the program is to show different boxes, who have different sizes, different sets of colors, different behaviors and in general have completely different properties. 


# Patterns
Design patterns that we used in our application.

| Pattern   | File Name                                      | File Location                                                          |
|-----------|------------------------------------------------|------------------------------------------------------------------------|
| Singleton | `Game.ts`                                      | ` src/Game.ts `                                                        |
| Builder   | `BoxBuilder.ts`                                | ` src/base/BoxBuilder.ts `                                             |
| Facade    | `CanvasFacade.ts`                              | ` src/base/CanvasFacade.ts `                                           |
| Adapter   | `Renderer.ts`                                  | ` src/base/Renderer.ts `                                               |
| Observer  | `DrawEventManager.ts`  `UpdateEventManager.ts` | ` src/events/* `  (event managers),  ` /src/base/Box.ts `  (listeners) |
| Strategy  | `BoxStrategy.ts`                               | ` src/strategy/BoxStrategy.ts `                                        |

## Pattern Reasoning
### Singleton
We use a singleton Game class to controll all the top-level logic and state of the game. It is made sigleton so any object can access its state or methods from anywhere.
### Builder
Main entities of our game are boxes, which are all different. For convinient creation of those boxes, we use builder pattern. We benefit from it in self-documenting and flexible way of box creation.
### Facade
HTML Canvas Graphics is a big and complicated library, from which we do not need full functionality. Using this library direclty would mean mixing our client code with a lot of canvas implementaion details. Therefore, to keep the codebase clean, we used Facade pattern to separate all the canvas graphics inner logic behind.
### Adapter
Our game only works with boxes (by idea and design), and while our Canvas Facade simplifies the canvas logic, to keep it reusable and with a single-responsability principle, that facade provides more or a generic interface. Our boxes would like to work with a more friendly for them interface, therefore we use an Adapter to match those interfaces. Everyone is happy.
### Observer
We use observer pattern to provide event managers for our game. Those event managers make sure that the boxes's update and draw methods are executed when the game tells them to do so (from the game loop)
### Strategy
Finally, a strategy pattern allows our boxes to get assigned (on creation) with different behaviours. It controls only the movement behaviour, but it is expandable to make support for any behavoiour box would want to have (examples: having a shadow, changing speed, color)


# Cooperation
This application has been created in collaboration between Iosif Z. (@orizzzar) and Daniils A. (@snowbalzz).
We were working in one room most of the time, which really sped up the proccess.

### Coming up with an idea
First thing first, we planned how we are going to decide on the project idea: Read to refresh the knowledge of design patterns, come up with program ideas, disscuss them and then do the work.
Iosif's main idea was a shooter game, and Daniils suggested to create an ATM simulator. With the ATM, it wasn't very clear how exaclty we would put together six design patterns, and the shooter game idea turned out to be too complicated. So after a discussion, we decided to create a simple non-playable game, decided on its structure and did some experiments while pair programming.

### Coding
Due to our experiments we both had a very good understanding of what we are creating, since we coded in one room, it was very easy to distibute task: "I do this thing, Okay I do that one then". Very often we helped each other when they were stuck or didnt know which of the possible ways something should be done, often rediscussing the idea.

### Finishing Coding
When the app was almost done, we pair-programmed some refactoring and cleaning up. Tested that it runs after cloning.

### Portfolio (README)
Then we sat making a readme. We started working on it separately, but after few annoying merge conflicts, we decided that one person should type and both should decide what to type.


