import React, { useEffect, useState } from "react";
import { db } from './firebox-config'

import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import Table from "./Table";
function App() {

  const [user, setUser] = useState(" ");
  const [contact, setContact] = useState(0);
  const [laptop, setLaptop] = useState(" ");
  const [laptopNumber, setLaptopNumber] = useState(" hello ");
  const [problem, setProblem] = useState(0);


  const [records, setRecords] = useState([]);
  const collectionRef = collection(db, "repair");

  const creatUser = async () => {
    console.log(laptopNumber)
    await addDoc(collectionRef, { name: user, contact, laptop, laptopNumber:laptopNumber, problem })
    setRecords(records);
  }

  const clearData = () => {
    
    setUser("")
    setContact(0)
    setLaptop("")
    setLaptopNumber("")
    setProblem("")

  }

  const userDelete =  (id) => {
      const data = doc(db, "repair", id)
      deleteDoc(data);

  }
  useEffect(() => {
        const getRecords = async () => {
          const data = await getDocs(collectionRef);
          let callingData = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
          setRecords(callingData);
        }

        getRecords();
  }, [])

  return (

    <>
      <div className="flex py-3 bg-slate-700 text-2xl text-center text-white px-5 font-semibold text-sans">Comcare</div>

        <div className="flex">
        <div className="App mt-8 flex flex-col justify-center w-1/4 shadow-lg p-5">
          <h1 className="font-semibold font-sans text-2xl">Insert Record</h1>
          <div className="flex flex-col">
            <label>Name:</label>
            <input className="border border-black rounded" type="text" onChange={(e) => setUser(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label>Contact:</label>
            <input className="border border-black rounded" type="number" onChange={(e) => setContact(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label>Laptop-Name:</label>
            <input className="border border-black rounded" type="text" onChange={(e) => setLaptop(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label>Laptop-sl-no:</label>
            <input className="border border-black rounded" type="text" onChange={(e) => setLaptopNumber(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label>Laptop-Problem:</label>
            <input className="border border-black rounded" type="text" onChange={(e) => setProblem(e.target.value)} />
          </div>
          <button className="px-2 py-1 mt-3  bg-indigo-700 text-white rounded outline-0" type="submit" onClick={creatUser}>Submit</button>
        </div>
        <Table data={records} userDelete={(id) => userDelete(id)}/>
      </div>
    </>
  );
}

export default App;
