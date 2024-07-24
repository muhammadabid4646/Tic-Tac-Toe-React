import react from "react";

const Square = (props) =>{

    return(
        <>
            <div className="box" onClick={props.onClick}>
                <p>{props.value}</p>
            </div>
        </>
    )
}
export default Square