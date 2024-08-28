// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export async function listUsers() {
    const url = getServerURL();
    const response = await fetch(url + "/users");
    const users = await response.json();
    const formattedUsers = users
        .map(
            (user) =>
                `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
        )
        .join(",\n");
    return console.log(`[\n${formattedUsers}\n]`);
}
