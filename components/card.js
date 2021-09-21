import Image from "next/image"
import { useState } from "react"

const Card = ({ rover, date, image, camera }) => {
  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = () => {
    if (isLiked) 
      setIsLiked(false) 
    else 
      setIsLiked(true)
  }

  return(
		<div className="sm:mb-6 rounded shadow-md">
			<div className="">
				<Image src={image} alt={rover} width={320} height={300} />
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
