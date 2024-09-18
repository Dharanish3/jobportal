import React from "react";
import Nav from "./Nav";
import { toast } from "react-toastify";
import axios from "axios";

function App() {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      let res = await axios.post("http://localhost:8000/create", formProps);
      if (res.status === 201) {
        toast.success('Created Successfully');
        setTimeout(() => {
          window.location.reload(); 
        }, 1500);
      }
    } catch (error) {
      toast.error("Unsucess");
      console.log(error);
    }
  };
  return (
    <>
      <Nav />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="col mb-3">
              <label for="address" className="form-label">
                Address
              </label>
              <input type="text" name="address" className="form-control" />
            </div>
            <div className="col mb-3">
              <label for="fees" className="form-label">
                Fee $
              </label>
              <input type="number" name="fee" className="form-control" />
            </div>
            <div className="col mb-3">
              <label for="fees" className="form-label">
                Contractor Date
              </label>
              <input
                type="date"
                name="contractorDate"
                className="form-control"
              />
            </div>
            <div className="col mb-3">
              <label for="fees" className="form-label">
                Delivery Date
              </label>
              <input type="date" name="deliveryDate" className="form-control" />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label for="name" className="form-label">
                SubContractor
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="subContractor"
              >
                <option selected>Johny</option>
                <option value="John">John </option>
                <option value="Robert">Robert</option>
                <option value="Michael">Michael</option>
              </select>
            </div>
            <div className="col mb-3">
              <label for="fees" className="form-label">
                Marketing $
              </label>
              <input type="string" name="marketing" className="form-control" />
            </div>
            <div className="col mb-3">
              <label for="fees" className="form-label">
                Corporate $
              </label>
              <input type="string" name="corporate" className="form-control" />
            </div>
            <div className="col mb-3">
              <label for="fees" className="form-label">
                Production $
              </label>
              <input type="string" name="production" className="form-control" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
