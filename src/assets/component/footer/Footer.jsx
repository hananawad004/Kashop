import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Brand */}
        <div>
          <h2 className={styles.logo}>Boimela</h2>
          <p>Got Questions? Call us</p>
          <h3 className={styles.phone}>+670 413 90 762</h3>
          <p>support@store.com</p>
          <p>
            79 Sleepy Hollow St. <br />
            Jamaica, New York 1432
          </p>
        </div>

        {/* Support */}
        <div>
          <h4>Customer Support</h4>
          <ul className={styles.list}>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Returns & Refunds</li>
            <li>Shipping Info</li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h4>Shop</h4>
          <ul className={styles.list}>
            <li>All Products</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Offers</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h4>Subscribe</h4>
          <p>Get updates about new products & offers</p>

          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>

          <h5>Follow Us</h5>
          <div className={styles.socials}>
            <span>f</span>
            <span>t</span>
            <span>in</span>
            <span>v</span>
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        © All Rights Reserved 2025 By Readit.
      </div>
    </footer>
  );
}
