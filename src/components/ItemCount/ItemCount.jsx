import "./ItemCount.css";
import {useState} from "react";

export const ItemCount = ({initial, stock= 0, onAdd}) => {
    const [count, setCount] = useState(initial);

    const decre = () => {
        setCount(count - 1);
    }

    const incre = () => {
        setCount(count + 1);
    }

    return (
        <div className="itemCount">
            <button className="itemCountBtn"disabled ={ count <= 1 } onClick={decre}>-</button>
            <span>{ count }</span>
            <button className="itemCountBtn"disabled ={ count >= stock } onClick={incre}>+</button>
            <div>
                <button className="itemCountBtn" disabled ={ stock <= 0} onClick={() => {onAdd(count); setCount(1)}}>Agregar al carrito</button>
            </div>
        </div>
    );
};

















/* import { useState } from "react"

export const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(0);

    const carResta = () => {
        if (count > 0 )setCount ( count - 1)
    }

    const carSuma = () => {
        if (stock > count) setCount ( count + 1)

    }

    return (
    <div>
        <div>
            <button onClick={() => carResta( )}>-</button>
            <span>{count}</span>
            <button onClick={() => carSuma( )}>+</button>
        </div>
        <div>
            <button disabled={!stock} onClick={() => onAdd (count)}>Agregar al carrito</button>
        </div>
    </div>
    )
} */