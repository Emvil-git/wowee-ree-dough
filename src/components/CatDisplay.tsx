import { type CategoryType } from "../types/categoryType"

export const CatDisplay = ({name, uniqueName, colour}: CategoryType) => {
    return (
        <span className="p-1 rounded-full text-white text-xs w-fit" 
            style={{backgroundColor: colour.main}}>
                {name}
        </span>
    )
}