import './HeroSection.css';

export default function HeroSection({ title, description, showSubscribe = false }) {
  return (
    <section className="hero text-center">
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <p className="mb-4">{description}</p>

      {showSubscribe && (
        <div className="subscribe-box d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
          <input
            type="email"
            placeholder="Your Mail Address"
            className="form-control w-auto"
          />
          <button className="btn btn-dark">Subscribe</button>
        </div>
      )}
    </section>
  );
}
