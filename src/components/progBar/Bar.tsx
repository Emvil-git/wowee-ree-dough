interface BarPropType {
    max: number
    fill: number
}

export const Bar = ({max, fill}: BarPropType) => {
    


    return (
        <div className="flex justify-between items-center gap-2">
            {/* <span
                className="text-3xl"
            >{fill/max * 100 + "%"}</span> */}

            <div className=" relative flex w-full h-[2em] p-1 border-rose-600 border-2">
                {/* <div className="absolute top-0 w-full h-[2em] bg-gray-300"></div> */}
                <div className={`top-0 bg-rose-600`} style={{width: `${fill/max * 100}%`}}></div>
                <span className="absolute top-0 text-center w-full">{fill}/{max}</span>
            </div>

            
        </div>
    )
}