"use client"

// Mark this file as a Client Component
import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"

interface Item {
  id: number
  title: string
  description: string
}

const ExamplePage = () => {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch data from a public API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        )
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        setItems(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {/* Head management using next/head */}
      <Head>
        <title>Example Page</title>
        <meta
          name="description"
          content="This is an example page using Next.js and React.js features."
        />
      </Head>

      <div className="container mx-auto p-4">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-4">Example Page</h1>

        {/* Navigation to Home */}
        <Link
          href="/"
          className="text-blue-600 hover:underline mb-4 inline-block"
        >
          Back to Home
        </Link>

        {/* Data Loading State */}
        {loading && <p className="text-gray-600">Loading data...</p>}

        {/* Error Handling */}
        {error && <p className="text-red-600">Error: {error}</p>}

        {/* Render the List of Items */}
        {!loading && !error && (
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700">
                  {item.description || "No description available."}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default ExamplePage
