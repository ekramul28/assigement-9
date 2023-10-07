import PropTypes from 'prop-types';
const Service = ({ service }) => {
    console.log(service)
    const { name, description, img_ } = service;
    return (
        <div >
            <div className="card  bg-base-100 border-2">
                <div>
                    <img src={img_} alt="" />
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-3xl font-bold">{name}</h2>
                    <p className="text-sm font-medium">{description}</p>

                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object,
}

export default Service;