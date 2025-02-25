import logo from './logo.svg';
import './App.css';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="App">
      <EventCard 
        name="ДР" 
        data="12.02.2025" 
        place="кафе Базилик"
      />

      <EventCard 
        name="Свадьба" 
        data="31.05.2025" 
        place="ресторане Усадьба"
      />

      <EventCard 
        name="Юбилей" 
        data="01.01.2025" 
        place="кафе Кинг Таун"
      />
    </div>
  );
}

export default App;
