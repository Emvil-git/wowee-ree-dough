import { createContext } from "react";

interface HomeContextVals {
    homeModalShow: boolean;
    setHomeModalShow: (homeModalShow: boolean) => void;
}

export const HomeContext = createContext<HomeContextVals>(
    {
        homeModalShow: false,
        setHomeModalShow: () => {}
    }
)

export default HomeContext