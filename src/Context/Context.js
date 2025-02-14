import { createContext } from "react"
const CompContext = createContext({})
const CmntContext = createContext({})

const CommentEditOpnClicked= createContext(false)
const VideoEditOpnClicked= createContext(false)
export { CompContext,CmntContext ,CommentEditOpnClicked,VideoEditOpnClicked}