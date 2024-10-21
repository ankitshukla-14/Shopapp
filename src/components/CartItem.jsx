import { FcDeleteDatabase } from "react-icons/fc"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
  return(
    <div className="flex px-9 py-10 space-x-9">
      <div className="h-[160px] mt-8 mr-3 py-3 px-3">
        <img src={item.image} className="h-full w-full"></img>
      </div>

      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left w-56 mt-1">{item.title}</h1>
        <p className="w-60 text-gry-600 font-normal text-[15px] mt-4">{item.description.slice(0,81)+"..."}</p>
        <div className="flex justify-between mt-5 mr-6">
          <p className="text-green-600 font-semibold">${item.price}</p>
          <div onClick={deleteItem} className="text-[30px] hover:bg-red-600 hover:cursor-pointer mr-4">
            <FcDeleteDatabase/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartItem;