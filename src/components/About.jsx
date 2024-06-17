function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-4xl font-bold text-blue-800 mb-5">About Me</h1>
        <p className="text-gray-800 leading-relaxed">
          Welcome! I’m <strong className="text-blue-600">Manan Daxini</strong>, a third-year BTech student at <strong className="text-blue-600">Ramdeobaba University (RBU)</strong>, specializing in <strong className="text-blue-600">Electronics and Computer Science</strong>. I started with a passion for <strong className="text-blue-600">frontend development</strong> and have now mastered it.
        </p>
        <p className="text-gray-800 leading-relaxed pt-3">
          Proficient in <strong className="text-red-600">C and C++</strong> for data structures and algorithms, I'm enhancing my <strong className="text-green-600">backend skills</strong> and have experience with <strong className="text-purple-600">Java, OpenCV, and Python</strong>. 
        </p>
        <p className="text-gray-800 leading-relaxed pt-3">
          I thrive on solving complex problems and creating efficient solutions. I'm committed to <strong className="text-teal-600">continuous learning</strong> and aim to deliver <strong className="text-orange-600">innovative solutions</strong> that make a positive impact.
        </p>

        <hr className="my-6 border-t-2 border-black" />

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold mb-2">Education & Training</h1>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li><strong className="text-blue-600">BTech</strong>, RamdeoBaba University, 2026</li>
            <li><strong className="text-blue-600">Electronics and Computer Science Engineering</strong>, RamdeoBaba University, 2026</li>
          </ul>
        </div>

        <hr className="my-6 border-t-2 border-black" />

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold mb-2">Skills and Expertise</h1>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li><strong className="text-red-600">C, C++, Java, Python</strong></li>
            <li><strong className="text-green-600">HTML, CSS, Tailwind CSS, JavaScript, React.js</strong></li>
            <li><strong className="text-purple-600">OpenCV, Figma</strong></li>
            <li>Problem-solving and communication</li>
          </ul>
        </div>

        <hr className="my-6 border-t-2 border-black" />

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold mb-2">Professional Experience</h1>
          <ul className="list-disc list-inside ml-4 text-gray-800">
            <li>Various projects (details pending).</li>
            <li>Internship at (Company Name).</li>
            <li>Developed (specific skills or products).</li>
          </ul>
        </div>

        <hr className="my-6 border-t-2 border-black" />

        <div className="mb-8">
          <h1 className="text-blue-800 font-semibold mb-2">Mission Statement</h1>
          <p className="text-gray-800 leading-relaxed">
            My mission is to leverage my technical skills to create impactful solutions, continuously learn, and exceed expectations through innovative problem-solving and collaboration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
