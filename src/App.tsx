import { Route, Routes } from "react-router-dom"
import { CategoryLayout } from "./cases/categories/components/category-layout"

function App() {

  return (
    <div className="wrapper">
      

    <main>
      <Routes>
        <Route path="/categories" element={ <CategoryLayout/>}>
          <Route path="new" element={ <CategoryLayout/>}/>
          <Route path=":id" element={ <CategoryLayout/>}/>
        </Route>
      </Routes>
    </main>

    </div>
  )
}

export default App