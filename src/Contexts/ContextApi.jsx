import { createContext, useState } from 'react';

export const ContextApi = createContext();

function ContextProvider ({children}) {

    const [selectDivStack, setSelectDivStack] = useState({
        python: false,
        c: false,
        node: false,
        react: false,
        typescript: false,
        javascript: false,
        tailwindcss: false,
        sass: false,
        css3: false,
        html5: false
    })
    const [description, setDescription] = useState('');
    const [linkStacks, setLinkStacks] = useState('');

    return (
        <ContextApi.Provider value={{
            selectDivStack, setSelectDivStack,
            description, setDescription,
            linkStacks, setLinkStacks
        }}>
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;