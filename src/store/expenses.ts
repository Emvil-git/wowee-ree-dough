import { create } from "zustand";
import type { StateCreator } from "zustand";
import { createJSONStorage, persist } from 'zustand/middleware';
import type { TransactionType } from "../types/transactionType";
import type { CategoryType } from "../types/categoryType";
import { colourObjs } from "../utility";
import type { BudgetType } from "../types/budgetType";

const defaultCategories: CategoryType[] = [{uniqueName: "catDEFAULT", name: "uncategorised", colour: colourObjs[0]}]

// const MOCKtx: TransactionType[] = [
//     {
//         id: BigInt(1),
//         name: "Test 1",
//         value: 100,
//         date: "2026-01-05",
//         categoryUname: "catDEFAULT"
//     },
//     {
//         id: BigInt(2),
//         name: "Test 2",
//         value: 200,
//         date: "2026-01-05",
//         categoryUname: "catDEFAULT"
//     },
//     {
//         id: BigInt(3),
//         name: "Test 3",
//         value: 300,
//         date: "2026-01-05",
//         categoryUname: "catDEFAULT"
//     },
//     {
//         id: BigInt(4),
//         name: "Test 4",
//         value: 400,
//         date: "2026-01-05",
//         categoryUname: "catDEFAULT"
//     },
// ]



interface TransactionSlice {
    transactions: TransactionType[],
    clearTransactions: () => void
    setTransactions: (newTxs: TransactionType[]) => void 
    addTransaction: (newTx: TransactionType) => void
    deleteTransaction: (delId: string) => void
    editTransaction: (id : string, updatesTx: Partial<TransactionType>) => void
}

interface CategorySlice {
    categories: CategoryType[],
    clearCategories: () => void
    setCategories: (newCats: CategoryType[]) => void,
    addCategory: (newCat: CategoryType) => void
    deleteCategory: (delUName: string) => void
    editCategory: (uniqueName: string, updatesCat: Partial<CategoryType>) => void //ts will change once you add a colour and icon to the category type
}

interface BudgetSlice {
    budgets: BudgetType
    clearBudgets: () => void
    updateBudget: (bUpdates: Partial<BudgetType>) => void
}

export type ExStoreType = TransactionSlice & CategorySlice & BudgetSlice

// const createTransactionSlice: StateCreator<TransactionSlice,[["zustand/persist", unknown]], []> = (set) => ({
//     transactions: MOCKtx,
//     setTransactions: (newTxs) => set({ transactions: newTxs }),
//     addTransaction: (newTx) => set((state) => ({ transactions: [...state.transactions, newTx]})),
//     deleteTransaction: (delId) => set((state) => ({ transactions: state.transactions.filter((tx: TransactionType) => tx.id !== delId)})),
//     editTransaction: (upId, updates) => set((state) => ({ transactions: state.transactions.map((tx: TransactionType) => tx.id === upId ? {...tx, ...updates} : tx ) }))
// })


const createTransactionSlice: StateCreator<ExStoreType,[["zustand/persist", unknown]], [], TransactionSlice> = (set) => ({
    transactions: [],
    setTransactions: (newTxs) => set({ transactions: newTxs }),
    clearTransactions: () => set({transactions: []}),
    addTransaction: (newTx) => set((state) => ({ transactions: [...state.transactions, newTx]})),
    deleteTransaction: (delId) => set((state) => ({ transactions: state.transactions.filter((tx: TransactionType) => tx.id !== delId)})),
    editTransaction: (upId, updates) => set((state) => ({ transactions: state.transactions.map((tx: TransactionType) => tx.id === upId ? {...tx, ...updates} : tx ) }))
})

// const createCategorySlice: StateCreator <CategorySlice,[["zustand/persist", unknown]], []> = (set) => ({
//     categories: defaultCategories,
//     setCategories: (newCats) => set({ categories: newCats }),
//     addCategory: (newCat) => set((state) => ({ categories: [...state.categories, newCat] })),
//     deleteCategory: (delUName) => set((state) => ({ categories: state.categories.filter((cat: Category) => cat.uniqueName !== delUName) })),
//     editCategory: (uniqueName, upCat) => set((state) => ({categories: state.categories.map( (cat: Category) => cat.uniqueName === uniqueName ? {...cat, ...upCat} : cat ) }) )
// })

const createCategorySlice: StateCreator <ExStoreType,[["zustand/persist", unknown]], [], CategorySlice> = (set) => ({
    categories: defaultCategories,
    setCategories: (newCats) => set({ categories: newCats }),
    clearCategories: () => set({categories: defaultCategories}),
    addCategory: (newCat) => set((state) => ({ categories: [...state.categories, newCat] })),
    deleteCategory: (delUName) => set((state) => ({ categories: state.categories.filter((cat: CategoryType) => cat.uniqueName !== delUName) })),
    editCategory: (uniqueName, upCat) => set((state) => ({categories: state.categories.map( (cat: CategoryType) => cat.uniqueName === uniqueName ? {...cat, ...upCat} : cat ) }) )
})

// const useExStore = create<TransactionSlice & CategorySlice>()(
//     (...args) => ({
//         ...createTransactionSlice(...args),
//         ...createCategorySlice(...args)
//     })
// )

const createBudgetSlice: StateCreator<ExStoreType, [["zustand/persist", unknown]], [], BudgetSlice> = (set) => 
    ({
        budgets: {monthly: null, weekly: null, daily: null},
        clearBudgets: () => set({budgets: {monthly: null, weekly: null, daily: null}}),
        updateBudget: (update: Partial<BudgetType>) => set((state) => ({budgets: {...state.budgets, ...update}}))
    })

const useExStore = create<ExStoreType>()(
    persist(
        (...args) => ({
            ...createTransactionSlice(...args),
            ...createCategorySlice(...args),
            ...createBudgetSlice(...args)
        }),
        {
            name: 'expense-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                transactions: state.transactions,
                categories: state.categories,
                budget: state.budgets
            })
        }
    )
)

export default useExStore
