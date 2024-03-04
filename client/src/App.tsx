import { Outlet } from 'react-router-dom';
import Navbar from './components/component/Navbar';
import Footer from '@/components/component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main className="container max-w-screen-xl mx-auto min-h-[75vh] ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
