const Card = ({quotes, color, randomColor}) => {   

    return(
        <div className="card">
            <div className="card-item">
                <h1 className="card-title" style={{color:color}}>{quotes.quote}</h1>
                <h3 className="card-author" style={{color: color}}>{quotes.author}</h3>
            </div>
            

            <div className="card-button">
                <button 
                    style={{background: color}}
                    onClick={() => randomColor()} >
                New Quotes</button>
            </div>
        </div>
    );
};

export default Card;