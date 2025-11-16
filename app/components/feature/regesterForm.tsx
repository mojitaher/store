"use client";

export default function RegesterForm({ closeBtn }: { closeBtn: () => void }) {
  //   const { username, password, setUsername, setPassword, login } = useAuth();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={closeBtn}
    >
      <div
        className="bg-white p-6 rounded-2xl w-80 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center mb-5">ثبت نام</h2>

        <input
          type="text"
          placeholder="نام کاربری"
          className="w-full p-3 border rounded-xl mb-4"
        />
        <input
          type="text"
          placeholder="ادرس ایمیل"
          className="w-full p-3 border rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full p-3 border rounded-xl mb-4"
        />

        <button className="w-full py-3 bg-violet-600 text-white rounded-xl">
          ثبت نام
        </button>

        <button
          onClick={closeBtn}
          className="w-full py-3 mt-3 bg-gray-200 rounded-xl"
        >
          بستن
        </button>
      </div>
    </div>
  );
}
