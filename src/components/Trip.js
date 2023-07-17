import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip in Indonesia"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quos molestias odio iste atque error voluptate adipisci. Numquam necessitatibus repellat itaque ipsa, asperiores distinctio dignissimos voluptates, officia, laborum ducimus accusantium."
                />
                <TripData
                    image={Trip2}
                    heading="Trip in Malaysia"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quos molestias odio iste atque error voluptate adipisci. Numquam necessitatibus repellat itaque ipsa, asperiores distinctio dignissimos voluptates, officia, laborum ducimus accusantium."
                />
                <TripData
                    image={Trip3}
                    heading="Trip in France"
                    text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quos molestias odio iste atque error voluptate adipisci. Numquam necessitatibus repellat itaque ipsa, asperiores distinctio dignissimos voluptates, officia, laborum ducimus accusantium."
                />
            </div>
        </div>
    );
}

export default Trip;