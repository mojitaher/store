export default function Orders() {
  const orders = [
    { id: "#1542", status: "در حال پردازش", date: "2025-11-15" },
    { id: "#1543", status: "تکمیل شده", date: "2025-11-14" },
    { id: "#1544", status: "لغو شده", date: "2025-11-13" },
  ];

  return (
    <div className="space-y-6" id="Cart">
      <h2 className="text-3xl font-bold">سفارش‌ها</h2>

      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 font-semibold">شماره سفارش</th>
              <th className="p-4 font-semibold">وضعیت</th>
              <th className="p-4 font-semibold">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.status}</td>
                <td className="p-4">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
