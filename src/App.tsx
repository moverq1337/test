import clsx from "clsx";
import "./styles.css";

/* 1. В папке src/assets хранятся изображения, которые нужно поместить в переменную IMAGES
 * и отобразить их в виде галереи случайным образом.
 *
 * 2. По умолчанию, контент должен быть отцентрирован и вмещать не более 5 изображений в строку.
 * При изменении ширины, количество изображение должно адаптироваться под видимую область.
 * Минимальная ширина - ~360px.
 *
 * 3. Переменная IMAGES_COUNT - суммарное количество картинок на странице,
 * которое будет сгенерировано. Это значение можно менять.
 *
 * 4. По нажатию на картинку, открывать её в диалоговом окне.
 */

export const IMAGES = [] as const;

export const IMAGES_COUNT = 100 as const;

export default function App() {
  return (
    <div className="App">
      <header>
        <h1 className="heading">Pinterest</h1>
      </header>

      <div
        className={clsx("popup", {
          // popup_visible: isVisible
        })}
      >
        <div className="popup__window">{/* Content */}</div>
      </div>

      <footer className="footer">Made with ❤️</footer>
    </div>
  );
}
