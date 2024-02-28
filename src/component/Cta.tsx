import img from "../assets/eating.jpg";
const Cta = () => {
  return (
    <>
      <section className="  flex  justify-around items-center  md:my-10 my-2">
        {" "}
        <div className="container mx-auto  h-[100vh] w-[70%] flex items-center justify-center">
          <div className="  bg-gradient-to-r from-green-500 to-primary h-[60%] w-full rounded-3xl flex items-center justify-between overflow-hidden">
            <div className="Cta-content flex items-center justify-center w-[75%]  p-7">
              <div className="">
                <h2 className="text-customDarkGreen mt-1 font-rubik md:text-5xl text-3xl font-[500]  md:leading-10 md:mb-9 mb-4 tracking-tighter  text-center md:text-left w-[90%]">
                  We offer the best deal possible.
                </h2>
                <p className="font-rubik w-[100%] font-[400] md:leading-2 md:text-base text-sm leading-tighter tracking-tighter text-customDarkGreen md:mb-10  mb-5 md:text-left">
                  Give us the feedback about our product.
                </p>
                <form className="cta-form grid grid-cols-2 gap-4 md:grid-cols-2 md:gap-6">
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
                      className="w-[100%] rounded-md bg-green-100 p-2"
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
                      className="w-[100%] rounded-md bg-green-100 p-2"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="message"
                      placeholder="Message"
                      required
                      className="w-[100%] rounded-md bg-green-100 p-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-800 text-white px-4 py-2 rounded-md"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            <div className="Cta-image h-[100%] w-[50%] relative">
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
