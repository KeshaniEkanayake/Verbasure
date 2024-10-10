import { useRoutes } from "react-router-dom";
import  Themeroutes from "./routes/Router";
import { useEffect } from "react";
const App = () => {
  useEffect(()=>{
    const webgazer=window.webgazer
    webgazer.setGazeListener((data, clock)=>{
      console.log(data, clock) 
  })
  .begin();
},[]);
  const routing = useRoutes(Themeroutes);
  return (<div className="dark">
    {routing}
    
    </div>
  );

}

export default App;
