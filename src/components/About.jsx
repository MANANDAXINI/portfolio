function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-4xl font-bold text-blue-800 mb-5">About Me</h1>
        <p className="text-gray-800 leading-relaxed">
          Welcome to my portfolio! <br />
          I am <strong className="text-blue-600">Manan Daxini</strong>, currently a third-year student at <strong className="text-blue-600">Ramdeobaba University (RBU)</strong>, where I am pursuing a <strong className="text-blue-600">BTech in Electronics and Computer Science</strong>. My journey into the world of programming started with a strong interest in <strong className="text-blue-600">frontend development</strong>, which I have now mastered.
        </p>
        <p className="text-gray-800 leading-relaxed pt-3">
          I have a solid grasp of <strong className="text-red-600">C and C++</strong> for data structures and algorithms, and I am currently honing my skills in <strong className="text-green-600">backend development</strong> to complement my frontend expertise. Additionally, I have practical experience with <strong className="text-purple-600">Java, OpenCV, and Python</strong>, enabling me to tackle a variety of technical challenges.
        </p>
        <p className="text-gray-800 leading-relaxed pt-3">
          Throughout my academic career, I have developed a passion for solving complex problems and creating efficient solutions. I thrive in collaborative environments and am committed to <strong className="text-teal-600">continuous learning and growth</strong>. My goal is to leverage my skills and creativity to contribute <strong className="text-orange-600">innovative solutions</strong> that exceed expectations and positively impact the digital landscape.
        </p>

        <hr className="my-6 border-t-2 border-black" />

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold mb-2">Education & Training</h1>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li><strong className="text-blue-600">BTech</strong>, RamdeoBaba University, 2026</li>
            <li><strong className="text-blue-600">Electronics And Computer Science Engineering</strong>, RamdeoBaba University, 2026</li>
          </ul>
        </div>

        <hr className="my-6 border-t-2 border-black" />

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold mb-2">Skills and Expertise</h1>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li><strong className="text-red-600">Proficient in C, C++, JAVA, PYTHON</strong></li>
            <li><strong className="text-green-600">Experienced with HTML, CSS, TAILWIND CSS, JAVASCRIPT, REACT-JS</strong></li>
            <li><strong className="text-purple-600">Strong grasp of OPEN CV, FIGMA</strong></li>
            <li>Excellent problem-solving skills</li>
            <li>Strong communication skills</li>
          </ul>
        </div>

        <hr className="my-6 border-t-2 border-black" />

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold mb-2">Professional Experience</h1>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li>Worked on various projects (provide specific examples or case studies).</li>
            <li>Internship at (Company Name).</li>
            <li>Developed (specific skills or products).</li>
          </ul>
        </div>

        <hr className="my-6 border-t-2 border-black" />

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold mb-2">Mission Statement</h1>
          <p className="text-gray-800 leading-relaxed">
            My mission is to leverage my technical skills and creative mindset to build impactful solutions that contribute to the digital landscape. I am dedicated to continuous learning and strive to exceed expectations through innovative problem-solving and a collaborative approach to development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
