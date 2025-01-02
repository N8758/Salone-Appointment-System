
// import React from "react";
// import "./Card.css";
// import micro from "../../assets/house.png";
// import qua from "../../assets/quality.png";
// import house from "../../assets/house.png";
// import loc from "../../assets/location.png";
// import money from "../../assets/money.png";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";


// const CustomSalonCard = ({ data }) => {
//   const navigate = useNavigate();

//   const handelBookAppoinment=()=>{
    
//   }
//   const logoStyle = {
//     height: "1em",
//     width: "1em",
//   };

//   return (
//     <div className="section_our_solution">
//       <div className="row">
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className="our_solution_category">
//             <div className="solution_cards_box">
//               <div className="solution_card">
//                 <div className="hover_color_bubble"></div>
//                 <div className="so_top_icon">
//                   <img src={data.img}  alt="Logo" />
//                 </div>
//                 <div class="solu_title" >{data.salonName}</div>
//                 <div className="solu_description">
//                   <p>
//                     <table>
//                       <tbody>
//                         <tr>
//                           <td>
//                             <img src={loc} style={logoStyle} alt="Location" />
//                           </td>
//                           <td>{data.location}</td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <img src={money} style={logoStyle} alt="Salary" />
//                           </td>
//                           <td>{data.price}</td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <img src={qua} style={logoStyle} alt="Experience" />
//                           </td>
//                           <td>Experience</td>
//                         </tr>
                       
//                       </tbody>
//                     </table>
//                   </p>
//                   <Button variant="primary" onClick={handelBookAppoinment}>Book Appoinment</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomSalonCard

import React, { useState} from "react";
import "./Card.css";
import loc from "../../assets/location.png";
import money from "../../assets/money.png";
import qua from "../../assets/quality.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import profile from "../../assets/prabhat.jpg";
import { useNavigate } from "react-router-dom";


const CustomSalonCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email] = useState(localStorage.getItem('email'));
  const [mobileNumber, setMobileNumber] = useState("");

  const navigate=useNavigate();
  const handleBookAppointment = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAppointmentConfirmation = () => {
    // Here you can handle the appointment booking, for example, send the data to the backend
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Name:", name);
    console.log("Mobile Number:", mobileNumber);

    // Close the modal after handling the appointment
    axios.post(`http://localhost:8000/salon/takeappoinment/${data._id}`,{email:email,phone:mobileNumber,name:name,appointmentAt:date}).then((res)=>{
      alert(res.data.msg);

    setShowModal(false);
    }).catch((error)=>{
      alert(error)
    })
 
  };

  const logoStyle = {
    height: "1em",
    width: "1em",
  };

  return (
    <div className="section_our_solution" >
      <div className="row" >
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="our_solution_category" >
            <div className="solution_cards_box">
              <div className="solution_card" style={{background:""}}>
                <div className="hover_color_bubble"></div>
                <div className="so_top_icon">
                  <img src={profile} alt="Logo" />
                  
                </div>
                <div className="solu_title"><h3>{data.salonName}</h3></div>
                <div className="solu_description">
                  <p>
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <img src={loc} style={logoStyle} alt="Location" />
                          </td>
                          <td>{"Gulewadi, Sangamner"}</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={money} style={logoStyle} alt="Salary" />
                          </td>
                          <td>{"Premiunm"}</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={qua} style={logoStyle} alt="Experience" />
                          </td>
                          <td>5 years</td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                  {localStorage.getItem('isLogin')==='true'?
                  <Button variant="primary" onClick={handleBookAppointment}>
                    Book Appointment
                  </Button>
                  :
                  <Button variant="primary" onClick={()=>{navigate('/login')}}>
                   Please Login
                  </Button>
}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            Your Email: 
            <h6>{localStorage.getItem('email')}</h6>
            <div className="mb-3">
              <label>Date:</label>
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Time:</label>
              <input
                type="time"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Mobile Number:</label>
              <input
                type="tel"
                className="form-control"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAppointmentConfirmation}>
            Confirm Appointment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomSalonCard;
