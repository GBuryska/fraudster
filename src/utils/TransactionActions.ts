import {databases} from "../appwriteConfig"
import {Transaction} from "../types";

// @ts-ignore
export async function getTransactions(): Promise<Transaction[]> {
    const response = await databases.listDocuments(
        '67e04d26003294165c25',
        '67e04d2f0004159d8c8a'
    );

    return response.documents.map((doc) => ({
        $id: doc.$id,
        user_id: doc.user_id,
        card_number: doc.card_number,
        transaction_date: doc.transaction_date,
        amount: doc.amount,
        merchant_name: doc.merchant_name,
        transaction_type: doc.transaction_type,
        description: doc.description,
        location: doc.location,
        transaction_flag: doc.transaction_flag,
    }));
}