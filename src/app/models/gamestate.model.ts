import { Player } from "./player.model";

export interface Gamestate {
    id: string;
    one: Player;
    two: Player;
    result: number;
}
