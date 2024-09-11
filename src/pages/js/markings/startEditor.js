import { Start } from "./start";
import { MarkingEditor } from "./markingEditor";
import { World } from "../world";

export class StartEditor extends MarkingEditor {
   constructor(viewport, world) {
      super(viewport, world, world.laneGuides);
   }

   createMarking(center, directionVector) {
      return new Start(
         center,
         directionVector,
         World.roadWidth / 2,
         World.roadWidth / 2
      );
   }
}