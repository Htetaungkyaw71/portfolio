const Contact = () => {
  return (
    <div
      className="pt-10 pb-10 sm:pb-10 md:pb-10 lg:pb-24 xl:pb-24 pl-5 sm:pl-5 md:pl-5 lg:pl-3 xl:pl-3"
      id="contact"
    >
      <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl font-bold">
        Get In Touch
      </h1>
      <p className="text-gray-400 my-7 text-lg">
        I’m currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to
        get back to you!
      </p>
      <a
        href="mailto:htetaung200071@gmail.com?subject=Hello Htet"
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform -translate-x-0 -translate-y-0 bg-[#4FC6C9] group-hover:translate-x-1 group-hover:translate-y-1"></span>
        <span className="absolute inset-0 w-full h-full bg-[#0F172A] border-2 border-[#4FC6C9] group-hover:bg-[#0F172A]"></span>
        <span className="relative text-[#4FC6C9] group-hover:text-[#4FC6C9]">
          Say Hello
        </span>
      </a>
    </div>
  );
};

export default Contact;
