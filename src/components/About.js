import aboutImg from "../images/about.jpeg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="درباه" subTitle="ما" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>تفاوت را احساس کنید</h3>
          <p>
            مرکز ملی رزرواسیون اماکن اقامتی کشور به عنوان اولین و تنها مرکز رسمی
            رزرواسیون هتل در ایران که موافقت اصولی سازمان میراث فرهنگی، صنایع
            دستی و گردشگری را در این زمینه دارا است، فعالیت خود را در زمینه
            رزرواسیون هتل از سال ۱۳۸۵ آغاز کرد.
          </p>
          <p>
            این مرکز با هدف تحقق شعار "رزرو مکان اقامتی قبل از سفر" که از
            دغدغه‌های سازمان میراث فرهنگی و گردشگری بوده است، طراحی و راه‌اندازی
            شد. ما با ساعت‌ها تحقیق و بررسی کارشناسان زبده این شرکت، آخرین
            فناوری نرم‌افزاری تحت وب را در زمینه رزرواسیون اماکن اقامتی،
            بومی‌سازی کرده.
          </p>
          <a href="#" className="btn">
            بیشتر بخوانید
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
