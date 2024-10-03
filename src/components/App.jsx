import { useEffect, useState } from "react";

import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackState, setFeedbackState] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }

    return initialState;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "saved-feedbacks",
      JSON.stringify(feedbackState)
    );
  }, [feedbackState]);

  const updateFeedback = (feedbackType) => {
    setFeedbackState({
      ...feedbackState,
      [feedbackType.toLowerCase()]:
        feedbackState[feedbackType.toLowerCase()] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedbackState(initialState);
  };

  const { good, neutral, bad } = feedbackState;

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        state={feedbackState}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          feedbacks={feedbackState}
          total={totalFeedback}
          positivePercentage={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;
