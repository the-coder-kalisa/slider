import { FC } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

const App: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-end gap-4">
        <Right />
        <Left />
      </div>
    </div>
  );
};
export default App;
