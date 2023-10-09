
const Welcome = () => {

    return (
        <div data-aos="fade-down" className="md:flex items-center justify-center">
            <div className="md:w-1/2">
                <h1 className="font-bold text-center p-3 md:text-left text-2xl lg:text-4xl my-8">WELCOME TO <span className="text-orange-500">YOGA MASTER</span></h1>
                <p className="font-normal lg:text-lg p-3">Yogi is founded with our passion for yoga and we would  love to spread that love to and more people.

                    At Yogi, we do not only teach yoga, we seek to create a yoga  community where we can share daily matters, stress at work or problems in life .<br /> Yoga is the great recipe to communicate and balance your mind and body.</p>
            </div>
            <div className="md:w-1/2">
                <img src="images/image.png" alt="" />
            </div>
        </div>
    );
};

export default Welcome;