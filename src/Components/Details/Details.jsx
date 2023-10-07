import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const details = useLoaderData();
    const detail = details.find(detail => id == detail.id);
    const { img_, name, description2, teacher_name, rating, price } = detail;
    console.log(detail);
    return (
        <div>
            <img className=" h-[600px] w-full" src={img_} alt="" />
            <h1 className="text-5xl font-extrabold my-4">{name}</h1>
            <p className="text-2xl font-bold my-3">Teacher Name: <span className="text-orange-500">{teacher_name}</span></p>
            <p className="text-xl font-bold my-2">Rating:{rating}</p>
            <p className='text-xl font-medium'>Price:<span className='text-orange-500'>{price}$</span></p>

            <p>{description2}</p>
            <Link to='/'><button className="btn my-10 text-white bg-orange-500">Go Home</button>
            </Link>
        </div>
    );
};

export default Details;