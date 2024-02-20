import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StudentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    studentName: "",
    gender: "",
    email: "",
    phno: "",
    address: "",
    department: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post(
        "http://localhost:3001/login/create",
        {
          username: formData.username,
          password: formData.password,
          role: "student",
        }
      );
      const data = {
        userid: loginResponse?.data?.data?.userid,
        username: loginResponse?.data?.data?.username,
        name: formData.studentName,
        gender: formData.gender,
        email: formData.email,
        Phno: formData.phno,
        address: formData.address,
        department: formData.department,
      };
      console.log(data, "data");
      console.log(loginResponse, "loginResponse");
      if (loginResponse.data.message === "Login created successfully") {
        const studentResponse = await axios.post(
          "http://localhost:3001/student/create",
          {
            userid: loginResponse?.data?.data?.userid,
            username: loginResponse?.data?.data?.username,
            name: formData.studentName,
            gender: formData.gender,
            email: formData.email,
            Phno: formData.phno,
            address: formData.address,
            department: formData.department,
          }
        );

        console.log(studentResponse.data, "studentResponse.data");

        setFormData({
          username: "",
          password: "",
          studentName: "",
          gender: "",
          email: "",
          phno: "",
          address: "",
          department: "",
        });

        alert("Student created successfully");
        navigate("/");
      } else {
        alert("Error creating login. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error creating student. Please try again.");
    }
  };

  return (
    <div className="container">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Student Form
                  </p>

                  <form onSubmit={handleSubmit} class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example1c">
                          Username:
                        </label>
                        <input
                          type="text"
                          id="form3Example1c"
                          class="form-control"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example3c">
                          Password:
                        </label>
                        <input
                          type="password"
                          id="form3Example3c"
                          class="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4c">
                          Student Name:
                        </label>
                        <input
                          type="text"
                          id="form3Example4c"
                          class="form-control"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd">
                          Gender:
                        </label>
                        <input
                          type="text"
                          id="form3Example4cd"
                          class="form-control"
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd">
                          Email:
                        </label>
                        <input
                          type="email"
                          id="form3Example4cd"
                          class="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd">
                          Phone Number:
                        </label>
                        <input
                          type="tel"
                          id="form3Example4cd"
                          class="form-control"
                          name="phno"
                          value={formData.phno}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd">
                          Address:
                        </label>
                        <input
                          type="text"
                          id="form3Example4cd"
                          class="form-control"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="form3Example4cd">
                          Department:
                        </label>
                        <input
                          type="text"
                          id="form3Example4cd"
                          class="form-control"
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div class="d-flex">
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 aa-student d-flex align-items-center order-1 order-lg-2">
                  {/* <img
                    src="./assets/images/registerImage.jpg"
                    class="img-fluid register_image"
                    alt="Sample image"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
