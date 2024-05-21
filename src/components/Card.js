import React from "react";


export default function Card(props) {
    //console.log(props.data);

    let link;
    if (props.data.link != "") link = <a href={props.data.link} className="btn btn-primary">{props.data.linkText}</a>;

    return (
        <div className="card text-bg-dark px-0">
            <img src={props.data.img} alt={props.data.imgAlt} />
            <div className="card-body card-img-overlay">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
                {link}
            </div>
            
        </div>
        
    );
}