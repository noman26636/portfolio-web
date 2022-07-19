import "./floating.css"
function FloatingDiv({image}) {
  return (
    <div className="floatingDiv">
     <img src={image} alt="thumbs up" />
     <span>
        Web
        <br/>
        Developer
     </span>
    </div>
  )
}

export default FloatingDiv