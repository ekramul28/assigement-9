
const StartJourney = () => {
    return (
        <div className="lg:h-[500px] flex justify-center items-center">
            <div>
                <h1 className="text-2xl mt-6 lg:text-4xl font-bold text-center">START A NEW <span className="text-orange-500">JOURNEY</span> WITH US</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 my-5 gap-3">
                    <div className="card w-96 bg-base-100 hover:shadow-xl ">
                        <div className="card-body text-center ">
                            <h2 className="card-title justify-center">REAL
                                PLACE & PEOPLE</h2>
                            <p>There anyone who loves or pursues desires to obtain pain of itself, because it some great pleasure </p>
                            <div className="card-actions justify-center">
                                <button className="btn hover:bg-orange-500 hover:text-white ">More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 border-2 ">
                        <div className="card-body text-center">
                            <h2 className="card-title justify-center">EXPERT
                                INSTRUCTOR</h2>
                            <p>There anyone who loves or pursues desires to obtain pain of itself, because it some great pleasure.</p>
                            <div className="card-actions  justify-center ">
                                <button className="btn hover:bg-orange-500 hover:text-white ">More Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 hover:shadow-xl ">
                        <div className="card-body text-center">
                            <h2 className="card-title justify-center">YOUR
                                STYLE & PACE</h2>
                            <p>There anyone who loves or pursues desires to obtain pain of itself, because it some great pleasure.</p>
                            <div className="card-actions justify-center">
                                <button className="btn  hover:bg-orange-500 hover:text-white">More Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartJourney;