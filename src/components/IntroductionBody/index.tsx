export default function IntroductionBody() {
  return (
    <div className="flex flex-col pb-[20px]">
      <div className="px-5 md:px-20 xl:px-40 py-5 gap-20 text-center">
        <div className="flex justify-center mb-5">
          <div className="flex flex-row p-1 bg-purple-100  text-primary rounded-md gap-2 justify-center items-center">
            <p className="text-base font-normal text-center">
              It's as easy as going to dokan.
            </p>
          </div>
        </div>
        <div className="flex flex-col font-semibold font-syne text-80px leading-80px text-chinese-black">
          <h1>Explore, shop, repeat </h1>
          <h1>
            <span className="text-primary">{`with exciting features from Dokan`}</span>
          </h1>
        </div>

        <div className="pt-5 text-center lg:text-lg text-arsenic-gray">
          Dokan: Your one-stop shop for all your shopping needs, offering a wide
          variety of products at unbeatable prices.
        </div>
      </div>

      {/* <div className="flex flex-row 2xl:pt-[20px] gap-5 justify-center">
        <button className="primaryButton">Start shopping with Dokan</button>
        <button className="secondaryButton ">See Features</button>
      </div> */}
    </div>
  );
}
