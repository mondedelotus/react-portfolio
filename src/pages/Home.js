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
                            <p>HTML/CSS/JS, SASS/SCSS, WordPress, Vue, PHP, Git, Redmine API, Emmet, Figma, Insomnia/Postman, Google Tag Manager, Google Apps Script, AtomicCSS, Open Server, VS Code, VMWare, Linux
                            </p>
                            <br></br>
                            <h3 className="title-3">applied only in test projects</h3>
                            <p>React, Gulp, BEM
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