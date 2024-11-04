
import { CommentEditOpnClicked } from "./Context.js"
import React from "react"

function CommentEditOpnProvider({ children }){
        
        const [buttonClicked, setButtonClicked] = React.useState(null)
      
        return (
                <CommentEditOpnClicked.Provider value={{buttonClicked, setButtonClicked}}>{children}
                </CommentEditOpnClicked.Provider >
        );
        
}

export {CommentEditOpnProvider}