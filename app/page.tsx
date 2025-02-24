import { Card, Header, Footer } from "./components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Card />
      </main>
      <Footer />
    </>
  );
}
