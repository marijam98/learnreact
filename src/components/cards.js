import React, { useEffect, useState } from "react";
import '../components/Slider/slider.css';
const Cards = () => {
    const [data, setData] = useState([])
    const users = [
        {
            id: 1,
            name: "Luca",
            sureName: "Anders",
            state: true
        },
        {
            id: 2,
            name: "An",
            sureName: "Watson",
            state: true
        },
        {
            id: 3,
            name: "Sarah",
            sureName: "Smitih",
            state: false
        },
        {
            id: 4,
            name: "Johanna",
            sureName: "Jones",
            state: false
        },
        {
            "id": 5,
            "name": "Sam",
            "sureName": "Parker",
            "state": true
        },
        {
            "id": 6,
            "name": "James",
            "sureName": "Williams",
            "state": false
        }]

    useEffect(() => {
        setData(users)
    }, [])

    const deactivate = (id) => {
        console.log('lalala')
        console.log(id)
    }

    return (
        <div className="slider">
            <table>
                <thead>Active users</thead>
                <tbody>{data.filter((data) => { return data.state === true })

                    .map((user) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.state ? 'Active' : ''}</td>
                                <td><button className='button' onClick={() => deactivate(user)}>deactivate</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <table>
                <thead>Inactive users</thead>
                <tbody>{data.filter((data) => { return data.state === false })
                    .map((user) => {
                        return (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.state ? '' : 'Inactive'}</td>
                                <td><button className='button'>activate</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Cards