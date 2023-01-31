import { createContext, FC, PropsWithChildren, useState } from "react";

export interface Tabs {

};

export const TabsContext = createContext<{
    tabsValue: number,
    setTabsValue: (newTabsValue: number) => void

}>({
    tabsValue: 0,
    setTabsValue: () => {}
});

const TabsContextProvider : FC<PropsWithChildren>= ({ children }) => {
    const [ tabsValue, setTabsValue ] = useState(0)
    return (
        <TabsContext.Provider value={{
          tabsValue,
          setTabsValue
        }}>
            {children}
        </TabsContext.Provider>
    )
};

export default TabsContextProvider;