import { type CategoryType } from "../types/categoryType"

export const CatDisplay = ({name, uniqueName, colour}: CategoryType) => {
    return (
        <span className="px-1 rounded-sm text-white text-sm w-fit h-fit -skew-x-8" 
            style={{backgroundColor: colour.main}}>
                {name}
        </span>
    )
}