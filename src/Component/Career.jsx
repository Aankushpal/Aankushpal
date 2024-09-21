import React, { useState } from 'react'

const Career = () => {
  const [user, setuser] = useState("")
  const [city, setcity] = useState("Satna")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(user)
    console.log(city)
}

  return (
    <div className='w-full h-[calc(100vh-5vw)] bg-zinc-800 text-black p-5 '>
        <form onSubmit={submitHandler}>
                <input className='outline-none pl-3 py-2 rounded-lg'
                    type="text" placeholder='username' value={user} onChange={(e) => {
                        setuser(e.target.value)
                        // console.log(user)
                    }} />
                <select defaultValue={city} onChange={(e) => { setcity(e.target.value) }}>
                    <option value="satna">Satna</option>
                    <option value="bhopal">Bhopal</option>
                    <option value="jabalpur">Jabalpur</option>
                </select>
                <button className='text-white ml-3 bg-green-500 py-1 px-4 rounded-md '>Submit</button>
            </form>
            <div className='mt-10 text-black w-fit h-fit bg-gray-300 py-2 px-4 rounded-lg flex gap-x-5'>
                <h5>{user}</h5>
                <h5>{city}</h5>
            </div>
    </div>
  )
}

export default Career