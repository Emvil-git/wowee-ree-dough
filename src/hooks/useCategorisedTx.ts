import { useMemo } from "react";
import { type TransactionType } from "../types/transactionType";
import { type Category } from "../types/category"; // bruh i think you should rename this??

// im going to create wwhats called a lookup map thing, relational shit between txs and cats

export type CategorisedTxType = TransactionType & {category?: Category}

export const useCategorisedTx = (transactions: TransactionType[], categories: Category[]): CategorisedTxType[] => {
    
    return useMemo(() => {
        const categoryMap = categories.reduce((acc, cat) => {
            const catKey =  cat.uniqueName as keyof Category
            acc[catKey] = cat
            return acc
        }, {} as Record<string, Category>) // this is the lookup map thing, this was giving me a headache until i discovered Record, absolute Godsend

        // for BE minded fellows, think of this thing being a 'join' between categories and transactions

        // KEEP THESE NOTES FOR REFERENCE

        return transactions.map((tx) => (
            {
                ...tx,
                category: categoryMap[tx.categoryUname]
            }
        ))
    }, [transactions, categories])
}

// saves a headache trying to figure out maps and if the tx list blows up, saves bandwidth mapping out through every TransactionItem