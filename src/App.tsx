import { useState, useEffect } from "react";
import Column from "./Column";

function App() {
  const now = new Date();
  const [hours, setHours] = useState(
    now.getHours().toString().padStart(2, "0"),
  );
  const [minutes, setMinutes] = useState(
    now.getMinutes().toString().padStart(2, "0"),
  );
  const [seconds, setSeconds] = useState(
    now.getSeconds().toString().padStart(2, "0"),
  );

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setSeconds(now.getSeconds().toString().padStart(2, "0"));
      setMinutes(now.getMinutes().toString().padStart(2, "0"));
      setHours(now.getHours().toString().padStart(2, "0"));
    }, 1000);
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-12 flex gap-8">
        <Column length={3} current={Number(hours[0])} />
        <Column length={10} current={Number(hours[1])} />
        <div>:</div>
        <Column length={6} current={Number(minutes[0])} />
        <Column length={10} current={Number(minutes[1])} />
        <div>:</div>
        <Column length={6} current={Number(seconds[0])} />
        <Column length={10} current={Number(seconds[1])} />
      </div>
    </div>
  );
}

export default App;
