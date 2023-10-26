import { FC } from "react";

interface DateFilterTypeProp {
    
}

const DateFilter:FC<DateFilterTypeProp> = () => {
    return (
        <input type="date"
               className="w-40 border-[1px] border-teal-700 px-3 py-2"
        />
    )
}

export default DateFilter;