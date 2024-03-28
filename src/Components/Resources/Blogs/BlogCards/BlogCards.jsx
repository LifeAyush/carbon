import "./blogCards.css"
import Arrow from "../../../../Assets/Images/Arrow.svg"

export default function BlogCards({ img, title, text }) {
    return (
        <section className="blog-card">
            <img className="blog-card-img" src={img} alt="" />
            <div className="blog-card-arrow">
                <img src={Arrow} alt="" />
            </div>
            <div className="blog-card-content">
                <p className="blog-card-head">{title}</p>
                <p className="blog-card-para">{text}</p>
            </div>
        </section>
    )
}
