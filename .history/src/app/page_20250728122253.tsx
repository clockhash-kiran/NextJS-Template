import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Home = () => {
  return (
    <main className="min-h-screen bg-stone-100 text-stone-900 p-6">
      <section className="max-w-4xl mx-auto">
        <Card className="bg-stone-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-stone-800">
              Welcome Home
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-700 mb-4">
              This is a simple homepage using ShadCN components with a stone-themed palette.
            </p>
            <Button variant="default" className="bg-stone-600 hover:bg-stone-700 text-white">
              Get Started
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default Home
