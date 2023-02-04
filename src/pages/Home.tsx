import ButtonBars from "../components/ButtonBars";
import Cards from "../components/Cards";
import Title from "../components/Title";

function Home() {
  
    

    return (
        <div className="m-4">
           
            <Title
                main="BUSINESS CARD APP"
                sub="Here you will find business cards"
            />
             <ButtonBars />
          
            <Cards />
          

           
        </div>
    );
}

export default Home;