const ZombieFighters = (props) => {
    const { image, name, price, strength, agility } = props;
    return (
        <div>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Strength: {strength}</p>
            <p>Ability: {agility}</p>
            <button>Add</button>
        </div>
    );
};

export default ZombieFighters;