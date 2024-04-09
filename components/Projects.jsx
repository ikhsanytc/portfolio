import feather from "feather-icons";

const Projects = () => {
  return (
    <>
      <section className="pt-20" id="projects">
        <h1 className="font-bold text-4xl md:text-5xl mb-10 text-center underline underline-offset-8">
          Projects
        </h1>
        <div className="flex flex-col gap-4 px-4">
          <div className="border border-gray-700 hover:border-white cursor-pointer p-5 w-full md:w-1/2 mx-auto rounded">
            <h1 className="text-2xl font-semibold">Bot Wa</h1>
            <p className="text-sm text-gray-500">
              a bot specifically designed to work on the WhatsApp platform.
            </p>
            <div className="p-5"></div>
            <div className="flex gap-3">
              <button className="border border-gray-600 rounded py-2 px-3">
                Node js
              </button>
              <button className="border border-gray-600 rounded py-2 px-3">
                Baileys
              </button>
            </div>
            <div className="p-3"></div>
            <div>
              <a
                href="https://github.com/ikhsanytc/botwa"
                target="_blank"
                className="flex gap-2"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.github.toSvg(),
                  }}
                ></div>
                <span className="border-b-2 border-red-600">repositories</span>
              </a>
            </div>
          </div>
          <div className="border border-gray-700 hover:border-white cursor-pointer p-5 w-full md:w-1/2 mx-auto rounded">
            <h1 className="text-2xl font-semibold">Secreto</h1>
            <p className="text-sm text-gray-500">
              an application used to send messages anonymously.
            </p>
            <div className="p-5"></div>
            <div className="flex gap-3">
              <button className="border border-gray-600 rounded py-2 px-3">
                PHP
              </button>
            </div>
            <div className="p-3"></div>
            <div>
              <a
                href="https://github.com/ikhsanytc/secreto"
                target="_blank"
                className="flex gap-2"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.github.toSvg(),
                  }}
                ></div>
                <span className="border-b-2 border-red-600">repositories</span>
              </a>
            </div>
          </div>
          <div className="border border-gray-700 hover:border-white cursor-pointer p-5 w-full md:w-1/2 mx-auto rounded">
            <h1 className="text-2xl font-semibold">Toko Project</h1>
            <p className="text-sm text-gray-500">
              an application I made which aims to create an online shop and
              implement online payments in it.
            </p>
            <div className="p-5"></div>
            <div className="flex gap-3">
              <button className="border border-gray-600 rounded py-2 px-3">
                PHP
              </button>
              <button className="border border-gray-600 rounded py-2 px-3">
                Codeigniter4
              </button>
            </div>
            <div className="p-3"></div>
            <div>
              <a
                href="https://github.com/ikhsanytc/botwa"
                target="_blank"
                className="flex gap-2"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: feather.icons.github.toSvg(),
                  }}
                ></div>
                <span className="border-b-2 border-red-600">repositories</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="pb-10"></div> */}
      </section>
    </>
  );
};

export default Projects;
