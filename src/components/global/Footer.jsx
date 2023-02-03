import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <img
            src="/assets/Asset 20@4x.png"
            width=""
            height="500px"
            alt="this is a picture of food"
          />
        </div>
        <div className="footer-links-container">
          <div className="footer-links-section">
            <div>
              <p>DoorMat Nav</p>
            </div>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
              </ul>
            </div>
          </div>
          <div className="footer-links-section">
            <div>
              <p>Contacts</p>
            </div>
            <div>
              <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
          <div className="footer-links-section">
            <div>
              <p>Social Media Links</p>
            </div>
            <div>
              <ul>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
