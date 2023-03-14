import React from "react";
import Button from "react-bootstrap/Button";
import Image from "../images/jcap_film_1_wtape.png";

const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="wrapper__jumbotron">
          <div className="jumbotron__content">
            <h1>Joshua Emmanuel Capito</h1>
            <p>Front-End Web Developer based in Cambridge, UK!</p>
            <div className="d-flex gap-2">
              <p>
                <a href="https://github.com/jemcap">
                  <Button className="btn btn-primary">Projects</Button>
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/capitogram/">
                  <Button className="btn btn-secondary">Follow me!</Button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="about__container">
            <div className="about__text">
              <h1>About me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                dolore error dignissimos at, soluta quia placeat. Totam, cum
                delectus dolores laudantium incidunt distinctio animi officia,
                dicta vero commodi nesciunt iusto explicabo sapiente, molestiae
                libero tempora exercitationem veniam eos alias? Rem temporibus
                cumque asperiores eveniet vitae laudantium facilis distinctio
                rerum nostrum hic quo est consequuntur praesentium iusto,
                blanditiis voluptatibus culpa possimus ad accusantium magni!
                Voluptas, dignissimos iusto. Tempora illum itaque unde eveniet
                eaque minus, consequuntur ipsa illo modi velit, repudiandae
                pariatur ipsum voluptates veritatis? Distinctio dolorem odio
                similique, exercitationem vel odit accusantium illum quaerat,
                laudantium autem assumenda quasi dolore nisi laboriosam!
              </p>
            </div>
            <div className="img__container">
              <img
                className="about__image"
                src={Image}
                width={550}
                alt="Self-Portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
