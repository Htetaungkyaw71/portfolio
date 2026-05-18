const Experience = () => {
  return (
    <div
      id="experience"
      className="pl-3 sm:pl-3 md:pl-3 xl:pl-0 lg:pl-0 pr-3 sm:pr-3 md:pr-3 lg:pr-16 xl:pr-16 pt-10 sm:pt-10 md:pt-10 lg:pt-16 xl:pt-16"
    >
      {/* <h1 className="text-white uppercase mb-2 font-bold pl-6">Experience</h1> */}

      {/* <div className="p-6 rounded-lg">
        <div className="">
          <div>
            <div className="flex items-center max-sm:flex-col max-sm:items-start justify-between">
              <h2 className="text-lg font-bold text-white">DevelopX</h2>
              <p className="text-sm max-sm:text-xs text-gray-400">
                September 2023 – September 2025
              </p>
            </div>

            <p className="text-md text-gray-200 max-sm:text-sm mt-2 font-semibold">
              Frontend Developer (Full-time)
            </p>
          </div>
        </div>

        <ul className="list-disc max-sm:text-sm list-inside mt-4 text-gray-400">
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
      </div> */}
      <div className="p-6 rounded-lg max-w-2xl mx-auto">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h2 className="text-xl font-bold text-white tracking-wide">
              DevelopX
            </h2>
            <p className="text-sm text-gray-400 font-medium">
              September 2023 – September 2025
            </p>
          </div>

          <p className="text-base text-gray-200 mt-1.5 font-semibold">
            Frontend Developer (Full-time)
          </p>
        </div>

        {/* Changed to list-outside, added pl-5 for indentation, and space-y-3 for separation */}
        <ul className="list-disc list-outside pl-5 mt-5 space-y-3 text-sm sm:text-base text-gray-400 leading-relaxed">
          <li>
            Developed dynamic and engaging user interfaces using HTML, CSS, and
            JavaScript, ensuring seamless user experiences across web
            applications.
          </li>
          <li>
            Leveraged{" "}
            <strong className="text-white font-semibold">React.js</strong> and{" "}
            <strong className="text-white font-semibold">Next.js</strong> to
            build interactive and responsive components, optimizing performance
            and enhancing user interaction.
          </li>
          <li>
            Implemented{" "}
            <strong className="text-white font-semibold">Redux</strong> for
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
            <strong className="text-white font-semibold">Puppeteer</strong> to
            improve efficiency in collecting data for various purposes.
          </li>
          <li>
            Improved <strong className="text-white font-semibold">SEO</strong>{" "}
            and user experience by employing server-side rendering (SSR) and
            static site generation (SSG) with Next.js.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
