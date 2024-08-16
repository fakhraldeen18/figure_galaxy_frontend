import { useQuery } from "@tanstack/react-query"
import api from "./api"
import "./App.css"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

function App() {
    const getProducts = async () => {
      try {
        const res = await api.get("/products")
        return res.data
      } catch (error) {
        return Promise.reject(new Error("Something went wrong"))
      }
    }
      const { data: products, error } = useQuery({
        queryKey: ["productNoneJoin"],
        queryFn: getProducts
      })
      console.log('products:', products)
      console.log('error:', error)
     
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}
export default App
