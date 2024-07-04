import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsCard = () => {
  return (
    <div className="mb-4">
      <div className="testimonials_card">
        <p className="testimonials_card_text"><FaQuoteLeft className="testimonials_quote_icon" />Rohan is a pretty good developer and got a very good knowledge in development. Have ability to learn new things quicker. Have a great future ahead. Good luck.</p>
      </div>
      <div>
        <span className="testimonials_name">Sabbir Hosain</span>
        <span className="testimonials_position">Creative Web Developer</span>
      </div>
    </div>
  )
}

export default TestimonialsCard