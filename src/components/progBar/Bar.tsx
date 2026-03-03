interface BarPropType {
    max: number
    fill: number
}

export const Bar = ({max, fill}: BarPropType) => {
    


    return (
        <div className=" relative w-100 h-[2em]">
            <div className="absolute top-0 w-100 h-[2em] bg-gray-300"></div>
            <div className={`absolute top-0 bg-amber-500 h-[2em]`} style={{width: `${fill/max * 100}%`}}></div>
            <span className="absolute text-center w-100">{fill}/{max}</span>
        </div>
    )
}