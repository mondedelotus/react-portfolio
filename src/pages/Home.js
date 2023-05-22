import Header from "./../components/header/header";

const Home = () => {
    return ( 
      <>
        <Header />

        <main className="section">
            <div className="container">

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Skills</h2>
                            <p>WordPress, HTML/CSS/JS, SCSS, React, Vue, PHP, Git, Redmine, Emmet, Gulp, Figma, Insomnia, Google Tag Manager, Google Apps Script, AtomicCSS, BEM, Open Server, VS Code, VMWare, Linux
                            </p>
                        </li>
                        {/* <li className="content-list__item">
                            <h2 className="title-2">In learning</h2>
                            <p>ReactJS</p>
                        </li> */}
                        {/* <li className="content-list__item">
                            <h2 className="title-2">Want to learn</h2>
                            <p>NodeJS</p>
                        </li> */}
                    </ul>

            </div>
        </main>
      </>
   );
}
 
export default Home;