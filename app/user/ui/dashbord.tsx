export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">داشبورد</h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-bold">سفارش‌ها</h3>
          <p className="text-gray-500 mt-2">۲۴ سفارش در ماه</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-bold">پیام‌ها</h3>
          <p className="text-gray-500 mt-2">۵ پیام جدید</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-lg font-bold">وضعیت حساب</h3>
          <p className="text-gray-500 mt-2">فعال و سالم ✔</p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
        <h2 className="text-2xl font-bold mb-3">آخرین فعالیت‌ها</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="p-3 bg-gray-50 rounded-xl">ثبت سفارش جدید #1542</li>
          <li className="p-3 bg-gray-50 rounded-xl">ویرایش اطلاعات پروفایل</li>
          <li className="p-3 bg-gray-50 rounded-xl">مشاهده فاکتورهای پرداخت</li>
        </ul>
      </div>
    </div>
  );
}
