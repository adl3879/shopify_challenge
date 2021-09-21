import Image from "next/image"
import { useEffect, useState } from "react"

const Card = ({ rover, date, image, camera, id }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [liked, setLiked] = useState([])

  useEffect(() => {
    // let list = JSON.parse(localStorage.getItem("liked"))
    // if (!list) localStorage.setItem("liked", ["s", "ssss", 'xxxxxxx'])
    // console.log(list)
    // setLiked(list)
  }, [])

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false)
      // localStorage.setItem("liked", JSON.stringify([...liked, id]))
    }
    else {
      setIsLiked(true)
      // let newArr = liked.filter(value => value != id)
      // localStorage.setItem("liked", JSON.stringify(newArr))
    }
  }

  return(
		<div className="sm:mb-6 mb-4 rounded shadow-md">
			<div className="">
				<Image src={image} alt={rover} width={320} height={290} />
			</div>

      <div className="py-3 px-6 pb-8 font-medium flex justify-between items-center">
        <div>
          <h2 className="text-xl">Rover: {rover}</h2>
          <h2 className="text-base">Camera: {camera}</h2>
          <h5 className="text-base">Date: {date}</h5>
        </div>
        <button onClick={toggleLike}>
          <svg className={["like-btn", isLiked ? "like-btn--active" : ""].join(" ")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg>
        </button>
      </div>
		</div>
	)
}

export default Card
