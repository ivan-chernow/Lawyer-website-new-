import About from "@/modules/About";
import Header from "@/modules/Header";
import Services from "@/modules/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <About />
      <Lawyers />
    </div>
  );
}
