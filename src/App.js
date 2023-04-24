import Cards from "./components/cards";
import Hero from "./components/hero";
import Navbar from "./components/Navbar";
import data from "./data";

const App = () => {

    const cards = data.map(item => {
        return ( 
          <Cards  key={item.id}
                  item={item}
                  
              />     
        )
      })

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <section className="cards-list">
            {cards}
            </section>
        </div>
    );
}
 
export default App;