import netflix from "../../public/netflix.png";
import quiz from "../../public/quiz.jpg";
import typing from "../../public/typingtest.jpg";
import weather from "../../public/weather.jpg";
import restaurant from "../../public/rest.png";

const carditems = [
    {
        id: 1,
        logo: netflix,
        name: "Netflix Clone",
        repoLink: "https://github.com/MANANDAXINI/Netflix"
    },
    {
        id: 2,
        logo: quiz,
        name: "Quiz Website",
        repoLink: "https://github.com/MANANDAXINI/quiz-website"
    },
    {
        id: 3,
        logo: typing,
        name: "Typing Test App",
        repoLink: "https://github.com/MANANDAXINI/TYPING-TEST"
    },
    {
        id: 4,
        logo: weather,
        name: "Weather App",
        repoLink: "https://github.com/MANANDAXINI/weather-api"
    },
    {
        id: 5,
        logo: restaurant,
        name: "Restaurant Landing Page",
        repoLink: "https://github.com/MANANDAXINI/Restaurantproject"
    },
];

function Portfolio() {
    return (
        <div name="Portfolio" className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-20 mt-10">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold mb-5">Portfolio</h1>
                <span className="text-xl underline">Featured Projects</span>
            </div>
            <div className="grid gap-8 pt-10 lg:grid-cols-2">
                {/* Netflix Clone as Main Project on lg screens */}
                <div className="project-card">
                    <div className="border-2 border-gray-200 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-900 hover:border-purple-600">
                        <div className="w-full h-60 flex items-center justify-center overflow-hidden rounded-lg bg-white shadow-inner">
                            <img src={netflix} className="object-contain w-full h-full" alt="Netflix Clone" />
                        </div>
                        <div className="text-2xl font-bold mt-6 mb-2 text-center text-purple-800 hover:text-purple-900">
                            Netflix Clone
                        </div>
                        <p className="text-gray-700 mb-6 text-center">
                            A Netflix clone with a similar interface and functionality, built using React and Firebase.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                                Video
                            </button>
                            <a
                                href={carditems[0].repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 transform hover:scale-105 flex items-center"
                            >
                                Source Code <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 1a9 9 0 0 0-6.364 15.364l7.778 7.778a1 1 0 0 0 1.414 0l7.778-7.778A9 9 0 0 0 10 1zM5.879 14.879a7 7 0 1 1 9.243-9.243 1 1 0 0 0-1.414-1.414 5 5 0 1 0-6.364 6.364 1 1 0 0 0 0 1.414 3 3 0 0 1 3.536 3.536 1 1 0 0 0 1.414 0 5 5 0 0 0 0-7.07l-.707-.707-2.121 2.121.707.707a3 3 0 0 1 0 4.242 1 1 0 0 0 0 1.414 5 5 0 0 0 0-7.07 1 1 0 0 0-1.414 0 3 3 0 0 1-3.536 3.536 1 1 0 0 0-1.414 0 5 5 0 0 0 0-7.07l-.707-.707-2.121 2.121.707.707a7 7 0 0 1 0 9.9z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Other Projects */}
                {carditems.slice(1).map(({ id, logo, name, repoLink }) => (
                    <div key={id} className="project-card mt-8">
                        <div className="border-2 border-gray-200 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-gray-900 hover:border-purple-600">
                            <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg bg-white shadow-inner">
                                <img src={logo} className="object-contain w-full h-full" alt={name} />
                            </div>
                            <div className="text-xl font-bold mt-6 mb-2 text-center text-gray-800 hover:text-gray-900">
                                {name}
                            </div>
                            <p className="text-gray-700 mb-6 text-center">
                                {name} project built using modern web technologies.
                            </p>
                            <div className="flex justify-center space-x-4">
                                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 transform hover:scale-105">
                                    Video
                                </button>
                                <a
                                    href={repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full shadow-md transition duration-300 transform hover:scale-105 flex items-center"
                                >
                                    Source Code <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 1a9 9 0 0 0-6.364 15.364l7.778 7.778a1 1 0 0 0 1.414 0l7.778-7.778A9 9 0 0 0 10 1zM5.879 14.879a7 7 0 1 1 9.243-9.243 1 1 0 0 0-1.414-1.414 5 5 0 1 0-6.364 6.364 1 1 0 0 0 0 1.414 3 3 0 0 1 3.536 3.536 1 1 0 0 0 1.414 0 5 5 0 0 0 0-7.07l-.707-.707-2.121 2.121.707.707a3 3 0 0 1 0 4.242 1 1 0 0 0 0 1.414 5 5 0 0 0 0-7.07 1 1 0 0 0-1.414 0 3 3 0 0 1-3.536 3.536 1 1 0 0 0-1.414 0 5 5 0 0 0 0-7.07l-.707-.707-2.121 2.121.707.707a7 7 0 0 1 0 9.9z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
