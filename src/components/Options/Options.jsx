import clsx from "clsx";
import css from "./Options.module.css";

const Options = ({ state, onLeaveFeedback, onReset, total }) => {
  const optionsArr = Object.keys(state).map((key) =>
    key.replace(key[0], key[0].toUpperCase())
  );

  return (
    <ul className={css.list}>
      {optionsArr.map((option) => {
        return (
          <li key={option}>
            <button
              type="button"
              className={css.button}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
      {total > 0 && (
        <button
          type="button"
          className={clsx(css.button, css.reset)}
          onClick={() => onReset()}
        >
          Reset
        </button>
      )}
    </ul>
  );
};
export default Options;
