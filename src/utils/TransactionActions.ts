import {databases} from "../appwriteConfig"
import {Transaction} from "../types";
import { ID, Query } from 'appwrite'


// @ts-ignore
export async function getTransactions(userId: string, index: number, limit: number): Promise<Transaction[]> {
    const response = await databases.listDocuments(
        '67e04d26003294165c25',
        '67e04d2f0004159d8c8a',
        [
            Query.offset(index),
            Query.limit(limit),
            Query.equal('customer_id', userId),
            Query.orderDesc('transaction_timestamp')
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
            online: doc.online
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

// @ts-ignore
export async function getPendingTransactions(userId: string): Promise<Transaction[]> {
    const response = await databases.listDocuments(
        '67e04d26003294165c25',
        '67e04d2f0004159d8c8a',
        [
            Query.limit(20),
            Query.equal('customer_id', userId),
            Query.equal('transaction_status', 'pending')
        ]
    );

    return response.documents.map((doc) => ({
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
        online: doc.online
    }));
}

// @ts-ignore
export async function getAmountSpent(userId: string, timestamp: string): Promise<number> {
    const response = await databases.listDocuments(
        '67e04d26003294165c25',
        '67e04d2f0004159d8c8a',
        [
            Query.limit(1000),
            Query.equal('customer_id', userId),
            Query.equal('transaction_status', 'approved'),
            Query.greaterThanEqual('transaction_timestamp', timestamp),
            Query.lessThan('transaction_amount', 0),
            Query.select(['transaction_amount'])
        ]
    );

    let theAmount = 0
    response.documents.forEach((doc) => {
        theAmount -= doc.transaction_amount
    })

    return theAmount;
}