import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';

import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton){
    
    setSelectedTopic(selectedButton);
    
    //console.log(selectedButton);
  }

  let tabContent = <p>Please, select a topic.</p>;

  if(selectedTopic !== undefined) {
    tabContent = (
      <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
    );
  }
  
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
            description={CORE_CONCEPTS[0].description}
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

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton onClick={()=>{handleClick('components')}}>Components</TabButton>
            <TabButton onClick={()=>{handleClick('jsx')}}>JSX</TabButton>
            <TabButton onClick={()=>{handleClick('props')}}>Props</TabButton>
            <TabButton onClick={()=>{handleClick('state')}}>State</TabButton>
          </menu>

          {tabContent}
          
        </section>
      </main>

    </div>


  );
}

export default App;