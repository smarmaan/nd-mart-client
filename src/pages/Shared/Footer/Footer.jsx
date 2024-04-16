import Logo from "../../../../public/Logo_02.gif";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content ">
        <div className="drop-shadow-2xl shadow-inherit rounded-full">
          <img src={Logo} className="w-24 rounded-full mx-auto mb-2" alt="" />
          <span className="footer-title mx-auto">Next Door Mart</span>
        </div>
        <div>
          <span className="footer-title">Shop</span>
          <a className="link link-hover">Electronics</a>
          <a className="link link-hover">Clothing</a>
          <a className="link link-hover">Home & Garden</a>
          <a className="link link-hover">Toys & Games</a>
          <a className="link link-hover">Books</a>
        </div>
        <div>
          <span className="footer-title">Information</span>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Shipping Information</a>
          <a className="link link-hover">Returns & Exchanges</a>
        </div>

        <div>
          <span className="footer-title">Customer Service</span>
          <a className="link link-hover">My Account</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Wishlist</a>
          <a className="link link-hover">Customer Reviews</a>
        </div>

        <div>
          <span className="footer-title">Follow Us</span>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram </a>
          <a className="link link-hover">Pinterest</a>
          <a className="link link-hover">YouTube</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2024 NEXT DOOR MART (E-commerce Website). All rights reserved.</p>
          <p>Created by NEXT DOOR MART Industries Ltd.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
