import React, { useState } from "react";
function Form() {
    const [formData, setFormData] = useState({})
    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    
  return (
    <>
      <form>
        <div className="mb-3">
            <h3 className="text-center">Mpesa Trial</h3>
          <label className="form-label">Phone number</label>
          <input type="phonenumber" className="form-control" name="phonenumber" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Enter Amount
          </label>
          <input type="number" className="form-control" name="amount" onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Form;
