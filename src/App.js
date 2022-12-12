import "./App.css";
import Asus from "./components/Asus";
import Dell from "./components/Dell";
import Canon from "./components/Canon";
import AsusItem from "./components/AsusItem";
import DellItem from "./components/DellItem";
import CanonItem from "./components/CanonItem";
import TotalItem from "./components/TotalItem";
import TotalPrice from "./components/TotalPrice";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div class="bg-gray-50 h-full md:h-screen">
        <div class="grid place-items-center">
          <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
            <Asus></Asus>
            <Dell></Dell>
            <Canon></Canon>
          </div>
          <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
              <AsusItem></AsusItem>
              <DellItem></DellItem>
              <CanonItem></CanonItem>
              <TotalItem></TotalItem>
            </div>
            <TotalPrice></TotalPrice>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
