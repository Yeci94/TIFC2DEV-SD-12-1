// Task 4: delUser(number)
import { getServerURL } from "./task1.js";
export async function delUser(number){
    const url = getServerURL();
    const postResponse = await fetch(url + "/users/"+number, {
        method: "DELETE"
    });
}
