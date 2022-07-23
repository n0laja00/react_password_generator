import './App.css';
import Interface from './components/Interface';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-3 py-5 px-32 bg-gradient-to-bl from-yellow-700 to-orange-700 h-fit shadow-xl shadow-gray-800">
        <Interface />
      </div>
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} position='top-right' pauseOnHover={false}/>
    </>
  );
}

export default App;
