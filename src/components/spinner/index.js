import ScaleLoader from "react-spinners/ScaleLoader";

import "./style.scss"

const Spinner = () => {

    return (
        <div className="sweet-loading">
            <ScaleLoader
                color={"#59C1BD"}
                loading={true}
                size={550}
            />
        </div>
    );
}

export default Spinner;