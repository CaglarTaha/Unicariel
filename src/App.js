import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Unicariel",
    tagline: "Ben Yayıncı Ve İçerik Üreticisiyim",
    email: "Unicariel.com.tr@gmail.com",
    availability: "22",
    brand:
      "Merhaba, ben Nurten. 22 yaşındayım. Matematik bölümünde okuyorum aynı zamanda oyunculuk eğitimi alıyorum."
    ,brand2:"Contact: unicariel.com.tr@gmail.com"
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
