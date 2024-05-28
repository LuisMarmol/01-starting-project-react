const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const myFullName = [
  'Luis', 
  'Mármol',
  'Software Developer',
  '23 Years Old'
];


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
        <PersonalData nombre={myFullName[0]} apellido={myFullName[1]} titulo={myFullName[2]} edad={myFullName[3]}/>
      </main>
    </div>
  );
}

export default App;