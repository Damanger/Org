import { useState } from "react";
import "./myOrg.css";

const MyOrg = (props) => {
    const [isAddImage, setIsAddImage] = useState(true);

    const toggleImage = () => {
        setIsAddImage(!isAddImage);
        props.changeShow();
    }

    return (
        <section className="orgSection">
            <h3 className="title">Mi Organización</h3>
            <img
                src={isAddImage ? "/img/sus.png" : "/img/add.png"}
                alt={isAddImage ? "sus" : "add"}
                onClick={toggleImage}
            />
        </section>
    )
};

export default MyOrg;
