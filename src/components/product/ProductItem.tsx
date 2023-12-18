import { Link } from "react-router-dom";
import "./css/productItem.css";
const ProductItem = ({ product }: any) => {
  console.log(product?.variant_products[0]?.variant_price);

  return (
    <div className="flex flex-col md:max-h-[500px] h-full p-3 overflow-hidden rounded-lg select-none movie-cart relative">
      <Link
        to={`/products/${product?._id}`}
        className="overflow-hidden rounded-md h-[250px]"
      >
        <span className="absolute z-10 bg-yellow-300 px-3">
          {product?.product_discount}
        </span>
        <div className="lg:w-[200px] h-full border">
          <img
            src={product?.product_image?.url}
            alt="image"
            className="w-full  h-full img-main hover:scale-110 duration-300 transition-all  object-cover rounded-md mb-5"
          />
        </div>
      </Link>
      <div className="absolute z-10 mt-[100px] hidden hover:block ml-[90px] item-cart">
        <i className="fa-solid fa-cart-shopping fa-beat text-[#f0dd0a]"></i>
      </div>
      <div className=" mt-4">
        <h5 className="mb-2 hover:text-secondary  text-center duration-200 transition-all min-h-[70px]">
          <Link to={`/products/${product?._id}`}>{product?.product_name}</Link>
        </h5>
        {/* <div className="flex items-center justify-between mb-10 text-sm ">
          <span className="font-bold text-[#CD151C] text-[15px]">
            {product?.product_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
          </span>
          <span className="text-[14px]">{product?.product_color}</span>
        </div> */}
        <p className="absolute inset-x-0 px-4 pb-3 bottom-0 h-23  flex justify-between gap-3 items-center">
          {(product?.variant_products?.length > 0 || product?.variant_products[0]?.variant_quantity === 0) ? (
            product?.variant_products[0]?.variant_discount !== 0 ? (
              <div className='flex items-center gap-1'>
                <span className="tracking-wider text-[13px] text-red-600 font-medium">
                  {product?.variant_products && product?.variant_products[0]?.variant_discount?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                <del className="tracking-wider text-[13px] text-gray-400 font-medium">
                  {product?.variant_products && product?.variant_products[0]?.variant_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</del>
              </div>
            ) : (
              <span className="tracking-wider text-[15px] text-red-600 font-medium">
                {product?.variant_products && product?.variant_products[0]?.variant_price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            )
          ) : <div className='text-red-400'>Đang cập nhật</div>}
          <span className=" text-gray-900 text-[12px]"> Đã bán: {product?.sold_quantity || 0}</span>
        </p>
        {/* <Link to={`/products/${_id}`} className="w-full py-2 text-white text-center duration-300 transition-all  rounded-lg cursor-pointer hover:text-primary bg-[#fcaf17] hover:bg-white hover:border border border-secondary mt-auto">
          Xem chi tiết
        </Link> */}
      </div>
    </div>
  );
}
export default ProductItem;
