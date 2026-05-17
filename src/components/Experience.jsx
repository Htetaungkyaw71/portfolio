const Experience = () => {
  return (
    <div
      id="experience"
      className="pl-3 sm:pl-3 md:pl-3 xl:pl-0 lg:pl-0 pr-3 sm:pr-3 md:pr-3 lg:pr-16 xl:pr-16 pt-10 sm:pt-10 md:pt-10 lg:pt-16 xl:pt-16"
    >
      {/* <h1 className="text-white uppercase mb-2 font-bold pl-6">Experience</h1> */}

      <div className="p-6 rounded-lg">
        <div className="">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">DevelopX</h2>
              <p className="text-sm text-gray-400">
                September 2023 – September 2025
              </p>
            </div>

            <p className="text-md text-gray-200 mt-2 font-semibold">
              Frontend Developer (Full-time)
            </p>
          </div>
        </div>

        <ul className="list-disc list-inside mt-4 text-gray-400">
          <li>
            Developed dynamic and engaging user interfaces using HTML, CSS, and
            JavaScript, ensuring seamless user experiences across web
            applications.
          </li>
          <li>
            Leveraged <span className="text-white font-bold">React.js</span> and
            <span className="text-white font-bold"> Next.js</span> to build
            interactive and responsive components, optimizing performance and
            enhancing user interaction.
          </li>
          <li>
            Implemented <span className="text-white font-bold">Redux</span> for
            streamlined state management, ensuring efficient data flow and
            consistent application behavior across the app.
          </li>
          <li>
            Integrated frontend with backend systems by collaborating closely
            with backend developers, ensuring seamless communication and overall
            functionality across the application stack.
          </li>
          <li>
            Web scraping using{" "}
            <span className="text-white font-bold">Puppeteer</span> to improve
            efficiency in collecting data for various purposes.
          </li>
          <li>
            Improved <span className="text-white font-bold">SEO</span> and user
            experience by employing server-side rendering (SSR) and static site
            generation (SSG) with Next.js.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
