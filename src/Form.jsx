import React from 'react'
import "./Tailwind.css"
const Form = () => {

    let [name , setName]=React.useState ("")
    let [email , setEmail]=React.useState ("")
    let [password , setPassword]=React.useState ("")



    let handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted with name: ${name , email , password}`);
    
        console.log("Form submitted");
    }
  return (
    <div className='m-10 p-10 border-2 border-blue-500 rounded-lg'>
      <h1 className='h-10 w-10 i'> Form handling</h1 >
      <form onSubmit={handleSubmit}>
        < div className='m-5 border-2 border-green-400 p-5 rounded-lg '>
          inter name: <input type="text" placeholder='Enter your name' value={name}  onChange={(e)=>{setName(e.target.value)}} className='border-amber-50 '/>
        <br />
         inter email: <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        <br />
         inter password: <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        <br />
        <button type='submit' className='m-5 border-2 border-green-400 p-5 rounded-lg'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
