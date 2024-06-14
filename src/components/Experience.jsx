import html from "../../public/html.webp"
import css from "../../public/css.png"
import cpp from "../../public/cpp.png"
import java from "../../public/java.png"
import reactjs from "../../public/react.png";
import opencv from "../../public/opencv.jpg";
import js from "../../public/js.png";
import images from "../../public/images.png";

const skill = [
    {
        id: 1,
        logo: cpp,
        name: "C++",
    },
    {
        id: 2,
        logo: java,
        name: "Java",
    },
    {
        id: 3,
        logo: html,
        name: "html",
    },
    {
        id: 4,
        logo: css,
        name: "CSS",
    },
    {
        id: 5,
        logo: js,
        name: "Javascript",
    },
    {
        id: 6,
        logo: reactjs,
        name: "ReactJS",
    },
    {
        id: 7,
        logo: images,
        name: "Tailwind CSS",
    },
    {
        id: 8,
        logo: opencv,
        name: "OpenCV",
    },
];
function Experience() {
    return (
        <div name="Experience"className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 my-16">
            <div >
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <span className="underline">I Have Been Working On these Technologies in Recent Times</span>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8 my-3">
                {skill.map(({ id, logo, name }) => (
                    <div  className="flex-col items-center   p-1 cursor-pointer hover:scale-110 duration-100"key={id}>
                        <img src={logo}  className="md:h-[150px]  "alt={name} />
                        <div >
                            {name}
                        </div>
                        
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
