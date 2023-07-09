import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"

interface IModalProps {
    children: React.ReactNode
}

const visibleClassNames = "fixed bg-black/50 top-0 right-0 left-0 bottom-0"
const hiddenClassNames = "hidden"

export function Modal({children}: IModalProps) {
    const {isVisible, setVisible} = useContext(ModalContext)

    return (
        <>
            { 
                <div className={isVisible ? visibleClassNames : [visibleClassNames, hiddenClassNames].join(' ')} onClick={() => setVisible(false)}>
                    {/* Modal */}
                    <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                        { children }
                    </div>
                </div>
            }
        </>
    )
}