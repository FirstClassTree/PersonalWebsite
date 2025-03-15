import PropTypes from 'prop-types';

function ColorButton({color,onClickhandle}){

    color = color || "black";
    onClickhandle = onClickhandle || (() => {});

    return(
        <div onClick={onClickhandle} className="outterButton">
            <div className="innerButton" style={{backgroundColor:color}}>
            </div>
        </div>
    )
}

ColorButton.propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ColorButton;