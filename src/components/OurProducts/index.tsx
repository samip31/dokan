import Marquee from "react-fast-marquee";
import useFetchProducts from "../../hooks/useFetchProductData";
import { Link } from "react-router-dom";

export default function OurProducts() {
  // const { productData } = useFetchProducts();

  // if (isLoading) return <p>Loading...</p>;
  // if (isError) return <p>Error fetching products</p>;

  const { productData } = useFetchProducts();

  return (
    <div>
      <div className="px-5 md:px-20 justify-center gap-20">
        <div className="text-60px font-semibold leading-60px font-syne text-center">
          Our Products
        </div>
        <p className="pt-5 md:px-20 text-center md:text-lg text-secondary">
          Have a look at products available at the moment.
        </p>
        <Marquee autoFill>
          <div className="flex justify-center items-center ">
            <div className="flex flex-row gap-5 py-10">
              {productData?.map((data: any) => (
                <Link to={`/product/${data._id}`}>
                  <div className="justify-center items-center p-4  bg-white bg-opacity-80 border border-gray-300 rounded-lg w-[300px]">
                    <img
                      src={"src/assets/svg/jacket.png"}
                      alt={data.name}
                      className="w-[200px] h-[150px]"
                    />
                    <div className="flex flex-row items-center gap-10">
                      <div className="flex flex-col items-center gap-2">
                        {data.name}
                        <div>
                          <div> {data.description}</div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-400 my-5 flex"></div>
                    <div className="flex flex-row items-center gap-2">
                      <div>Price: </div>
                      <div>{data.price}</div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <div>Stock: </div>
                      <div>{data.stock}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
