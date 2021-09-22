import { useEffect, useState } from "react"
import Card from "../components/card"
import Skeleton from "../components/skeleton"
import ReactPaginate from 'react-paginate';

const Home = () => {
  const [selected, setSelected] = useState(1)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    console.log(selected)

    let dt = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${selected}&api_key=pCxgWmNEeZhBLURpbHjtO008IgLfK21CgjjdRmP6`)
    let res = await dt.json()

    setData(res.photos)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [selected])

  const handlePageClick = (data) => {
    setSelected(data.selected+1)
    window.scrollTo(0, 0)
  }

  return(
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex justify-center py-8">
        <h1 className="text-4xl font-semibold text-green-700">Mars Rover Photos</h1>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {data.map(item => (
          !isLoading ? (
            <Card
            key={item.id}
            rover={item.rover.name}
            camera={item.camera.name}
            date={item.earth_date}
            id={item.id}
            image={item.img_src}
          />
          ) : (
            <Skeleton />
          )
        ))}
      </div>

      <div className="w-3/4 mx-auto my-6">
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  )
}

export default Home
