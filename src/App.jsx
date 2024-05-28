import componentImg from './assets/components.png/';
import { CORE_CONCEPTS } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const myFullName = [
  'Luis', 
  'Mármol',
  'Software Developer',
  '23 Years Old'
];

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function PersonalData(props) {
  return (
    <div>
      <p>Nombre: {props.nombre}</p>
      <p>Apellido: {props.apellido}</p>
      <p>Título: {props.titulo}</p>
      <p>Edad: {props.edad}</p>
    </div>
  );
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)]
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get Started!</h2>
        
        <PersonalData 
        nombre={myFullName[0]} 
        apellido={myFullName[1]} 
        titulo={myFullName[2]} 
        edad={myFullName[3]}
        />
        
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts 
            image={componentImg}
            title='Components'
            description='The core UI building block - compose the user interface by combining multiple components'
            />
            <CoreConcepts 
            image={CORE_CONCEPTS[1].image}
            title={CORE_CONCEPTS[1].title}
            description={CORE_CONCEPTS[1].description}
            />
            <CoreConcepts 
            image={CORE_CONCEPTS[2].image}
            title={CORE_CONCEPTS[2].title}
            description={CORE_CONCEPTS[2].description}
            />
            <CoreConcepts 
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