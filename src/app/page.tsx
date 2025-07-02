import About from "@/modules/About";
import Clients from "@/modules/Clients";
import Header from "@/modules/Header";
import Lawyers from "@/modules/Lawyers";
import Services from "@/modules/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Lawyers />
      <Clients />
    </div>
  );
}
