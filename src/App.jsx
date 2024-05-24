const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function MyName({nameProp}) {
  return (
    <div>
      <p>Nombre: {nameProp[0]}</p>
      <p>Apellido: {nameProp[1]}</p>
      <p>Título: {nameProp[2]}</p>
      <p>Edad: {nameProp[3]}</p>
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
  const myFullName = [
    'Luis', 
    'Mármol',
    'Software Developer',
    '23 Years Old'
  ];
  
  return (
    <div>
      <Header />
      <main>
        <MyName nameProp={myFullName}/>
      </main>
    </div>
  );
}

export default App;
