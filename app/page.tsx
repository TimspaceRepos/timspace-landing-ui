import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Timspace - Platforma w budowie</title>
        <meta
          name="description"
          content="Pracujemy intensywnie, aby Timspace był dostępny jak najszybciej!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center p-6 rounded-lg max-w-lg">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">
            Timspace - in progress...
          </h1>
        </div>
      </main>
    </>
  )
}
