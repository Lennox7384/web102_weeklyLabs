import React from "react";
import Event from "./Event";

//creating a React functional component
const Calendar =()=>{
    return (
        /**Creating a Grid in the Calendar component */
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="time">8 am</td>
                    <Event event='Bundy at a motel' color='muted-green' location = "Lake City"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <td></td>
                    <Event event='Police search' color='warming-orange' location ="Lake City" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Bundy gets caught' color='final-black' location="Pensacola"/>
                    </tr>

                    <tr>
                    <td className="time">11 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">12 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Bundy flees' color='fading-yellow' location ="Tallahassee" />
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">1 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Police get tips' color='urgent-crimson' location= "Tallahassee" />
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">2 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">3 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">4 pm</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Blends in Crowd' color='burnt-amber' location= "Tallahassee" />
                    <td></td>
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">5 pm</td>
                    <td></td>
                    <Event event='Bundy kidnaps Leach' color='shadow-red' location="Lake City" />
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Calendar;
