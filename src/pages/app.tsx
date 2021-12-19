import { useEffect } from "react";
import Layout from "../layout/Layout";

const App = () => {
  useEffect(() => {
    document.title = "Expense tracker";
  }, []);

  var x = "name ";

  const contents = <h3> Welcome to React Boilerplate {x} </h3>;

  return <Layout>{contents}</Layout>;
};
export default App;
