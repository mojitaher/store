import { Trash2 } from "lucide-react";

export interface CartItem {
  id: number;
  title: string;
  text: string;
  qty: number;
  price: number;
  img: string;
}

interface Props {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function CartModal({ cart, setCart }: Props) {
  const increase = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrease = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="absolute top-12 right-0 w-96 bg-white shadow-2xl rounded-2xl p-4 z-50 max-h-[500px] overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">سبد خرید</h3>

      {cart.length === 0 && (
        <p className="text-center py-10 text-gray-500">سبد خرید خالی است</p>
      )}

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-xl"
            />

            <div className="flex-1 px-3">
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-xs text-gray-500">{item.text}</p>
            </div>

            <div className="flex items-center gap-2">
              {item.qty === 1 ? (
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 rounded-full hover:bg-red-100"
                >
                  <Trash2 size={18} className="text-red-500" />
                </button>
              ) : (
                <button
                  onClick={() => decrease(item.id)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
                >
                  -
                </button>
              )}

              <span className="text-sm font-semibold">{item.qty}</span>

              <button
                onClick={() => increase(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 mt-4 flex flex-col gap-3">
        <div className="flex items-center justify-between font-semibold text-lg">
          <span>مبلغ قابل پرداخت:</span>
          <span>
            {cart
              .reduce((sum, item) => sum + item.price * item.qty, 0)
              .toLocaleString()}{" "}
            تومان
          </span>
        </div>

        <button className="w-full py-3 bg-red-500 text-white rounded-xl text-center text-lg hover:bg-red-600 transition">
          ثبت سفارش
        </button>
      </div>
    </div>
  );
}
