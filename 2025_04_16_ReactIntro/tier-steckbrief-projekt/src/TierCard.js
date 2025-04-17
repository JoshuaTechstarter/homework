import './TierCard.css';

function TierCard({ name, art, krankheit }) {
    return (
        <div className="tier-card">
            <h2>{name}</h2>
            <p><strong>Art: </strong>{art}</p>
            <p><strong>Krankheit: </strong>{krankheit}</p>

        </div>
    );
}

export default TierCard;