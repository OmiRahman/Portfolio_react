import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education</h1>
            <Widecard title="Bs. CSE" where="United International University" from="November 2018" to="Present"/>
            <Widecard title="HSC" where="Uttara Model College" from="2016" to="2018"/>
            </div>
            )
        }
    }
    
export default Education
    