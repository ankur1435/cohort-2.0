import { GameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        console.log(GameManager.getInstance().log());
    }, 5000)
}