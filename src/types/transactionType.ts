import type { Category } from "./category";

export interface TransactionType {
    id: number;
    name: string;
    value: number;
    date: string;
    category: Category
}