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

// add the settings here

export interface Settings {
    customer_id: string;
    start_time?: string;
    end_time?: string;
    online_purchases?: boolean;
    fraudscore_detection?: boolean;
    daily_limit?: number;
    weekly_limit?: number;
    monthly_limit?: number;
    purchase_limit?: number;
    block_online_purchases?: boolean;
    block_international_purchases?: boolean;
    block_interstate_purchases?: boolean;
    home_state?: string;
    block_intercity_purchases?: boolean;
    home_city?: string;
    gambling?: boolean;
    adult_entertainment?: boolean;
    liquor_stores?: boolean;
}

export interface Users {
    customer_id?: string;
    manager_id?: string;
    bank_id?: string;
    card_number?: string;
}