export interface Transaction {
    $transaction_id: string;
    customer_id: string;
    card_number: string;
    transaction_timestamp: string;
    transaction_amount: number;
    transaction_currency: string;
    transaction_type: string;
    transaction_status: string;
    merchant_id: string;
    merchant_name: string;
    transaction_location: string;
    fraud_score: number;
}

