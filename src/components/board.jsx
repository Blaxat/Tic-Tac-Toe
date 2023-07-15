import React,{useState} from "react";
import Square from "./square";

export default function Board(){
    const [state,update] = useState(Array(9).fill(null));
    const [curturn,setturn] = useState(true);
    const [win,setwin] = useState(false);
    const [winner,setwinner] = useState("");
    const [draw,setdraw] = useState(false);

    const reset = () => {
        for(let i = 0; i < 9; i++)
        {
            state[i] = null;
        }
        setwin(false);
        setdraw(false);
    }

    const checkdraw = () => {
        for(let i = 0; i < 9; i++)
        {
            if(state[i] == null)
            {
                return false;
            }
        }
        return true;
    }

    const checkwin = () => {
        const arr = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of arr)
        {
            let [a,b,c] = logic;
            if(state[a] != null && state[a] === state[b] && state[a] === state[c])
            {
                console.log("WINNERRR!!!!"); 
                setwinner(state[a]);
                return true;
            }   
        }
        return false;
    };

    const changes = (index) => {
        state[index] = curturn ? "X":"O";
        update(state);
        setturn(!curturn);
        setwin(checkwin());
        setdraw(checkdraw());
    };

    const check = (index) => {
        if (state[index] === null) {
            changes(index);
          }
    };

    return(
        <div className="board">
            {
                win ? <div className="winner-message">
                <h1>"{winner}" WINS</h1>
                <button className="play-again-btn" onClick={() => reset()}>RESTART</button>
                </div>:
                <>
                {
                    draw ? <div className="winner-message">
                    <h1>DRAW!!!!</h1>
                    <button className="play-again-btn" onClick={() => reset()}>RESTART</button>
                    </div>:
                        <>
                            <div className="row">
                                <Square clicked = {() => check(0)} value = {state[0]}/>
                                <Square clicked = {() => check(1)} value = {state[1]}/>
                                <Square clicked = {() => check(2)} value = {state[2]}/>
                            </div>
                            <div className="row">
                                <Square clicked = {() => check(3)} value = {state[3]}/>
                                <Square clicked = {() => check(4)} value = {state[4]}/>
                                <Square clicked = {() => check(5)} value = {state[5]}/>
                            </div>
                            <div className="row">
                                <Square clicked = {() => check(6)} value = {state[6]}/>
                                <Square clicked = {() => check(7)} value = {state[7]}/>
                                <Square clicked = {() => check(8)} value = {state[8]}/>
                            </div>
                        </>
                }
            </>
            }
        </div>
    );
}