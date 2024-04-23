const Button = ({amount, handleClick}) => {
    return (
        <button className="m-3 p-3 text-white bg-[#00454a] rounded" onClick={handleClick} type="button">{amount}%</button>
    )
}

export default Button
