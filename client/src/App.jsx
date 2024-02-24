import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Landing, Login, Signup, Home } from "./views"
import { AuthProvider } from "./context/AuthContex"
import { CharProvider } from "./context/CharacterContext"
import ProtectedRoute from "./protectedRoute"

function App() {

  return (
    <AuthProvider>
      <CharProvider>
        <BrowserRouter>
          {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>

              <Route path="/home" element={<Home />} />


            </Route>

          </Routes>
        </BrowserRouter>
      </CharProvider>
    </AuthProvider>
  )
}

export default App
