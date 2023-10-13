import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/products";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../../../redux/store";
export const Products = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  return <div className="flex">Hi</div>;
};
