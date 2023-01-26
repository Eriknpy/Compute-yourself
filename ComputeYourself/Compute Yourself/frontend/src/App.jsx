//import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import About from "./routes/About";
import AddNewCpu from "./routes/AddNewProducts/AddNewCpu";
import AddNewCpuCooler from "./routes/AddNewProducts/AddNewCpuCooler";
import AddNewDrive from "./routes/AddNewProducts/AddNewDrive";
import AddNewGpu from "./routes/AddNewProducts/AddNewGpu";
import AddNewMotherBoard from "./routes/AddNewProducts/AddNewMotherBoard";
import AddNewPcCase from "./routes/AddNewProducts/AddNewPcCase";
import AddNewPsu from "./routes/AddNewProducts/AddNewPsu";
import AddNewRam from "./routes/AddNewProducts/AddNewRam";
import CpuCoolers from "./routes/CpuCoolers";
import Cpus from "./routes/Cpus";
import Drives from "./routes/Drives";
import EditCpu from "./routes/EditProducts/EditCpu"
import EditCpuCooler from "./routes/EditProducts/EditCpuCooler"
import EditDrive from "./routes/EditProducts/EditDrive"
import EditGpu from './routes/EditProducts/EditGpu';
import EditMotherBoard from "./routes/EditProducts/EditMotherBoard"
import EditPcCase from './routes/EditProducts/EditPcCase';
import EditPsu from './routes/EditProducts/EditPsu';
import EditRam from './routes/EditProducts/EditRam';
import Gpus from "./routes/Gpus";
import Home from "./routes/Home";
import MotherBoards from "./routes/MotherBoards";
import PcCases from "./routes/PcCases";
import Products from "./routes/Products";
import Psus from "./routes/Psus";
import Rams from "./routes/Rams";
import RootLayout from "./layouts/RootLayout";
import ShowProductDetails from "./routes/ShowProductDetails";

// import { productURL } from "./endpoints";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="product" element={<Products/> }/>
      <Route path="product/cpu" element={<Cpus />} />
      <Route path="product/psu" element={<Psus />} />
      <Route path="product/pccase" element={<PcCases />} />
      <Route path="product/motherboard" element={<MotherBoards />} />
      <Route path="product/ram" element={<Rams />} />
      <Route path="product/gpu" element={<Gpus />} />
      <Route path="product/cpucooler" element={<CpuCoolers />} />
      <Route path="product/drive" element={<Drives />} />
      <Route path="product/details/" element={<ShowProductDetails />} />
      <Route path="product/addnewcpu" element={<AddNewCpu />} />
      <Route path="product/addnewcpucooler" element={<AddNewCpuCooler />} />
      <Route path="product/addnewdrive" element={<AddNewDrive />} />
      <Route path="product/addnewgpu" element={<AddNewGpu />} />
      <Route path="product/addnewmotherboard" element={<AddNewMotherBoard />} />
      <Route path="product/addnewpccase" element={<AddNewPcCase />} />
      <Route path="product/addnewpsu" element={<AddNewPsu />} />
      <Route path="product/addnewram" element={<AddNewRam />} />
      <Route path="product/cpu/edit" element={<EditCpu />} />
      <Route path="product/motherboard/edit" element={<EditMotherBoard />} />
      <Route path="product/cpucooler/edit" element={<EditCpuCooler />} />
      <Route path="product/drive/edit" element={<EditDrive />} />
      <Route path="product/pccase/edit" element={<EditPcCase/>} />
      <Route path="product/psu/edit" element={<EditPsu/>} />
      <Route path="product/ram/edit" element={<EditRam/>} />
      <Route path="product/gpu/edit" element={<EditGpu/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
