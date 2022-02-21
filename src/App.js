import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.npoint.io/8f87afbdb4b96f0824aa").then((res) => {
      res.json().then((ans) => {
        setData(ans);
        setIsLoading(false);
      });
    });
  }, []);

  if (isLoading) {
    return "Loadeing......";
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
