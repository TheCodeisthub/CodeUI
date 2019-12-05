import React, { Component } from "react"

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="cta--form">
          <input type="text" name="" id="" placeholder="Your Name" required />
          <input type="email" name="" id="" placeholder="Your Email" required />
          <textarea name="" id="" placeholder="Message me" required></textarea>
          <h4>GDPR AGREEMENT</h4>
          <label className="radio--btn--container">
            <p>
              I conscent to having TheCodeisthub store my information and
              contact me with it.
            </p>
            <input type="radio" name="radio" required />
            <span className="checkmark"></span>
          </label>

          <button className="btn btn--pink" type="submit">
            Send
          </button>
        </form>
      </div>
    )
  }
}
