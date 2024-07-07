import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";
import Description from "./components/Description/Description.jsx";

const App = () => {
  const startFeedback = { good: 0, neutral: 0, bad: 0 };

  const [state, setState] = useState(() => {
    const storageFeedback = window.localStorage.getItem("saveFeedback");
    return storageFeedback !== null
      ? JSON.parse(storageFeedback)
      : startFeedback;
  });

  const feedbackReset = () => {
    setState(startFeedback);
  };
  useEffect(() => {
    window.localStorage.setItem("saveFeedback", JSON.stringify(state));
  }, [state]);

  const updateFeedback = (feedbackType) => {
    setState({
      ...state,
      [feedbackType]: state[feedbackType] + 1,
    });
  };

  const totalFeedback = state.good + state.neutral + state.bad;

  const positive = Math.round((state.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        feedbackReset={feedbackReset}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedback={state}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
