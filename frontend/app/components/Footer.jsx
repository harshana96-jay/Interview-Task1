import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">

      <div className="footer-grid">

        <div>
          <h3>Turtles Egg Corner</h3>
          <p>About us</p>
          <p>Gift cards</p>
          <p>Contact us</p>
        </div>

        <div>
          <h3>Realtor help</h3>
          <p>How to become a realtor</p>
          <p>Grow your sales</p>
          <p>Become a Five Star realtor</p>
        </div>

        <div>
          <h3>My account</h3>
          <p>Sign in</p>
          <p>Create account</p>
          <p>Wish list</p>
          <p>Comparison list</p>
        </div>

        <div>
          <h3>Buyer help</h3>
          <p>Best shopping practices</p>
          <p>Buyers help line</p>
        </div>

        <div>
          <h3>Sell with us</h3>
          <p>Apply for a seller account</p>
          <p>Seller Must Do’s and Don’ts</p>
          <p>Seller terms & conditions</p>
          <p>Connector seller terms</p>
          <p>B2B Seller</p>
        </div>

        <div>
          <h3>Sign up for the latest deals</h3>
          <div className="footer-input">
            <input type="text" placeholder="Enter Your Email" />
            <button>Submit</button>
          </div>

          <h3 style={{ marginTop: "20px" }}>Information</h3>
          <p>FAQs</p>
          <p>Free shipping always</p>
          <p>Warranty</p>
          <p>Returns</p>
        </div>

      </div>

      <div className="follow-section">
        <h3>Follow Us</h3>
        <div className="social">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      <div className="footer-legal">
        ©2025 Turtles Egg Inc. All rights reserved 
        <span>| Terms of Use</span>
        <span>| Privacy Policy</span>
        <span>| Interest-Based Ads</span>
        <span>| Licenses</span>
        <span>| Conditions</span>
      </div>

    </div>
  );
}
