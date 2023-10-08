import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    console.log(service)
    const { name, description, img_, price, id } = service;
    return (
        <div >
            <div className="card  bg-base-100 border-2 h-[570px]">
                <div >
                    <img className='w-full h-64' src={img_} alt="" />
                </div>
                <div className="card-body  ">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p className='text-xl font-medium'>Price:<span className='text-orange-500'>{price}$</span></p>
                    <p className="text-sm  font-normal">{description}</p>
                    <Link to={`/details/${id}`}>                    <button className='btn w-full hover:bg-orange-500 hover:text-white'>Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object,
}

export default Service;