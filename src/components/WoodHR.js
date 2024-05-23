import woodTexture from "../textures/WoodFloor051.jpg"; 

export default function WoodHR(props) {
    let hrStyle = {
        height: "20px",
        border: "0",
        backgroundImage: `url(${woodTexture})`,
        backgroundSize: "1024px",
        opacity: 1,
        padding: 0,
        margin: 0,
      };

      return <hr className="wood" style={hrStyle} />;
}