import { DefaultService } from "./generated";

async function main() {
    const res = await DefaultService.getUser("123");
    console.log(res)
}

main();