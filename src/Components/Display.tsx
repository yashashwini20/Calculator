
import { render } from "@testing-library/react";
import React from "react";
import "./Style/Display.css"; 

interface Iprops{
   input?: string;
}


export default function Display(props: Iprops)
{
    return(
    <input className ="input" value={props.input}/>
    );
}