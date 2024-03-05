import "./journeySlider.css";

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
  );
}

export default function JourneySlider() {
  return (
    <section className="journey-slider">
      <Card
        text="We fuel green initiatives for individuals and businesses, accelerating their path to Net Zero."
        image="/Images/Journey/journey1.png"
      />
      <Card
        text="Our reliable solutions are built on sound data, guiding you with confidence on your sustainable journey."
        image="/Images/Journey/journey2.png"
      />
      <Card
        text="Let CUT chart your Net Zero course, unlocking viable solutions that fuel profitability and secure a greener future for your brand."
        image="/Images/Journey/journey3.png"
      />
      <Card
        text="We facilitate a seamless integration of carbon credit solutions into your sustainability strategy and operational frameworks."
        image="/Images/Journey/journey4.png"
      />
    </section>
  );
}
