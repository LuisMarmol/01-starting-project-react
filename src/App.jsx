import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data';

function App() {
  return (
    <div>
      <Header />
      
      <main>
        
        <h2>Time to get Started!</h2>
        
        <section id="core-concepts">

          <h2>Core Concepts</h2>

          <ul>
            
            <CoreConcept
            image={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            descrition={CORE_CONCEPTS[0].description}
            />
            
            <CoreConcept 
            {... CORE_CONCEPTS[1]}
            />
            
            <CoreConcept 
            {... CORE_CONCEPTS[2]}
            />
            
            <CoreConcept 
            image={CORE_CONCEPTS[3].image}
            title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            />
          
          </ul>

        </section>

      </main>

    </div>
  );
}

export default App;