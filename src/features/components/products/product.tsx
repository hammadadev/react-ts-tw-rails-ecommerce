import { ProductT } from "../../../types";

interface PropsT {
  product: ProductT;
}
const Product = ({ product }: PropsT) => {
  console.log(product);
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <img
        className="shrink object-cover h-48"
        src={product.image}
        alt="IMAGE"
      />
      <div className="w-full ml-10 text-red-900">${product.price}</div>
    </div>
  );
};
export default Product;
