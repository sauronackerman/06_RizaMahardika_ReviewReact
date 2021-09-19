import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useSelector } from "react-redux";
const Review = () => {
  const value = useSelector((state) => state.user.value);

  return (
    <>
      <div className="body-review">
        <div className="container-review">
          <div className="img-box">
            <div className="borderform">
              <div className="review">
                <section className="for-form">
                  <table>
                    <tbody>
                      <tr>
                        <td className="td-t">Full Name</td>
                        <td>:</td>
                        <td className="transf">&nbsp;{value.nama}</td>
                      </tr>
                      <tr>
                        <td className="td-t">Email Address</td>
                        <td>:</td>
                        <td>&nbsp;{value.email}</td>
                      </tr>
                      <tr>
                        <td className="td-t">Phone Number</td>
                        <td>:</td>
                        <td>&nbsp;{value.phone}</td>
                      </tr>
                      <tr>
                        <td className="td-t">Nationality</td>
                        <td>:</td>
                        <td>&nbsp;{value.nationality}</td>
                      </tr>
                    </tbody>
                  </table>
                </section>
                <section className="sapaan">
                  <p>
                    Hi <span className="transf">{value.nama}</span>, I’m Mike
                    from Monsters, Inc. I’ve seen your previous project and it
                    was really amazing. And as you know our company are planning
                    to build new mobile application. I hope you can join us to
                    develope this application. We look forward to hearing from
                    you and hope you’ll join our project!
                  </p>
                </section>
                <section className="back-home">
                  <p>
                    Thanks for contacting us! We will be in touch with you
                    shortly.
                  </p>
                  <button className="btn button-home-review">
                    <Link to="/">Home</Link>
                  </button>

                  <button
                    style={{ marginLeft: 10 }}
                    className="btn button-home-review"
                  >
                    <Link to="/news">Read News</Link>
                  </button>
                  <button
                    style={{
                      marginLeft: 10,
                    }}
                    className="btn button-home-review"
                  >
                    <Link to="/contact">Back</Link>
                  </button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
