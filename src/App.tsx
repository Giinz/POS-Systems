import DefaultLayout from 'LayOut/DefaultLayout';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </div>
  );
}

export default App;
