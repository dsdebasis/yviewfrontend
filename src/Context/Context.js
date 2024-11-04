import { createContext } from "react"

const CompContext = createContext({})

const VideoContext = createContext({data:"sample"})

const CmntContext = createContext({})

const CommentEditOpnClicked= createContext(false)
export { CompContext,VideoContext,CmntContext ,CommentEditOpnClicked}