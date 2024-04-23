import Button from "../Button"
import Result from "../Result"

const Calculator = () => {
    const handleFivePercent = () => {
        console.log('Five percent')
    }

    const handleTenPercent = () => {
        console.log('Ten percent')
    }

    const handleFifteenPercent = () => {
        console.log('Fifteen percent')
    }

    const handleTwentyFivePercent = () => {
        console.log('Twenty Five percent')
    }

    const handleFiftyPercent = () => {
        console.log('Fifty percent')
    }

    const handleCustom = () => {
        console.log('Custom')
    }

    const handleReset = () => {
        console.log('Reset')
    }

    return (
        <section className="mx-auto bg-white rounded-3xl w-2/3 flex">
            <section className="w-1/2 p-6">
                {/* Input */}
                <form>
                    <div>
                        <label htmlFor="bill" className="block">Bill</label>
                        <input type="number" id="bill" className="block rounded-lg bg-[#f3f8fb]" />
                    </div>
                    <label htmlFor="">Select Tip %</label>
                    <div className="grid grid-flow-row grid-rows-2 grid-cols-3">
                        <Button handleClick={handleFivePercent} amount={5} />
                        <Button handleClick={handleTenPercent} amount={10} />
                        <Button handleClick={handleFifteenPercent} amount={15} />
                        <Button handleClick={handleTwentyFivePercent} amount={25} />
                        <Button handleClick={handleFiftyPercent} amount={50} />
                        <Button handleClick={handleCustom} amount={'Custom '} />
                    </div>
                    <div>
                        <label htmlFor="numPeople" className="block">Number of People</label>
                        <input type="number" id="numPeople" className="block rounded-lg bg-[#f3f8fb]"/>
                    </div>
                </form>
            </section>
            <section className="grid gap-6 w-1/2 m-6 p-6 rounded-3xl bg-teal-900">
                {/* Output */}
                <div className="grid grid-cols-subgrid">
                    <Result heading='Tip Amount' amount={0}/>
                    <Result heading='Total' amount={0}/>
                </div>
                <button className="block p-3 bg-teal-100 text-teal-900 rounded-lg" onClick={handleReset} type="button">RESET</button>
            </section>
        </section>
    )
}

export default Calculator
