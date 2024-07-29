
import './firstSection.sass'
import error from '../../../assets/img/error.jpeg'
import { Link } from 'react-router-dom';

export const FirstSectionError = () => {
    return (
        <div>
            
            <div class="py-10  flex items-center">
                <div class="container flex flex-col md:flex-row lg:w-[100vw] items-center justify-center px-5 text-gray-700">
                    <div class="max-w-md lg:w-[100%]">
                        <div class="text-5xl font-dark font-bold">404</div>
                        <p
                            class="text-2xl md:text-3xl font-light leading-normal"
                        >Sorry we couldn't find this page. </p>
                        <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                        <Link to = {'/'}><button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button></Link>
                    </div>
                    <div class="max-w-lg  lg:w-[100%]">
                        <img src={error} alt="" />

                    </div>

                </div>
            </div>
        </div>
    );
};

