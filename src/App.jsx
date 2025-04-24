import Counter from "./components/Counter"

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="border-b py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center text-slate-700">
            30 React Machine Coding Projects
          </h1>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center">
        <Counter />
      </main>
    </div>
  )
}
 
export default App