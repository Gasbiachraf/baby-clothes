import React, { useState } from 'react';

export const FaqPage = () => {

    const [faqs, setFaqs] = useState([
        {
            id: 1,
            question: "How will my order be delivered to me?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 2,
            question: "What do I need to know?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 3,
            question: "How will I know if order is placed successfully?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 4,
            question: "How do I check the status of my order?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            id: 5,
            question: "Can I cancel my order?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
    ])

    return (
        <section className='flex flex-col items-center'>
            <div className='lg:w-[90%]'>
                <div className='text-2xl pt-10 font-semibold'>
                    <p className='pb-4'>Home /  <span className='text-blue-600 '>FAQ's</span></p>
                    <p id='yourcart' className='text-4xl font-bold pb-8 pt-12'>FAQ'S</p>
                </div>
                <div className='pb-16'>
                    <div className="border-2 rounded-xl px-5 bg-white ">
                        {/* <div className="flex flex-col items-center">
                            <h2 className="font-bold text-5xl mt-5 tracking-tight">
                                FAQ
                            </h2>
                            <p className="text-neutral-500 text-xl mt-3">
                                Frequenty asked questions
                            </p>
                        </div> */}
                        <div className="grid  divide-neutral-200 py-5">
                            {
                                faqs.map((element, id) => <>
                                    <div className="py-2">
                                        <details className="group ">
                                            <summary className="flex  items-center font-medium cursor-pointer list-none">
                                                <span className="transition group-open:rotate-180 ">
                                                    <svg fill="none" height="35" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="35"><path d="M6 9l6 6 6-6"></path>
                                                    </svg>
                                                </span>
                                                <span className='pl-2 text-xl'>{element.question}</span>
                                            </summary>
                                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn pt-2 text-lg">
                                                {element.answer}
                                            </p>
                                        </details>
                                    </div></>)
                            }




                        </div>
                    </div>
                </div>

                {/* <script>
	// ...
	// extend: {
    //   keyframes: {
    //     fadeIn: {
    //       "0%": { opacity: 0 },
    //       "100%": { opacity: 100 },
    //     },
    //   },
    //   animation: {
    //     fadeIn: "fadeIn 0.2s ease-in-out forwards",
    //   },
    // },
    // ...
</script> */}
            </div>
        </section>
    );
};

