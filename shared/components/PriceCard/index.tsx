import React from "react";

interface Props {
    prices: Currency[];
}

const PriceCard: React.FunctionComponent<Props> = (props) => {
    const {prices} = props;

    return (
        <div className="px-10">
            <div className="w-full px-4 py-4 bg-white mt-6 shadow-lg rounded-lg">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="flex justify-center">
                        <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                            Basic
                        </span>
                    </div>
                    <div className="mt-4 flex justify-center text-6xl leading-none font-extrabold">
                        $10
                        <span className="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500">
                            /month
                        </span>
                    </div>
                </div>
                <p className="text-md mt-4">Plan include :</p>
                <ul className="text-sm w-full mt-6 mb-6">
                    <li className="mb-3 flex items-center ">
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            stroke="currentColor"
                            fill="green"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        All illimited components
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            stroke="currentColor"
                            fill="green"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        Own custom Tailwind styles
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            stroke="currentColor"
                            fill="green"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        Unlimited Templates
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            stroke="currentColor"
                            fill="green"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        Free premium dashboard
                    </li>
                    <li className="mb-3 flex items-center ">
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            stroke="currentColor"
                            fill="green"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        Best ranking
                    </li>
                    <li className="mb-3 flex items-center opacity-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            className="h-6 w-6 mr-2"
                            fill="red"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        Prenium svg
                    </li>
                    <li className="mb-3 flex items-center opacity-50">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6"
                            height="6"
                            className="h-6 w-6 mr-2"
                            fill="red"
                            viewBox="0 0 1792 1792"
                        >
                            <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                        </svg>
                        My wife
                    </li>
                </ul>
                <button
                    type="button"
                    className="w-full px-3 py-3 text-sm shadow rounded-lg text-indigo-500 hover:text-white bg-white hover:bg-indigo-500 transition-colors duration-700 transform"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default PriceCard;
