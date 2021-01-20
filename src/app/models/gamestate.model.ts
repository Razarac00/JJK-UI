import { Player } from "./player.model";

export class Gamestate {
    public one: Player;
    public two: Player;
    public result: number;

    constructor() {
        this.one = new Player;
        this.two = new Player;
        this.result = -1;
    }
}
