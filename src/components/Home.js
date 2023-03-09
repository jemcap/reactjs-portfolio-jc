import React from "react";
import Button from "react-bootstrap/Button";
import Image from "../assets/jcap_film_1_wtape.png";

const Home = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="wrapper__jumbotron">
          <div className="jumbotron__content">
            <h1>Joshua Emmanuel Capito</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <div className="d-flex gap-2">
              <p>
                <Button bsStyle="primary">Projects</Button>
              </p>
              <p>
                <Button bsStyle="secondary">Follow me!</Button>
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
              <img className="about__image" src={Image} width={550} alt="Self-Portrait" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
