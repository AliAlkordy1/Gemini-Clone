import { Icon } from '@iconify/react';
import {useState , useContext} from "react"
import { Context } from './../context/context';
export default function SideBar() {
    const [extened ,setExtended]=useState(false)
    const {onSent , prevPrompts,setRecentPrompt,newChat }= useContext (Context)
    const loadPrompt = async (prompt) => {
        setRecentPrompt (prompt)
      await  onSent(prompt)
        
    }


    return <>
    <div className="sidebar-container">
 <div className="top-sidebar"  >
    <Icon icon="heroicons:bars-3" width="30" height="30"  style={{color: "black", marginBottom: "30px",marginLeft: "10px"}}  className="icons" onClick={()=>setExtended(prev=> !prev)}/>
        <div className="newChat" onClick ={()=> newChat()}>
        <Icon icon="ph:plus" width="30" height="30"  style={{color: "gray"}}className="icons" />
       {extened?<p >new chat</p>:null} 
        </div>
        
       {extened? <div style={{ cursor: "pointer"}} >
        <p  style={{ marginBottom: "30px"}}>Recents</p>
        {prevPrompts.map((item, index)=> { return (  <div className="recent" key={index} onClick = {()=> loadPrompt(item)}>
        <Icon icon="mdi:message-outline" width="17" height="17"  style={{color: "gray", marginRight: "10px"}} className="icons"/>
        <p> {item.slice(0,18)} ...</p>

        </div> )})}
       
        </div>:null}
    </div>

    <div className="bottom-sidebar">
        <div className={extened ? "bottom-icons" : "if-collapsed"}>
            <Icon icon="material-symbols:help-outline" width="20" height="20"  style={{color: "black"}}className="icons" />
            {extened?<p>Help</p>:null}
        </div>
        <div className={extened ? "bottom-icons" : "if-collapsed"}>
        <Icon icon="carbon:recently-viewed" width="20" height="20"  style={{color: "black"}}className="icons" />
            {extened?<p>Activity</p>:null}
        </div>
        <div className={extened ? "bottom-icons" : "if-collapsed"}>
        <Icon icon="material-symbols-light:settings-outline" width="20" height="20"  style={{color: "black"}}className="icons" />
            {extened?<p>Settings</p>:null}
        </div>
    

    </div>
    
    </div>
   
    
    
    </>
}