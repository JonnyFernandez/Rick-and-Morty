import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Landing, Login, Signup, Home } from "./views"
import { AuthProvider } from "./context/AuthContex"
import { CharProvider } from "./context/CharacterContext"
import ProtectedRoute from "./protectedRoute"
import Nav from "./component/nav/navGral/Nav"

function App() {

  return (
    <AuthProvider>
      <CharProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            {/* <Route path="/" element={<Landing />} /> */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>

              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<h1>Profile</h1>} />
              <Route path="/detail/:id" element={<h1>Details</h1>} />
              <Route path="/paginate" element={<h1>Paginate</h1>} />
              <Route path="/random" element={<h1>Random</h1>} />
              <Route path="/chars" element={<h1>my chars</h1>} />
              <Route path="/fav" element={<h1>Favorites</h1>} />
              <Route path="/add-chard" element={<h1>Favorites</h1>} />

            </Route>

          </Routes>
        </BrowserRouter>
      </CharProvider>
    </AuthProvider>
  )
}

export default App
