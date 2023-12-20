const CartWidget = ({ cantidad }) => {

  return cantidad > 0 ? (
    <span className="bg-black text-white rounded-full absolute top-3 left-10 p-1 text-xs">
      {cantidad}
    </span>
  ) : null;
}
export default CartWidget