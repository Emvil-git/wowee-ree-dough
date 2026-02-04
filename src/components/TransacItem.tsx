interface TransacItemProps {
    id: string;
    name: string;
    value: number;
    date: string;
    categoryUname: string
}

export const TransacItem = ({id, name, value, date, categoryUname} : TransacItemProps) => {
    return(
        <div key={id}>
            {name}
            {value}
            {date}
            {categoryUname}
        </div>
    )
}

export default TransacItem

// TRANSACTION ITEM
// NAME AMOUNT CATEGORY DATE TIME
// NOTE ABOUT CATEGORY: if the category is deleted from budgets
// items from that category are transferred to a 'default' category