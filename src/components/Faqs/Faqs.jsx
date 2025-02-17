import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const Faqs = ({ques,ans}) => {
  return (
    <Accordion style={{width:"80%",margin:"auto",backgroundColor:"#204066"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
          <Typography component="span" alignContent={"center"} fontSize={["1.5em"]} style={{color:"yellow"}}>{ques}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{width:"90%",margin:"auto",fontSize:["1em"],color:"white"}}>
          {ans}
        </AccordionDetails> 
    </Accordion>
  )
}

export default Faqs