import Image from "next/image"

const Card = ({ rover, date, liked, image, camera }) => {
  return(
		<div className="sm:mb-6 rounded">
			<div className="">
				<Image src={image} alt={rover} width={320} height={300} />
			</div>

      <div className="border border-black mt-0">
        <h2>Rover: {rover}</h2>
        <h2>Camera: {camera}</h2>
        <h5>Date: {date}</h5>
        <button>{liked}</button>
      </div>
		</div>
	)
}

export default Card
