import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails
  console.log(imgUrl)

  return (
    <li className="item-container">
      <div>
        <img src={imgUrl} alt={name} className="image-name" />
        <p className="heading">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
