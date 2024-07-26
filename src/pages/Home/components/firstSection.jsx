
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/ContextProvider';
import image1 from "../../../assets/img/herosection.png"
import image2 from "../../../assets/img/Isolation_Mode.png"
import image3 from "../../../assets/img/Isolation_Mode (1).png"
import image4 from "../../../assets/img/Isolation_Mode (2).png"
import image5 from "../../../assets/img/Isolation_Mode (3).png"
import image6 from "../../../assets/img/Group 53.png"
export const FirstSectionHome = () => {
    const [test, setTest, test2, setTest2] = useContext(MyContext)
    return (
        <>



            <section className=' bg-center bg-cover bg-no-repeat lg:h-[100vh] lg:w-full relative' style={{ backgroundImage: `url(${image1})` }}>
                <div className='w-[50vw] absolute end-0 top-24'>
                    <h1 className=' lg:pr-24 lg:pt-16 lg:text-5xl'>Play, learn, & grow!</h1>
                    <p className='pt-6 pb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='bg-yellow-400 py-3 px-8 rounded-full'>Shop now</button>
                </div>
            </section>
            <section className='text-center py-10'>
                <h1 className='text-2xl font-bold '>Find the Perfect Toy </h1>
                <p className='pb-10'>our collections</p>
                <div className='flex justify-center gap-16 '>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image2} alt="" />
                        <p className='decoration-current'>Playsets</p>
                    </div>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image3} alt="" />
                        <p>Control Toys</p>
                    </div>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image4} alt="" />
                        <p>Educational Toys</p>
                    </div>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image5} alt="" />
                        <p>Eco-friedly Toys</p>
                    </div>
                    <div>
                        <img className='lg:w-[12vw] lg:h-[20vh] pb-2' src={image6} alt="" />
                        <p>Stuffed Toys</p>
                    </div>
                </div>
            </section>


            <section>



            </section>





        </>
    );
}
