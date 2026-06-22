import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Head>
        <title>Digital Måltidsplanerare</title>
        <meta name="description" content="Planera dina växtbaserade måltider enkelt och smidigt." />
      </Head>
      <header>
        <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>Planera Växtbaserade Måltider Enkelt</h1>
        <h2 style={{ fontSize: '1.5rem', color: '#666' }}>Förenkla din gröna livsstil varje dag</h2>
      </header>
      <main>
        <button style={{ margin: '20px 0' }}>Prova Gratis</button>
        <div style={{ marginTop: '40px', color: '#88C057' }}>
          <p>Säker betalning</p>
          <p>1000+ nöjda användare</p>
          <p>Ekologiskt godkänd</p>
        </div>
      </main>
    </div>
  );
}