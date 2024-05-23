import React from "react";


export default function Card(props) {
    //console.log(props.data);

    let color = props.data.color || "#ff00ff";

    let imageComponent;
    let imageStyle = {
        "borderBottom": "1px solid" + color
    }
    if (props.data.img !== "") imageComponent = <img className="card-img" src={props.data.img} alt={props.data.imgAlt} style={imageStyle}/>;

    let link;
    let linkStyle = { 
        "backgroundColor": color, 
        "borderColor": color
    };
    if (props.data.link !== "") link = <a href={props.data.link} className="btn btn-primary" style={linkStyle}>{props.data.linkText}</a>;

    let cardStyle = {
        "borderColor": color,
        "backgroundImage": `url(${props.data.bg})` || "",
    }

    //create a transparent alternative to our color
    let transparentColor = color + "22";
    let bodyStyle = {
        "backgroundColor": transparentColor,
        "backgroundBlendMode": "multiply"
    }
    let hrStyle = {
        "borderTop": "1px solid" + color
    }

    

    //Break up the description strings by newline and place each line into separate paragraph tags.
    let brokenUpText = props.data.description.split("\n");
    let descriptionComponents = brokenUpText.map((text,index) => <p key={index}>{text}</p>);

    return (
        <div className="card text-bg-light" style={cardStyle} key={props.data.name + "-card"}>
            {imageComponent}
            <div className="card-body" style={bodyStyle}>
                <h3 className="card-title">{props.data.title}</h3>
                <hr style={hrStyle}/>
                {descriptionComponents}
                {link}
            </div>
            
        </div>
        
    );
}