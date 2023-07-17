import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";


const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
                className = "first-des"

                heading= "Taal Valcano, Banglore"
                text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quaerat delectus saepe, placeat suscipit consectetur nesciunt ex ad laboriosam dignissimos quisquam exercitationem non animi doloremque aliquam, temporibus labore magni. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            
                img1 = {Mountain1}
                img2 = {Mountain2}
            />

            <DestinationData
                className= "first-des-reverse"

                heading= "Silicon Valley, Hydrabad"
                text= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odio quaerat delectus saepe, placeat suscipit consectetur nesciunt ex ad laboriosam dignissimos quisquam exercitationem non animi doloremque aliquam, temporibus labore magni. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            
                img1 = {Mountain3}
                img2 = {Mountain4}
            />
        
        </div>
    );
};

export default Destination;