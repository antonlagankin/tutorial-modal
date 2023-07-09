import { createContext, useState } from "react"
import { boolean } from "yargs"

interface IModalContext {
    isVisible: boolean,
    setVisible: (flag: boolean) => void
}

export const ModalContext = createContext<IModalContext>({
    isVisible: false,
    setVisible: () => {}
}) 

export const ModalState = ({children} : {children : React.ReactNode}) => {

    const [isVisible, setIsVisible] = useState(false)

    const setVisible = (flag: boolean) => {
        setIsVisible(flag)
    }

    return (
        <ModalContext.Provider value={{isVisible, setVisible}}>
            {children}
        </ModalContext.Provider>
    )
}