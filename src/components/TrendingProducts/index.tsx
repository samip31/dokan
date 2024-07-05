import TrendingCard from "../TrendingCard";
import useFetchTrendingProducts from "@src/hooks/useFetchTrendingProducts";

export default function TrendingProducts() {
  const { productData } = useFetchTrendingProducts();

  return (
    <div className="px-5 py-20 md:p-20 justify-center gap-20">
      <div className="text-60px font-semibold leading-60px font-syne text-center text-smoky-black">
        <h1>Trending Products</h1>
      </div>
      <div className="pt-5 md:px-20 text-center md:text-lg text-secondary"></div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-8">
          {productData?.map((data, index) => (
            <TrendingCard
              key={index}
              name={data.name}
              description={data.description}
              image={data.image}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
