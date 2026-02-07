import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          What's in My Fridge? 🍕
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-center text-gray-600 mb-4">
            Track your fridge items and reduce food waste!
          </p>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Add an item..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Add Item
            </button>
          </div>
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              Your fridge is empty. Start adding items!
            </p>
          ) : (
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="p-3 bg-gray-50 rounded-lg">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
