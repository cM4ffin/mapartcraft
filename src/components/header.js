import React, { Component } from "react";

import "./header.css";

class Header extends Component {
  state = { contactInfoClassname: "contactInfoBlurred" };

  // Reveal contact info
  onContactInfoClick = (event) => {
    const { getLocaleString } = this.props;
    event.preventDefault();
    if (window.confirm(getLocaleString("HAVEYOUFAQ"))) {
      alert(getLocaleString("HELPNOTE"));
      this.setState({ contactInfoClassname: "contactInfo" });
    }
  };

  render() {
    const { getLocaleString } = this.props;
    return (
      <div className="header">
        <h1>MapartCraft</h1>
        <h3>
          <a href="faq.html" target="_blank" rel="noopener noreferrer">
            {getLocaleString("FAQ")}
          </a>
          <span> | </span>
          <a
            href="https://youtu.be/bJ-wX68WNHM"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getLocaleString("VIDEO_TUTORIAL")}
          </a>
          <span> | </span>
          <a
            href="https://github.com/rebane2001/mapartcraft"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <span> | </span>
          <a
            href="https://discord.gg/r7Tuerq"
            target="_blank"
            rel="noopener noreferrer"
          >
            2b2t Mapart Discord
          </a>
        </h3>
        <p>
          {getLocaleString("DESCRIPTION1")}
          <a
            href="https://www.reddit.com/r/2b2t/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2b2t
          </a>
          {getLocaleString("DESCRIPTION2")}
          <br></br>
          {getLocaleString("DESCRIPTION3")}
          <a
            href="https://redd.it/2yck3f"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getLocaleString("DESCRIPTION4")}
          </a>
          {getLocaleString("DESCRIPTION5")}
          <br></br>
          {getLocaleString("DESCRIPTION6")}
          <span
            className={this.state.contactInfoClassname}
            onClick={this.onContactInfoClick}
          >
            (rebane2001#3716)
          </span>
          {getLocaleString("DESCRIPTION7")}
          <span
            className={this.state.contactInfoClassname}
            onClick={this.onContactInfoClick}
          >
            (
            <a
              href="https://www.reddit.com/message/compose/?to=rebane2001"
              target="_blank"
              rel="noopener noreferrer"
            >
              /u/rebane2001
            </a>
            )
          </span>
          {getLocaleString("DESCRIPTION8")}
          <a
            href="https://github.com/rebane2001/mapartcraft/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <br></br>
          <b>
            {getLocaleString("FAQTEXT1")}
            <a href="faq.html" target="_blank" rel="noopener noreferrer">
              {getLocaleString("FAQ")}
            </a>
            {getLocaleString("FAQTEXT2")}
          </b>
        </p>
      </div>
    );
  }
}

export default Header;
