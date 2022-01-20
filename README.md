# What is the program
We created a simple game. It is not playable, but it shows how simply can games be made with the use of design patterns.

The main functionality of the program is to show different boxes, who have different sizes, different sets of colors, different behaviors and in general have completely different properties. 

## Patterns
Some of the **design patterns** that we used/implemented in our application.
## Overview
* **Creational** 
  * Singleton: `src/Game.ts`
  * Builder: `src/base/BoxBuilder.ts`
* **Structural**
  * Facade: `src/Facade/RendererFacade.ts`
* **Behavioral**
  * Observer: `src/events/*` (event managers), `/src/base/Box.ts` (listeners)
  * Strategy: `src/strategy/BoxStrategy.ts`

# Cooperation
This application has been created in collaboration between Iosif Z. (@orizzzar) and Daniils A. (@snowbalzz).

