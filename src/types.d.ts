export interface Transaction {
    $id: string;
    user_id: string;
    card_number: string;
    transaction_date: string;
    amount: bigint;
    merchant_name: string;
    transaction_type: string;
    description: string;
    location: string;
    transaction_flag: string;
}

