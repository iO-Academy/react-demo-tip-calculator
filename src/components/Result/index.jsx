const Result = ({heading, amount}) => {
    return (
        <div className="flex">
            <div className="w-1/2 m-3">
                <h4 className="text-md text-white">{heading}</h4>
                <h5 className="text-sm text-teal-500">/ person</h5>
            </div>
            <div className="w-1/2 my-3 text-teal-300 text-right align-middle text-3xl">
                <span className="">${amount}</span>
            </div>
        </div>
    )
}

export default Result
