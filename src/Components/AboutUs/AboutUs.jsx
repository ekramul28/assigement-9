import { AiOutlineCheckCircle } from 'react-icons/ai'
const AboutUs = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-bold p-10 bg-slate-200"><span className="text-orange-500">ABOUT</span> US</h1>
            <div className="lg:flex py-20 bg-slate-100 px-4 ">
                <div className="lg:w-1/2">
                    <h1 className="text-2xl font-semibold">About Our Studio</h1>
                    <p className="font-normal text-gray-400">Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.

                        Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet, tincidunt ac, viverra sed, nulla. Donec porta diam eu massa.</p>
                    <button className="btn mt-4 bg-orange-500 text-white">MEET OUR TEAM</button>
                </div>
                <div className=" lg:w-1/2">
                    <iframe className=' w-full mt-2 ' height="315" src="https://www.youtube.com/embed/buLR_EwFNXk?si=ikLMi384qfpjWJW3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                <img src="" alt="" />

                </div>
            </div>
            <div className="py-10 bg-slate-100 px-4">
                <h1 className="text-3xl font-bold text-center p-5">6 Reasons to Practice Yoga at Our Studio</h1>
                <div className="flex gap-3">

                    <div className="">
                        <div >
                            <h1 className="text-2xl font-bold flex gap-2">< AiOutlineCheckCircle /> Community</h1>
                            <p className="font-normal text-gray-400">Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold flex gap-2"> < AiOutlineCheckCircle /> Correction</h1>
                            <p className="font-normal text-gray-400">Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold flex gap-2">< AiOutlineCheckCircle />Insight</h1>
                            <p className="font-normal text-gray-400">Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                        </div>
                    </div>

                    <div className="">
                        <div>
                            <h1 className="text-2xl font-bold flex gap-2">< AiOutlineCheckCircle />Focus</h1>
                            <p className="font-normal text-gray-400">Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold flex gap-2">< AiOutlineCheckCircle />Mindfulness</h1>
                            <p className="font-normal text-gray-400">Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold flex gap-2">< AiOutlineCheckCircle />Touch</h1>
                            <p className="font-normal text-gray-400">Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque. Vivamus eget nibh.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='grid lg:grid-cols-3 gap-3 my-4'>
                <div>
                    <img src="/public/images/pexels-alexy-almond-3758056e.jpg" alt="" />
                    <h1 className="text-2xl font-bold">Our Mission</h1>
                    <p className="font-normal text-gray-400">Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div>
                    <img src="/public/images/pexels-elina-fairytale-3822906.jpg" alt="" />
                    <h1 className="text-2xl font-bold">Our Values</h1>
                    <p className="font-normal text-gray-400">Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>
                <div>
                    <img src="/public/images/pexels-valeria-ushakova-3094230.jpg" alt="" />
                    <h1 className="text-2xl font-bold">Our Vision</h1>
                    <p className="font-normal text-gray-400">Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                </div>

            </div>

        </div>
    );
};

export default AboutUs;