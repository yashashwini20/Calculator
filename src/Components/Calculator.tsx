import React from "react";
import { threadId } from "worker_threads";
import Display from "./Display";
import { Keypad } from "./Keypad";
import "./Style/Calculator.css";



export default class Calculator extends React.Component{

    state = {
        input:"",
    }

    display=(val: string):void =>{
        if(this.state.input ==="0")
        this.setState({
            input:val, 
        })
        else{
        this.setState({input: this.state.input +val});
        }
     }

     equal = ():void=>{
        this.setState({input: eval(this.state.input)});
     }

     clear=():void=>{
        this.setState({input: ""})
     }
   
     render(){

        return(
            <div className="cal">
           <Display input={this.state.input}/>
           <Keypad display={this.display.bind(this)} equal={this.equal.bind(this)} clear={this.clear.bind(this)} />
            </div>
        )

    }
}

        