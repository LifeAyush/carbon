import "./journeySlider.css"

function Card({ image, text }) {
    return (
        <section
            className="journey-card"
            style={{
                background: `url(${image})`,
            }}
        >
            <div className="overlay"></div>
            <p className="card-content">{text}</p>
        </section>
    )
}

export default function JourneySlider() {
    return (
        <section className="journey-slider">
            <Card
                text="We fuel green initiatives for individuals and businesses, accelerating their path to Net Zero."
                image="/Images/Journey/journey1.png"
            />
            <Card
                text="We fuel green initiatives for individuals and businesses, accelerating their path to Net Zero."
                image="/Images/Journey/journey2.png"
            />
            <Card
                text="We fuel green initiatives for individuals and businesses, accelerating their path to Net Zero."
                image="/Images/Journey/journey3.png"
            />
            <Card
                text="We fuel green initiatives for individuals and businesses, accelerating their path to Net Zero."
                image="/Images/Journey/journey3.png"
            />
        </section>
    )
}
