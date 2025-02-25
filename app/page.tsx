import { Card, Header, Footer } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Card
          country="Brazil"
          capital="Brasilia"
          region="North America"
          population="217000000"
        />
        <Card
          country="Japan"
          capital="Tokyo"
          region="Asia"
          population="126000000"
        />
        <Card
          country="United States"
          capital="Washington D.C."
          region="North America"
          population="328000000"
        />
      </main>
      <Footer />
    </>
  );
}
