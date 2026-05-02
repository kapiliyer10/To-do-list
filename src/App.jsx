import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">
              Your Todos
            </h1>
            <p className="text-slate-600 text-lg">
              Stay organized and keep track of your tasks
            </p>
          </div>

          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent transition"
              />
              <button className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition">
                Add
              </button>
            </div>
          </div>

          {/* Todos List Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-3">
              <div className="text-center py-12 text-slate-400">
                <p className="text-lg">
                  No tasks yet. Add one to get started! 🎯
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
