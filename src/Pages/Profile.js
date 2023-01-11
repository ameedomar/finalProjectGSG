import React, { ImageBackground, Text, View } from "react";
import clinic from "../imgs/clinic.png";
import ameed from "../imgs/ameed.JPG";
import { BsFacebook, BsTwitter, BsSkype } from "react-icons/bs";
import "../Styles/profile.scss";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";

// import { moneyCover } from "../imgs/moneyCover";
function Profile(props) {
  let coverImg = require("../imgs/moneyCover.jpg");

  return (
    // <div className="container emp-profile">
    //   <form method="">
    //     <div className="row">
    //       <div className="col-md-4">
    //         <img src={clinic} alt="Change this image"></img>
    //       </div>

    //       <div className="col-md-6">
    //         <div className="profile-head">
    //           <h5> vind thapa</h5>
    //           <h5> web devoloper</h5>
    //           <p className="prodile-rating mt-3 mb-5">
    //             {" "}
    //             Rankings: <span>1/10</span>
    //           </p>

    //           <ul className="nav nav-tabs" role="tablist">
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link-actibe"
    //                 id="home-tab"
    //                 data-toggle="tab"
    //                 href="#home"
    //                 role="tab"
    //               >
    //                 About
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link-actibe"
    //                 id="home-tab"
    //                 data-toggle="tab"
    //                 href="#home"
    //                 role="tab"
    //               >
    //                 Time Line
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>

    //       <div className="col-md-2">
    //         <input
    //           type="submit"
    //           className="profile-edit-btn"
    //           name="btnAddMore"
    //           value=""
    //         ></input>
    //       </div>
    //     </div>
    //   </form>
    // </div>

    <div className="main-div">
      <div className="col">
        <div className="cover-div">
          <div className="cover-img">
            {/* <img src={coverImg} alt="Cover image" width="100%"></img> */}
          </div>
        </div>
        <div className="profile-design">
          <div className="vh-100" style={{ backgroundColor: "#212529" }}>
            <MDBContainer className="container py-5 h-100">
              <MDBRow className="justify-content-center align-items-center h-100">
                <MDBCol md="12" xl="4">
                  <MDBCard style={{ borderRadius: "15px" }}>
                    <MDBCardBody className="text-center">
                      <div className="mt-3 mb-4">
                        <MDBCardImage
                          src={ameed}
                          className="rounded-circle"
                          fluid
                          style={{ width: "120px" }}
                        />
                      </div>
                      <MDBTypography tag="h4">Ameed Omar</MDBTypography>
                      <MDBCardText className="text-muted mb-4 col">
                        Front-End Developer{" "}
                        <div>
                          <a> @GazaSkyGeeks</a>{" "}
                        </div>
                      </MDBCardText>
                      <div className="mb-4 pb-2">
                        <MDBBtn outline floating>
                          <MDBIcon fab icon="facebook" size="lg" />
                          <BsFacebook />
                        </MDBBtn>
                        <MDBBtn outline floating className="mx-1">
                          <MDBIcon fab icon="twitter" size="lg" />
                          <BsTwitter />
                        </MDBBtn>
                        <MDBBtn outline floating>
                          <MDBIcon fab icon="skype" size="lg" />
                          <BsSkype />
                        </MDBBtn>
                      </div>
                      <MDBBtn rounded size="md" href="/">
                        Show Transaction History
                      </MDBBtn>
                      <div className="d-flex justify-content-between text-center mt-5 mb-2">
                        <div>
                          <MDBCardText className="mb-1 h5">3770</MDBCardText>
                          <MDBCardText className="small text-muted mb-0">
                            Wallets Balance
                          </MDBCardText>
                        </div>
                        <div className="px-3">
                          <MDBCardText className="mb-1 h5">8512</MDBCardText>
                          <MDBCardText className="small text-muted mb-0">
                            Total Income
                          </MDBCardText>
                        </div>
                        <div>
                          <MDBCardText className="mb-1 h5">4751</MDBCardText>
                          <MDBCardText className="small text-muted mb-0">
                            Total Transactions
                          </MDBCardText>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
