import React from "react";
import './content.css';
var Content =()=>{
     return(
      <div class="cont">
        
                <table>
             <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Place</th>
                <th>Qualification</th>
                <th>Contact</th>
              
            </tr>
            <tr>
                <td>1.</td>
                <td>Soundhar</td>
                <td>Tanjur</td>
                <td>B.E Auto</td>
                <td>9876543210</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>Udhashini</td>
                <td>Tiruvannamalai</td>
                <td>B.E EEE</td>
                <td>9345678902</td>
            </tr>
            <tr>
                <td>3.</td>
                <td>Somu</td>
                <td>Tirupature</td>
                <td>B.E Auto</td>
                <td>9287654320</td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Lakshu</td>
                <td>Tanjur</td>
                <td>B.E CSE</td>
                <td>9765432180</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Manjusha</td>
                <td>Trichy</td>
                <td>B.E ECE</td>
                <td>9765483210</td>
            </tr>
        </table>
        <h1>If Interested , Please Join ! Lets start our learning journey</h1>
      <form>
        <h2>Form</h2>
        <label>Name : </label>
        <input type="text" name="name" /><br></br><br></br>
        <label>Email : </label>
        <input type='email' name='mail' /><br></br><br></br>
        <label>Phone : </label>
        <input type='number' name='mobile' /><br></br><br></br>
        <div className='butt'>
            <button type='submit'>Submit</button>
            <button type='submit'>Cancel</button>
        </div>
      </form>
        </div>
     )
}
export default Content;