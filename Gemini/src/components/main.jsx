import { Icon } from '@iconify/react';
import { useContext } from "react";
import { Context } from './../context/context';
export default function Main() {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input }=  useContext(Context);



    return <>
    <div className="main-container">
        <div className="nav">
            <h4>Gemini</h4>
            <img src="../src/Assets/bearded-man-with-striped-shirt_273609-7180.avif" alt="profile" />
        </div>


        {!showResult ? 
        
        
        <div className="hello-container">
            <div className="greet">
                 <p><span>HELLO, DEV.</span></p>
            <p>HOW CAN I HELP YOU TODAY?</p> 
            </div>
          
 <div className="cards">
            <div className="card">
                <p>suggest beautiful on upcoming road trips.</p>
                <Icon icon="clarity:compass-line" width="35" height="35"  style={{color: "black"}} className="greet-icon"/>
            </div>
            <div className="card">
                <p>summurize the concept of light year </p>
                <Icon icon="lets-icons:lamp-duotone-line" width="35" height="35"  style={{color: "black"}} className="greet-icon"/>
            </div>
            <div className="card">
                <p>FC Barcelona the best team , why? </p>
                <Icon icon="mdi:chat-outline" width="35" height="35"  style={{color: "black"}} className="greet-icon"/>
            </div>
            <div className="card">
                <p>how to code using react? </p>
                <Icon icon="solar:code-bold" width="35" height="35"  style={{color: "black"}} className="greet-icon"/>
            </div>
           


        </div> </div>
        
        : 
        
        
        <div className="result" >
            <div className="result-title">
            <img src="../src/Assets/bearded-man-with-striped-shirt_273609-7180.avif" alt="profile" />
                <p>{recentPrompt}</p>

            </div>
            <div className="result-data" >
            <Icon icon="logos:google-gemini" width="94" height="94" className="result-icon"/>
            {loading? <div className="loader" > <hr /><hr /><hr /> </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}
                
            </div>

        </div> }






       
        <div className="temp-input">
        <div className="main-botton">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value )} value ={input} type="text" placeholder="Enter a prompt here"     />
                    <div>
                    <Icon icon="icon-park-outline:add-picture" width="24" height="24"  style={{color: "black" , cursor: "pointer"   } } />
                    <Icon icon="material-symbols:mic-outline" width="24" height="24"  style={{color: "black", cursor: "pointer" }} />
                    <Icon icon="mage:direction-right-2" width="24" height="24"  style={{color: "black", cursor: "pointer" }} onClick={()=> onSent()  } />
                    </div>



                </div>
                        <p className="bottom-info">Gemini may Display inccorate info , including about people , so Double-Check its responses . Your privecy and Gemini App</p>
           
           
            </div>


        </div>
</div>
    
    
    </>
    
}