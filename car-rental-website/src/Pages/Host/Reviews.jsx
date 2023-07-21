import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Elliot from "../../images/elliot.jpg"
import Sandy from "../../images/sandy.jpg"
import reviewz from "../../images/Carhaven-rating.svg"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            img: Elliot,
            date: "June 3, 2023",
            text: "The Jeep Wrangler is such an awesome car! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and very understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            img: Sandy,
            date: "April 12, 2022",
            text: "This is our third time using the KIA Rio for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph"
                src={reviewz}
                alt="Review graph"
            />
            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div className="review-cont" key={review.id}>
                    <div className="review">
                        <img className="review-dp" src={review.img} />
                        <div className="five-star-container">
                            {[...Array(review.rating)].map((_, i) => (
                                <FontAwesomeIcon icon={faStar} style={{color: "#ffd700",}} key={i} className="five-star" />
                            ))}
                        </div>
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>"{review.text}"</p>
                    </div>
                    <hr className="hori"/>
                </div>
            ))}
        </section>
    )
}
