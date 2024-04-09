const About = () => {
  return (
    <>
      <section className="h-screen pt-20" id="about">
        <h1 className="font-bold text-4xl md:text-5xl text-center mb-10 underline underline-offset-8">
          About me
        </h1>
        <div className="px-5">
          <div className="grid grid-flow-col grid-rows-4 md:grid-rows-1 gap-4">
            <p>
              I am a website and Android application developer, named Ikhsan and
              I am 15 years old living in Indonesia, specifically in the Depok
              area. I try my best to keep up with developments in web and app
              technology.
            </p>
            <p>
              Using a used laptop, I learned various things about coding and
              gained quite an insight into the world of coding. To create a
              website I use{" "}
              <a
                href="https://react.dev/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                React
              </a>{" "}
              or{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Next JS
              </a>{" "}
              technology, and for Android apps I use{" "}
              <a
                href="https://reactnative.dev/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                React Native
              </a>{" "}
              or{" "}
              <a
                href="https://flutter.dev/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Flutter
              </a>{" "}
              (currently learning).
            </p>
            {/* <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ut
              temporibus aspernatur expedita similique. Dolor quod ratione natus
              voluptatum reiciendis voluptatibus, eligendi ad id nobis impedit
              enim laudantium. Quam deserunt consectetur eveniet eum eaque in
              vero quaerat deleniti magni tempora!
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
