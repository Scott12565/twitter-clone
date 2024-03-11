import HomePage from "./components/HomePage";
import UserContextProvider from "./components/useFetch";

function App() {
  return (
    <div className="">
      <UserContextProvider>
        <HomePage />  
      </UserContextProvider>
    </div>
  );
}

export default App;
