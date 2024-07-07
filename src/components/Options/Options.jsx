import s from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, feedbackReset }) => {
  return (
    <div className={s.btnBox}>
      <button className={s.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.btn} onClick={feedbackReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
