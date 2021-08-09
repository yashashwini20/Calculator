import React from "react";
import "./Style/Keypad.css";


type ButtonProp = {

    display : (arg:string) =>void;
    equal : () =>void;
    clear:() => void;
    

}


export class Keypad extends React.Component<ButtonProp>
{
    render(){
        const list : Array<string>= ["0","1","2","3","4","5","6","7","8","9"];
        return(
            <div className="key">
                <div className = "but">
                {list.map((numbers)=>(<button onClick = {()=>this.props.display(numbers)}>{numbers}</button>))}
                <button onClick = {()=>this.props.clear()}>Clear</button>
                <button onClick = {()=>this.props.display(".")}>.</button>
                </div>
                <div className = "operator">
                <button onClick = {()=>this.props.display("+")}>+</button>
                <button onClick = {()=>this.props.display("-")}>-</button>
                <button onClick = {()=>this.props.display("*")}>*</button>
                <button onClick = {()=>this.props.display("/")}>/</button>
                <button onClick = {()=>this.props.equal()}>=</button>

                </div>
                </div>
        );

        
    }

}