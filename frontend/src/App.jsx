import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import NoteDetailPage from "./pages/NoteDetailPage"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <div data-theme="forest">
      <Toaster position="top-right"/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note-detail/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
