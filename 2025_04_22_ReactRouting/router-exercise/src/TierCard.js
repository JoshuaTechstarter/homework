import './TierCard.css';


function TierCard(props) {
    return (
        <div className="tier-card">
            <img width="300px" src={props.image} alt=""></img>
            <h2>{props.name}</h2>
            <p><strong>Art: </strong>{props.art}</p>
            <p><strong>Krankheit: </strong>{props.krankheit}</p>

        </div>
    );
}

export default TierCard;