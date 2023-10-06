
const Welcome = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="1/2">
                <h1 className="font-bold text-4xl my-8">WELCOME TO <span className="text-orange-500">YOGI</span></h1>
                <p className="font-normal text-lg">Yogi is founded with our passion for yoga and we would  love to spread that love to and more people.

                    At Yogi, we do not only teach yoga, we seek to create a yoga <br /> community where we can share daily matters, stress at work or problems in life .<br /> Yoga is the great recipe to communicate and balance your mind and body.</p>
            </div>
            <div className="w-3/4">
                <img src="/public/images/image.png" alt="" />
            </div>
        </div>
    );
};

export default Welcome;