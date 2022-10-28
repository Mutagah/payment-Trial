import React, { useState } from "react";
function Form() {
    const [formData, setFormData] = useState({})
    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    console.log(formData)
    function handleSubmit(event){
        event.preventDefault()
        fetch("http://localhost:3000/peyment",{
        method: "POST",
        headers: {
        "Content-Type" : "application/json"
      },
      body :JSON.stringify(formData)
    }).then((response)=> response.json())
    .then((data)=> console.log(data))
}
  return (
    <>
      <form>
        <div className="mb-3">
            <h3 className="text-center">Mpesa Trial</h3>
          <label className="form-label">Phone number</label>
          <input type="phonenumber" className="form-control" name="phone_number" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Enter Amount
          </label>
          <input type="number" className="form-control" name="amount" onChange={handleChange}/>
        </div>
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Form;
