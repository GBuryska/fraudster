import {databases, functions} from "../appwriteConfig"
import {Transaction} from "../types";
import { ID, Query } from 'appwrite'


// @ts-ignore
export async function getTransactions(userId: string): Promise<Transaction[]> {
    const response = await databases.listDocuments(
        '67e04d26003294165c25',
        '67e04d2f0004159d8c8a',
        [
            Query.limit(20),
            Query.equal('customer_id', userId)
        ]
    );

    return response.documents
        .filter((doc) => doc.customer_id === userId)
        .map((doc) => ({
            $transaction_id: doc.$id,
            customer_id: doc.customer_id,
            card_number: doc.card_number,
            transaction_timestamp: doc.transaction_timestamp,
            transaction_amount: doc.transaction_amount,
            transaction_currency: doc.transaction_currency,
            transaction_type: doc.transaction_type,
            transaction_status: doc.transaction_status,
            merchant_id: doc.merchant_id,
            merchant_name: doc.merchant_name,
            transaction_location: doc.transaction_location,
            fraud_score: doc.fraud_score,
        }));
}

// @ts-ignore
export async function createTransaction(transaction: Transaction): Promise<Transaction> {
    databases.createDocument(
        '67e04d26003294165c25',
        '67e04d2f0004159d8c8a',
        ID.unique(),
        transaction
    );
}