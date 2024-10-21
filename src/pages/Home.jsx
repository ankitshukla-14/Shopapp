import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const[loading, setLoading] = useState(false);
  const[posts, setPosts] = useState([]);

  async function fetchProducts() {
    setLoading(true);
    try{
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    }
    catch(error) {
      console.log("error in fetching");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchProducts();
  },[])

  return (
    <div>
      {
        loading ? <Spinner/> : 
          posts.length > 0 ? 
            (<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-4 max-w-6xl mx-auto p-2 space-x-5 space-y-10 min-h-[80vh]"> 
              {
                posts.map((post) => (<Product post={post}/>))
              }              
            </div>) : 
            (<div className="flex justify-center items-center">No Product Found</div>)
      }     
    </div>
  )
}

export default Home;