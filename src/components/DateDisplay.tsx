import { useTime } from "../hooks/useTime";
import useAppStateStore from "../store/appStates"

interface DateDisplayProps {
    date?: string;
}

// NOTE: make this agnostic, it doesnt care if you set your timezones right man, it goes "not my job brah, i just display the date, you dont like it? take it up to corporate"

// why this instead of spamming usetime?
// because I said so and because I want to use it for the transaction item things, and all other places where I need a date

export const DateDisplay = ({date = useTime().isoLocal}: DateDisplayProps) => {
    const dateFormat = useAppStateStore((state) => state.dateFormat)

    const datestring = date
    // this will always be an ISO string, if your date isnt an iso string go fuck yourself

    const handleDate = () => {
        switch (true){
            case dateFormat === "weird(US)":
                const dateWeird = new Date(date).toLocaleString('en-us', {day: "numeric", month:"long", year:"numeric"})
                return dateWeird
            
            case dateFormat === "normal":
                const dateObj = new Date(date).toLocaleString('en-gb', {day: "numeric", month:"long", year:"numeric"})
                return dateObj

            default:
                const dateICareAbout = datestring.split('T')[0].split('-')
                return `${dateICareAbout[0]} ${dateICareAbout[1]} ${dateICareAbout[2]}`
        }
    }

    return (
        <>
            {handleDate()}
        </>
    )
}