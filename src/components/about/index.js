import React, { useState } from 'react';
import about from '../../util/index1.json'

const About = () => {
    const [x, setX] = useState(about)
    const [x1,setX1] =useState({})
    //  var [manasa, setManasa] = useState()
    const handleDelete = (index) => {
       const test = [...x]
        test.splice(index, 1)
         setX(test)

    }
    return (
        <div>

            <table className='table'>
                <thead>
                    <th>userId</th>
                    <th>Id</th>
                    <th>title</th>
                    
                </thead>
                <tbody>
                    {x && x?.map((item, index) => {
                        return <tr>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>

                            <td>
                                <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#myModal"onClick={()=>setX1(item)}>Edit</button>
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
                                    <label for="name" className="form-label">userId:</label>
                                    <input type="name" className="form-control" id="name" placeholder="enter id"
                                        name="name" value={x1?.userId} onChange={(e) => setX((prev) => { return { ...prev, userId: e.target.value } })} />
                                </div>
                                <div className="col-lg-6 mb-3 mt-3">
                                    <label for="name" className="form-label">Id:</label>
                                    <input type="name" className="form-control" id="name" placeholder="Enter id"
                                        name="name" value={x1?.Id} onChange={(e) => 
                                        setX((prev) => { return { ...prev, Id: e.target.value } })} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 mb-3">
                                    <label for="pwd" className="form-label">title:</label>
                                    <input type="email" className="form-control" id="name"
                                        placeholder="Enter title" name="email" value={x1?.title} onChange={(e) => setX((prev) => { return { ...prev, title: e.target.value } })} />
                                </div>
                                {/* <div className="col-lg-6 mb-3">
                                    <label for="pwd" className="form-label">Phone:</label>
                                    <input type="text" className="form-control" id="pwd"
                                        placeholder="Enter Mobile Number" name="pswd" value={x1?.phone} onChange={(e) => setX((prev) => { return { ...prev, phone: e.target.value } })} />
                                </div> */}
                            </div>
                            {/* <div className='row'>
                            <div className="col-lg-6 mb-3">
                                    <label for="address.street" className="form-label">address</label>
                                    <input type="text" className="form-control" id="address.street"
                                        placeholder="Enter Mobile address" name="pswd" value={x1?.phone} onChange={(e) => setX((prev) => { return { ...prev, address: e.target.value } })} />
                                </div> */}
                                {/* <div className=" col-lg-6 mb-3">
                                    <label for="pwd" className="form-label">phone:</label>
                                    <input type="text" className="form-control" id="pwd"
                                        placeholder="Date Of Birth" name="pswd" value={x1?.phone} onChange={(e) => setX((prev) => { return { ...prev, phone: e.target.value } })} />
                                </div> */}
                            
                            {/* <div className="col-lg-6  mb-3">
                                <label for="pwd" className="form-label">company:</label>
                                <input type="text" className="form-control" id="company"
                                    placeholder="company" name="pswd" value={x1?.company} onChange={(e) => setX((prev) => { return { ...prev, company: e.target.value } })} />
                            </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary" >update</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        

    );
}

export default About;