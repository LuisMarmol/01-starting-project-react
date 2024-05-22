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

function MyName() {
  return (
    <p>
      Nombre: {myFullName[0]} <br />
      Apellido: {myFullName[1]} <br />
      Título: {myFullName[2]} <br />
      Edad: {myFullName[3]}
    </p>
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
        <MyName />
      </main>
    </div>
  );
}

export default App;
