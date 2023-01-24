export default function Card({
    degree = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"

}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
            {
                colour === "dark blue" ?  <img src={'icon/michael-icon.png'} width="50"/> :
                colour === "dark green" ? <img src={'icon/michael-icon.png'} width="50"/> :
                                    <img src={image} width="50"/>
            }
            {degree}
        </div>
    )
}