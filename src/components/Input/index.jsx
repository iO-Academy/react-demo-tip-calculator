const Input = ({label, handleChange}) => {
    return (
        <div>
            <label htmlFor="bill" className="block">{label}</label>
            <input type="number" id="bill" className="block rounded-lg bg-teal-50" defaultValue={0} onChange={handleChange}/>
        </div>
    )
}

export default Input
