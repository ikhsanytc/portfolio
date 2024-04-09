const Hero = () => {
  return (
    <>
      <section className="hero h-screen" id="home">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src="/profile.png"
              loading="lazy"
              width={300}
              className="mx-auto"
              alt=""
            />
            <h1 className="text-2xl lg:text-5xl md:text-5xl font-bold">
              Muhammad Ikhsan
            </h1>
            <p className="font-thin">
              Web Developer | Back-End | Apps Developer
            </p>
            <p className="py-6">
              A web and app developer from the lower middle class in Indonesia,
              who wants computer education in Indonesian schools to be better.
            </p>
            <a className="btn btn-primary text-white" href="#about">
              About me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
