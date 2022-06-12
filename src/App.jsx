import { Header } from "./components/Header";
import { Post } from "./Post";

export function App() {
  return (
    <>
      <Header />

      <Post 
        author="Fernando Brino" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio repellat repudiandae asperiores fuga quisquam ad nesciunt? Officia inventore sunt perspiciatis placeat eius sapiente. Dicta veritatis consequatur sed quam asperiores laborum!"
      />
      <Post 
        author="Henrique Marques" 
        content="A new post!"
      />
    </>
  )
}


