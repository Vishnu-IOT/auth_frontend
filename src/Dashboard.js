import React from 'react'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
    const location = useLocation();
    const given = location.state;
    return (
        <div>
            <h1> Welcome to Dashboard </h1>
            <select>
                {Object.keys(given[0]).map((key, index) => {
                    return (
                        <option key={index}><b>{key}</b></option>
                    );
                })}
            </select>
            <div>
                <table>
                    <thead>
                        <tr>
                            {Object.keys(given[0]).map((key, index) => {
                                return (
                                    <td key={index}><b>{key}</b></td>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {given.map((key, index) => {
                            return (
                                <tr key={index}>
                                    <td>{key.id}</td>
                                    <td>{key.name}</td>
                                    <td>{key.email}</td>
                                    <td>{key.username}</td>
                                    <td>{key.password}</td>
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard
