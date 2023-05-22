import "./styles.css";

const Header = () => {
  return ( 
    <header className="header">
        <div className="header__wrapper">
            <h1 className="header__title">
                <strong>Hi, my name is <em>Serhii</em></strong><br />
                a web developer
            </h1>
            <div className="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a target="_blank" href="https://docs.google.com/document/d/1_ikJCpuJd_Of9Bn8HAg_Y7IpU4P02wtBozkuMtce-lw/edit?usp=sharing" className="btn">Download CV</a>
        </div>
    </header>
   );
}
 
export default Header;