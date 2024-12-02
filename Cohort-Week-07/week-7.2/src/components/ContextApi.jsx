import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "../store/atoms/count";
import React from "react";

function ContextApi() {

    // wrap anyone that wants to use the teleported value inside a provider
    return (
        <div>
            <RecoilRoot>
                <Count/>
            </RecoilRoot>
        </div>
    )
}

function Count() {
    return <div>
        <CountRender />
        <Buttons />
        <EvenCountRenderer />
    </div>
}

function CountRender() {
    const count = useRecoilValue(countAtom);
    return <div>
        {count}
    </div>
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    console.log("Buttons re-rendered");

    return <div>
        <button onClick={() => {
        setCount(count => count + 1)
    }}>Increase</button>

        <button onClick={() => {
            setCount(count => count - 1)
        }}>Decrease</button>
    </div>
}

function EvenCountRenderer() {
    const isEven = useRecoilValue(evenSelector);

    return <div>
        {isEven ? "It is even" : null}
    </div>
}

export default ContextApi;