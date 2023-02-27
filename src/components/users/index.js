import React, { useState } from 'react';
import users from '../../util/index.json'

const Users = () => {
    const [userData, setSelectedUser] = useState(users)
    const [user,setSelectedData] =useState({})
    //  var [manasa, setManasa] = useState()
    const handleDelete = (index) => {
       const test = [...userData]
        test.splice(index, 1)
         setSelectedUser(test)

    }
    return (
        <div>

            <table className='table'>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Company</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {userData && userData?.map((item, index) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}</td>
                            <td>{item.phone}</td>
                            <td>{item.company.name}</td>
                            <td>
                                <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#myModal"onClick={()=>setSelectedData(item)}>Edit</button>
                                &nbsp;
                                <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>

                    })}
                </tbody>
            </table>

            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <div className='row' >
                                <div className="col-lg-6 mb-3 mt-3">
                                    <label for="name" className="form-label">id:</label>
                                    <input type="name" className="form-control" id="name" placeholder="Enter Name"
                                        name="name" value={user?.id} onChange={(e) => setSelectedUser((prev) => { return { ...prev, id: e.target.value } })} />
                                </div>
                                <div className="col-lg-6 mb-3 mt-3">
                                    <label for="name" className="form-label">Name:</label>
                                    <input type="name" className="form-control" id="name" placeholder="Enter Name"
                                        name="name" value={user?.name} onChange={(e) => 
                                        setSelectedUser((prev) => { return { ...prev, name: e.target.value } })} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label for="pwd" className="form-label">Email:</label>
                                    <input type="email" className="form-control" id="pwd"
                                        placeholder="Enter Email" name="email" value={user?.email} onChange={(e) => setSelectedUser((prev) => { return { ...prev, email: e.target.value } })} />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label for="pwd" className="form-label">Phone:</label>
                                    <input type="text" className="form-control" id="pwd"
                                        placeholder="Enter Mobile Number" name="pswd" value={user?.phone} onChange={(e) => setSelectedUser((prev) => { return { ...prev, phone: e.target.value } })} />
                                </div>
                            </div>
                            <div className='row'>
                            <div className="col-lg-6 mb-3">
                                    <label for="address.street" className="form-label">address</label>
                                    <input type="text" className="form-control" id="address.street"
                                        placeholder="Enter Mobile address" name="address.street" value={user?.phone} onChange={(e) => setSelectedUser((prev) => { return { ...prev, address: e.target.value } })} />
                                </div>
                                {/* <div className=" col-lg-6 mb-3">
                                    <label for="pwd" className="form-label">phone:</label>
                                    <input type="text" className="form-control" id="pwd"
                                        placeholder="Date Of Birth" name="pswd" value={user?.phone} onChange={(e) => setSelectedUser((prev) => { return { ...prev, phone: e.target.value } })} />
                                </div> */}
                            
                            <div className="col-lg-6  mb-3">
                                <label for="pwd" className="form-label">company:</label>
                                <input type="text" className="form-control" id="company"
                                    placeholder="company" name="pswd" value={user?.company} onChange={(e) => setSelectedUser((prev) => { return { ...prev, company: e.target.value } })} />
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" >update</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Users;