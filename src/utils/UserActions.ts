import {databases} from "../appwriteConfig"
import {Query} from "appwrite";
import {Users} from "../types";


// @ts-ignore
export async function createCustomer(userInfo: Users): void {
    await databases.createDocument(
        '67e04d26003294165c25',
        '67f6889e00255a804510',
        userInfo.customer_id,
        {
            'customer_id': userInfo.customer_id,
            'manager_id': userInfo.manager_id,
            'card_number': userInfo.card_number
        }
    );
}

// @ts-ignore
export async function role(id: string): Promise<string> {
    const response = await databases.listDocuments(
        '67e04d26003294165c25',
        '67f6889e00255a804510',
        [
            Query.or([
                Query.and([
                    Query.equal('customer_id', id),
                    Query.isNotNull('manager_id')
                ]),
                Query.and([
                    Query.equal('manager_id', id),
                    Query.isNotNull('bank_id')
                ]),
                Query.and([
                    Query.equal('bank_id', id),
                    Query.isNull('manager_id')
                ])
            ])
        ]
    );

    const user = response.documents
        .map((doc) => ({
            customer_id: doc.customer_id,
            manager_id: doc.manager_id,
            bank_id: doc.bank_id,
            card_number: doc.card_number
        }));

    if (user[0].customer_id && user[0].manager_id) {
        return 'customer';
    } else if (user[0].manager_id && user[0].bank_id) {
        return 'manager';
    } else if (user[0].bank_id && !user[0].manager_id) {
        return 'bank';
    } else {
        return 'invalid';
    }
}