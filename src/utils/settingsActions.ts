import {databases} from "../appwriteConfig"

// @ts-ignore
export async function createSettings(id): void {
    await databases.createDocument(
        '67e04d26003294165c25',
        '67f687b7002e607baeef',
        id.customer_id,
        {
            customer_id: id
        }
    );
}