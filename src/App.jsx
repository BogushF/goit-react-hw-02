import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";
import Description from "./components/Description/Description.jsx";

const App = () => {
  return (
    <div>
      <Description />
      <Options />
      <Feedback />
      <Notification />
    </div>
  );
};

export default App;
