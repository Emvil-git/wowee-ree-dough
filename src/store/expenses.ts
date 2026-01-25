import { create } from "zustand";
import type { StateCreator } from "zustand";
import type { TransactionType } from "../types/transactionType";
import type { Category } from "../types/category";

const defaultCategories: Category[] = [{uniqueName: "catDEFAULT", name: "uncategorised"}]

const MOCKtx: TransactionType[] = [
    {
        id: 1,
        name: "Test 1",
        value: 100,
        date: "2026-01-05",
        categoryUname: "catDEFAULT"
    },
    {
        id: 2,
        name: "Test 2",
        value: 200,
        date: "2026-01-05",
        categoryUname: "catDEFAULT"
    },
    {
        id: 3,
        name: "Test 3",
        value: 300,
        date: "2026-01-05",
        categoryUname: "catDEFAULT"
    },
    {
        id: 4,
        name: "Test 4",
        value: 400,
        date: "2026-01-05",
        categoryUname: "catDEFAULT"
    },
]

interface TransactionSlice {
    transactions: TransactionType[]
    addTransaction: (newTx: TransactionType) => void
    deleteTransaction: (delId: number) => void
    editTransaction: (id : number, updatesTx: Partial<TransactionType>) => void
}

interface CategorySlice {
    categories: Category[]
    addCategory: (newCat: Category) => void
    deleteCategory: (delUName: string) => void
    editCategory: (uniqueName: string, updatesCat: Partial<Category>) => void //ts will change once you add a colour and icon to the category type
}

const createTransactionSlice: StateCreator<TransactionSlice, []> = (set) => ({
    transactions: MOCKtx,
    addTransaction: (newTx) => set((state) => ({ transactions: [...state.transactions, newTx]})),
    deleteTransaction: (delId) => set((state) => ({ transactions: state.transactions.filter((tx: TransactionType) => tx.id !== delId)})),
    editTransaction: (upId, updates) => set((state) => ({ transactions: state.transactions.map((tx: TransactionType) => tx.id === upId ? {...tx, ...updates} : tx ) }))
})

const createCategorySlice: StateCreator <CategorySlice, []> = (set) => ({
    categories: defaultCategories,
    addCategory: (newCat) => set((state) => ({ categories: [...state.categories, newCat] })),
    deleteCategory: (delUName) => set((state) => ({ categories: state.categories.filter((cat: Category) => cat.uniqueName !== delUName) })),
    editCategory: (uniqueName, upCat) => set((state) => ({categories: state.categories.map( (cat: Category) => cat.uniqueName === uniqueName ? {...cat, ...upCat} : cat ) }) )
})

const useExStore = create<TransactionSlice & CategorySlice>()(
    (...args) => ({
        ...createTransactionSlice(...args),
        ...createCategorySlice(...args)
    })
)

export default useExStore
