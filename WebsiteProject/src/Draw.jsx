import DrawBoard from "./components/DrawBoard";
import Nav from "./components/Navi";

const Draw =() => {
    return(
        <div className="main"> 
            <Nav></Nav>
            <div>
            <DrawBoard></DrawBoard>

            
            </div>
        </div>
    );

};

export default Draw;