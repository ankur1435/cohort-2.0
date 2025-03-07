import { startLogger } from "./logger";
import { GameManager } from "./store";

startLogger();

setInterval(() => {
    GameManager.getInstance().addGame(Math.random().toString()); 
}, 5000)