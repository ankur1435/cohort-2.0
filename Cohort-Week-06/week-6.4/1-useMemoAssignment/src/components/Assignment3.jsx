import React, { useMemo, useState } from "react";

export const Assignment3 = () => {
    const [items, setItems] = useState([
        {name: "Chocolates", value: 10},
        {name: "Chips", value: 20},
        {name: "Onions", value: 30},
        {name: "Tomato", value: 30},
    ]);

    const totalValue = useMemo(() => {
        let totalValue = 0;
        for(let i=0; i<items.length; i++) {
            totalValue = totalValue + items[i].value;
        }
        return totalValue;
    }, [items]);
    

    return (
        <div>
            <ul>
                {items.map((item, index) =>(
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    )
}