import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

// useState

// function App() {
//   const [count, setCount] = useState(0)

//   return ( 
//     <div>
//       <button onClick={(function() {
//         setCount(count + 1);
//       })}>Count is {count}</button>
//     </div>
//   )
// }

// useEffect

// function App() {
//   const [bankData, setBankData] = useState({});
//   const [exchangeData, setExchangeData] = useState({});

//   console.log("Hii There re-rendered");

//   useEffect(() => {
//     setTimeout(() => {
//       setBankData({income: 100});
//     }, 3000)
//   }, [])

//   useEffect(() => function() {
//     setTimeout(() => {
//       setExchangeData({returns: 100});
//     }, 1000)
//   }, [])

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return (
//     <div>
//       hi there your income tax returns are {incomeTax}
//     </div>
//   )
// }

// useMemo // useMemo is used to remember (cache) the result of a calculation so it doesn’t run again unless needed.

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => { 
//     setBankData({
//       income: 100
//     }, 5000);  
//   }, [])

//   const cryptoReturns = useMemo(() => {
//     return exchange1Data.returns + exchange2Data.returns;
//   }, [exchange1Data, exchange2Data]);
//   const incomeTax = (cryptoReturns + bankData.income) * 0.3;

//   return (
//     <div>
//       hi there your income tax return are {incomeTax}
//     </div>
//   )
// }

// useRef
// function App() {

//   const [incomeTax, setIncomeTax] = useState(20000);
//   const divRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       divRef.current.innerHTML = 10;
//     }, 5000);
//   }, [])

//   return (
//     <div>
//       hi there your income tax returns are <div ref={divRef}>{incomeTax}</div> 
//     </div>
//   )
// }

export default App
