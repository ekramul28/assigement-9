import PropTypes from 'prop-types';
const Yoga = ({ yoga }) => {
    const { name, description, img_, class_time, teacher_name } = yoga;
    console.log(yoga);
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl h-[550px]">
                <figure><img className='' src={img_} alt="img" /></figure>
                <div className="card-body">
                    <h2 className=" text-2xl font-semibold"><span className="text-orange-500">Name:</span>{name}</h2>
                    <h2 className="text-xl font-extrabold"><span className="text-orange-500">Time:</span>{class_time}</h2>
                    <p><span className="text-orange-500 text-lg font-medium">Teacher Name:</span><span className='font-extrabold'>{teacher_name}</span></p>
                    <p className="">{description}</p>
                </div>
            </div>


        </div>
    );
};
Yoga.propTypes = {
    yoga: PropTypes.object
}

export default Yoga;