import {databases} from "../appwriteConfig"
import {Query} from "appwrite";
import {Settings, Transaction} from "../types";

// @ts-ignore
export async function createSettings(id: string): void {
    await databases.createDocument(
        '67e04d26003294165c25',
        '67f687b7002e607baeef',
        id,
        {
            customer_id: id
        }
    );
}

// @ts-ignore
export async function getSettings(userId: string): Promise<Settings> {
    const response = await databases.listDocuments(
        '67e04d26003294165c25',
        '67f687b7002e607baeef',
        [
            Query.equal('customer_id', userId)
        ]
    );

    return response.documents
        .map((doc) => ({
            customer_id: doc.customer_id,
            start_time: doc.start_time,
            end_time: doc.end_time,
            fraudscore_detection: doc.fraudscore_detection,
            daily_limit: doc.daily_limit,
            weekly_limit: doc.weekly_limit,
            monthly_limit: doc.monthly_limit,
            purchase_limit: doc.purchase_limit,
            block_online_purchases: doc.block_online_purchases,
            block_international_purchases: doc.block_international_purchases,
            home_state: doc.home_state,
            home_city: doc.home_city,
            gambling: doc.gambling,
            adult_entertainment: doc.adult_entertainment,
            liquor_stores: doc.liquor_stores
        }))[0];
}

// @ts-ignore
export async function updateSettings(userId: string, settings: Settings): Promise<Settings> {
    await databases.updateDocument(
        '67e04d26003294165c25',
        '67f687b7002e607baeef',
        userId,
        settings
    )
}

export function checkSettings(transaction: Transaction, settings:　Settings):string {
    if (settings.home_city) {

    }
    return 'approved'
}