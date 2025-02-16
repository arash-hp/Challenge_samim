import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box sx={{ direction: "rtl", fontFamily: "Iranian Sans,sans-serif" }}>
      <h1>سناریوهای دیده شده</h1>
      <h3>نمایش اقلام</h3>
      <h3>ایجاد سبد خرید</h3>
      <h3>خالی بودن سبد خرید</h3>
      <h3>حذف آیتم های سبد خرید</h3>
      <h3>آپدیت سبد خرید</h3>
      <h3>جلوگیری از افزدن آیتم تکراری به سبد خرید </h3>
      <h3>پیاده سازی قابلیت scroll infinite</h3>
      <h3>ایجاد قابلیت سرچ در اقلام با استفاده از debounce</h3>
      <h2>چند نکته :</h2>
      <h3>
        ریسپانس دریافتی مناسب اجرای scroll infinite نبود و به هر حال کلیت سناریو
        پیاده سازی گردید و همینطور سرچ
      </h3>
      <h3>تایم اجری این پروژه برای من حدود 4 ساعت کم و بیش به درازا کشید.</h3>
      <h3>
        از دلایل آن می توان به پیاه سازی scroll infinite برای اولین بار با react
        query نام برد.
      </h3>
    </Box>
  );
};

export default Home;
