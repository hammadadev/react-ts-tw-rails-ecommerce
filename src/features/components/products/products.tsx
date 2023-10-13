import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/products";
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

  console.log(products);
  if (isLoading) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }
  return <div className="flex">Hi</div>;
};
