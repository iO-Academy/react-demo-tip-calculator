import { useEffect, useState } from "react"
import Button from "../Button"
import Result from "../Result"
import Input from "../Input"

const Calculator = () => {
    const [bill, setBill] = useState(100)
    const [people, setPeople] = useState(2)
    const [tipPercent, setTipPercent] = useState(0)
    const [tipPerPerson, setTipPerPerson] = useState(0)
    const [pricePerPerson, setPricePerPerson] = useState(0)

    const handleBill = (event) => {
        console.log(event.target.value)
        setBill(parseFloat(event.target.value))
    }
    
    const handlePercent = (n) => {
        return () => {
            setTipPercent(n)
        }
    }
    
    const handleCustom = () => {
        console.log('Custom')
    }
    
    const handlePeople = (event) => {
        setPeople(parseFloat(event.target.value))
    }
    
    const handleReset = () => {
        setBill(0)
        setPeople(1)
        setTipPercent(0)
    }

    useEffect(() => {
        const tip = Math.ceil(((bill * 100) * (tipPercent / 100)) / people) / 100
        setTipPerPerson(tip)
        setPricePerPerson((bill + tip) / people)
    }, [bill, people, tipPercent])

    return (
        <section className="mx-auto bg-white rounded-3xl w-2/3 flex">
            <section className="w-1/2 p-6">
                {/* Input */}
                <form>
                    <div>
                        <label htmlFor="bill" className="block">Bill</label>
                        <input type="number" id="bill" className="block rounded-lg bg-teal-50" value={bill} defaultValue={0} onChange={handleBill}/>
                    </div>
                    <label htmlFor="">Select Tip %</label>
                    <div className="grid grid-flow-row grid-rows-2 grid-cols-3">
                        <Button handleClick={handlePercent(5)} amount={5} />
                        <Button handleClick={handlePercent(10)} amount={10} />
                        <Button handleClick={handlePercent(15)} amount={15} />
                        <Button handleClick={handlePercent(25)} amount={25} />
                        <Button handleClick={handlePercent(50)} amount={50} />
                        <Button handleClick={handleCustom} amount={'Custom '} />
                    </div>
                    <div>
                        <label htmlFor="numPeople" className="block">Number of People</label>
                        <input type="number" id="numPeople" className="block rounded-lg bg-teal-50" value={people} defaultValue={1} onChange={handlePeople}/>
                    </div>
                </form>
            </section>
            <section className="grid gap-6 w-1/2 m-6 p-6 rounded-3xl bg-teal-900">
                {/* Output */}
                <div className="grid grid-cols-subgrid">
                    <Result heading='Tip Amount' amount={tipPerPerson.toFixed(2)}/>
                    <Result heading='Total' amount={pricePerPerson.toFixed(2)}/>
                </div>
                <div>{/* This div intentionally left blank */}</div>
                <button className="block p-3 bg-teal-100 text-teal-900 rounded-lg" onClick={handleReset} type="button">RESET</button>
            </section>
        </section>
    )
}

export default Calculator
