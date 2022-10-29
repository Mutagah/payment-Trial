import React, { useState } from "react";
function Form() {
    const [formData, setFormData] = useState({})
    let date = new Date();

  let timestamp = date.getFullYear() +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    ("0" + date.getDate()).slice(-2) +
    ("0" + date.getHours()).slice(-2) +
    ("0" + date.getMinutes()).slice(-2) +
    ("0" + date.getSeconds()).slice(-2);

    function handleChange(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }
    function handleSubmit(event){
        event.preventDefault()
    //     fetch("http://localhost:3000/peyment",{
    //     method: "POST",
    //     headers: {
    //     "Content-Type" : "application/json"
    //   },
    //   body :JSON.stringify(formData)
    // }).then((response)=> response.json())
    // .then((data)=> console.log(data))

    fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, body :JSON.stringify({
        BusinessShortCode:"174379",    
        Password: btoa( "174379" + "4LymgXU3bRPSNGn7Dxe36oUxoWvIKeGt" +timestamp),    
        Timestamp:timestamp,    
        TransactionType: "CustomerPayBillOnline",    
        Amount:"1",    
        PartyA:"254727249154",    
        PartyB:"174379",    
        PhoneNumber:"254727249154",    
        CallBackURL:"https://payment-trial-mpay.herokuapp.com/",    
        AccountReference:"ETickets",    
        TransactionDesc:"ETickets" 
      })
    }).then (response => response.json()).then((data)=> console.log(data))
}
console.log(timestamp)
console.log(btoa( "174379" + "4LymgXU3bRPSNGn7Dxe36oUxoWvIKeGt" +timestamp));
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
