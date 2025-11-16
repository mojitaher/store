export default function Settings() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">تنظیمات حساب</h2>

      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <label className="w-40 font-semibold">نام کاربری</label>
          <input
            type="text"
            className="flex-1 p-3 border rounded-lg shadow-sm"
            placeholder="مثلاً: Mojtaba"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <label className="w-40 font-semibold">ایمیل</label>
          <input
            type="email"
            className="flex-1 p-3 border rounded-lg shadow-sm"
            placeholder="example@email.com"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <label className="w-40 font-semibold">رمز عبور</label>
          <input
            type="password"
            className="flex-1 p-3 border rounded-lg shadow-sm"
            placeholder="********"
          />
        </div>

        <button className="bg-amber-950 text-white p-3 rounded-xl hover:scale-[1.02] transition">
          ذخیره تغییرات
        </button>
      </div>
    </div>
  );
}
