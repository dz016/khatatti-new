import img from "../assets/eating.jpg";
const Cta = () => {
  return (
    <>
      <section
        className="  flex  justify-around items-center mb-10  md:my-10 "
        id="cta"
      >
        {" "}
        <div className="container mx-auto   md:w-[70%] flex items-center justify-center">
          <div className="  bg-gradient-to-r from-green-500 to-primary h-[60%] w-full md:rounded-3xl flex items-center justify-between overflow-hidden flex-col-reverse md:flex-row  shadow-xl shadow-gray-300">
            <div className="Cta-content flex items-center justify-center w-[100%]  p-7">
              <div className="w-[100%] md:w-[100%]">
                <h2 className="text-customDarkGreen mt-1 font-rubik lg:text-5xl md:text-3xl text-3xl font-[700]  md:leading-9 md:mb-2 mb-4 tracking-tighter md:text-left w-[90%]">
                  We offer the best deal possible.
                </h2>
                <p className="font-rubik w-[100%] font-[400] md:leading-2 md:text-base text-sm leading-tighter tracking-tighter text-customDarkGreen md:mb-10  mb-5 md:text-left">
                  Give us the feedback about our product.
                </p>
                <form className="cta-form grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="full-name"
                      className="font-rubik w-[100%] font-[500] md:leading-2 md:text-base text-sm leading-tighter tracking-tighter text-customDarkGreen md:text-left"
                    >
                      Full name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      placeholder="Your name"
                      name="name"
                      required
                      className="w-[100%] rounded-md bg-green-100 md:p-2 p-1 text-sm md:text:base"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-rubik w-[100%] font-[500] md:leading-2 md:text-base text-sm leading-tighter tracking-tighter text-customDarkGreen md:text-left"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                      className="w-[100%] rounded-md bg-green-100 md:p- p-1 text-sm md:text:base"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="message"
                      placeholder="Message"
                      required
                      className="w-[100%] rounded-md bg-green-100 md:p-1.5 p-1 text-sm md:text:base"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-800 text-white md:px-3 md:py-1.5 px-2 py-1 rounded-md"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="Cta-image h-[100%]  wd-[100%] relative">
              <img src={img} alt="" className="w-full h-full object-cover " />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-gray-900 opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
