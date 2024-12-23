import './App.css'
import Hi from './component/hi';

const App: React.FC  = () => {
  return (
  <div>
    <Hi>
      <h3>Welcome to the React Tutorial</h3>
      <p>This is a reusable component with custom HTML 
        content passed as children!</p>
    </Hi>
  </div>
);
};

export default App;
