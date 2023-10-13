import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/products";
import Product from "./product";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../../../redux/store";
export const Products = () => {
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="my-8 grid grid-rows-4 grid-flow-col gap-4">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};
