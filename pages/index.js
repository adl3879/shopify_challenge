import { useEffect, useState } from "react"
import Card from "../components/card"
import Skeleton from "../components/skeleton"

const Home = () => {
  const [data, setData] = useState([])
  const [url, _setUrl] = useState(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=pCxgWmNEeZhBLURpbHjtO008IgLfK21CgjjdRmP6"
  )
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    console.log(isLoading)
    const fetchData = async () => {
      setIsLoading(true)

      let dt = await fetch(url)
      let res = await dt.json()

      setData(res.photos)
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return(
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex justify-center py-8">
        <h1 className="text-4xl">Mars Rover Photos</h1>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {data.map(item => (
          !isLoading ? (
            <Card
            key={item.id}
            rover={item.rover.name}
            camera={item.camera.name}
            date={item.earth_date}
            // liked={true}
            image={item.img_src}
          />
          ) : (
            <Skeleton />
          )
        ))}
      </div>
    </div>
  )
}

export default Home

//pCxgWmNEeZhBLURpbHjtO008IgLfK21CgjjdRmP6