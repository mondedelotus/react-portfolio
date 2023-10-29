import "./styles.css";

import me from "./../../img/me.webp";

const Header = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="content-part">
                    <h1 className="header__title">
                        <strong>
                            Hi, my name is <em>Serhii</em>
                        </strong>
                        <br />a Web Developer, IT Enthusiast
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://docs.google.com/document/d/1_ikJCpuJd_Of9Bn8HAg_Y7IpU4P02wtBozkuMtce-lw/edit?usp=sharing"
                        className="btn"
                    >
                        Download CV
                    </a>
                </div>
                <div className="picture-part">
                    <img src={me} alt="me" width="468" height="533" />
                </div>
            </div>
        </header>
    );
};

export default Header;
