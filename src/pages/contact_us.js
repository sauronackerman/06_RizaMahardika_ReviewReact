import React, { useState } from "react";
import "./style.css";
import logo from "./img/logo-ALTA-v2.png";
import validator from "validator";
import { useHistory } from "react-router";

const Contact = (props) => {
  const dataKosong = {
    nama: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  };

  const [data, setData] = useState(dataKosong);
  const [errName, setErrName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errNat, setErrnat] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // jika ada yang mudah kenapa bikin yang susah? wkwk
    if (name === "nama")
      validator.isAlpha(value) && value !== ""
        ? setErrName("")
        : setErrName("Nama tidak boleh kosong dan harus berupa huruf");

    if (name === "email")
      validator.isEmail(value) && value !== ""
        ? setErrEmail("")
        : setErrEmail("Email harus diisi dengan email yang valid");

    if (name === "phone")
      validator.isMobilePhone(value.toString(), "id-ID") && value !== ""
        ? setErrPhone("")
        : setErrPhone("Gunakan nomor handphone Indonesia saja");

    if (name === "nationality")
      validator.isEmpty(value)
        ? setErrnat("Nationality harus diisi")
        : setErrnat("");

    setData({
      ...data,
      [name]: value,
    });
  };

  const resetData = () => {
    setData(dataKosong);
    setErrEmail("");
    setErrName("");
    setErrnat("");
    setErrPhone("");
  };
  // const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (errName !== "" || errEmail !== "" || errPhone !== "" || errNat !== "") {
      return alert("Terdapat data yang tidak sesuai");
    } else {
      alert(`Form anda berhasil diterima`);
      props.history.push("/review");
    }
    resetData();
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-image-2 image-contact">
            <img
              src={logo}
              alt="logo alterra"
              className="logo-alterra-contact"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="col align-self-center contact-box"
          >
            <p>Contact Us</p>
            <div className="form-group was-validated mb-2">
              <label for="name">Full Name</label>
              <input
                type="text"
                onChange={handleInput}
                className="form-control form-control-sm is-invalid"
                id="name"
                value={data.nama}
                name="nama"
                placeholder="Your full name here..."
                required
              />
              {errName !== "" ? (
                <>
                  <span>{errName}</span>
                  <br />
                </>
              ) : null}
            </div>
            <div className="form-group was-validated mb-2">
              <label for="email">Email Address</label>
              <input
                type="email"
                onChange={handleInput}
                className="form-control form-control-sm is-invalid"
                id="email"
                name="email"
                value={data.email}
                placeholder="example@domain.com"
                required
              />
              {errEmail !== "" ? (
                <>
                  <span>{errEmail}</span>
                  <br />
                </>
              ) : null}
            </div>
            <div className="form-group was-validated mb-2">
              <label for="phone-number">Phone Number</label>
              <input
                type="text"
                onChange={handleInput}
                className="form-control form-control-sm is-invalid"
                id="phone-number"
                minLength="9"
                maxLength="13"
                name="phone"
                value={data.phone}
                placeholder="08573890xxxxx"
                required
              />
              {errPhone !== "" ? (
                <>
                  <span>{errPhone}</span>
                  <br />
                </>
              ) : null}
            </div>
            <div className="form-group mb-2">
              <label for="nationality">Nationality</label>
              <select
                onChange={handleInput}
                name="nationality"
                value={data.nationality}
                className="form-control form-control-sm"
                id="nationality"
                required
              >
                <option value="">&#x25BE; Selected</option>
                <option value="Indonesia">Indonesia</option>
                <option value="USA">USA</option>
                <option value="China">China</option>
                <option value="other">Other</option>
              </select>
              {errNat !== "" ? (
                <>
                  <span>{errNat}</span>
                  <br />
                </>
              ) : null}
            </div>
            <div className="form-group mb-3">
              <label for="message">Message</label>
              <textarea
                className="form-control form-control-sm"
                onChange={handleInput}
                id="message"
                rows="3"
                name="message"
                maxLength="200"
                value={data.message}
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn-costum mt-4 rounded-pill">
              Submit
            </button>
            <button
              onClick={resetData}
              type="button"
              className="btn-costum mt-4 rounded-pill"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
