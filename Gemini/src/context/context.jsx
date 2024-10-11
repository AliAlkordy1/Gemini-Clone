import { createContext, useState } from 'react';
import run from './../config/config.js';

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) =>{
        setTimeout(function ()  {
            setResultData(prev=>prev+nextWord)
        }, 75*index);
    }

    const newChat =()=>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response ;
        if (prompt !== undefined) {
            response = await run(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=> [...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }
        let responesArray = response.split("**");
        let newRespones = ""; // Initialize here

        for (let i = 0; i < responesArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newRespones += responesArray[i];
            } else {
                newRespones += "<b>" + responesArray[i] + "</b>"; // Correct concatenation
            }
        }
        
        let newResponse2 = newRespones.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for(let i=0 ; i<newResponseArray.length;i++){
            const nextWord=newResponseArray[i];
            delayPara(i,nextWord+" ")
        }
        setLoading(false);
        setInput("");
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;
