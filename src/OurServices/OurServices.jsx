import { useEffect, useState } from "react";
import Service from "./Servise/Servise";
const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/public/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl font-bold my-10 text-center">Ser<span className="text-orange-500">vices</span></h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    services?.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default OurServices;