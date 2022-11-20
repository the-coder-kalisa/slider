import { FC } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

const App: FC = () => {
  return (
    <div className="flex h-screen gap-4 items-center justify-center">
      <Right />
      <Left />
    </div>
  );
};
export default App;
