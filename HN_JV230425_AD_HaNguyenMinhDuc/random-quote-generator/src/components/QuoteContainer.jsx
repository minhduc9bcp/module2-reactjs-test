import Card from "./Card";
import Footer from "./Footer";

const QuoteContainer = ({quotes, color, randomColor}) => {
    return (<>
        <div className="container" style={{backgroundColor: color}}>
            <Card quotes={quotes} color={color} randomColor={randomColor}/>
            <Footer />
        </div>
    </>);
};

export default QuoteContainer;