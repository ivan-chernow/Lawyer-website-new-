import About from "@/modules/About";
import Clients from "@/modules/Clients";
import Footer from "@/modules/Footer";
import Header from "@/modules/Header";
import Lawyers from "@/modules/Lawyers";
import Materials from "@/modules/Materials";
import Services from "@/modules/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Lawyers />
      <Clients />
      <Materials />
      <Footer />
    </div>
  );
}
