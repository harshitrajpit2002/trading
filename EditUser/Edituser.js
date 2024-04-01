import React, { useState } from 'react';
import './Edituser.css';

const Edituser = () => {
    const [loginId, setLoginId] = useState('');
    const [entityType, setEntityType] = useState('');
    const [entityCode, setEntityCode] = useState('');
    const [userName, setUserName] = useState('');
    const [emailID, setEmailID] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [celUserType, setCelUserType] = useState('Admin');
    const [status, setStatus] = useState('Active');
    const [isDeleted, setIsDeleted] = useState('No');
    const [createdBy, setCreatedBy] = useState('');
    const [lastModifiedBy, setLastModifiedBy] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'loginId':
                setLoginId(value);
                break;
            case 'entityType':
                setEntityType(value);
                break;
            case 'entityCode':
                setEntityCode(value);
                break;
            case 'userName':
                setUserName(value);
                break;
            case 'emailID':
                setEmailID(value);
                break;
            case 'mobileNumber':
                setMobileNumber(value);
                break;
            case 'celUserType':
                setCelUserType(value);
                break;
            case 'status':
                setStatus(value);
                break;
            case 'isDeleted':
                setIsDeleted(value);
                break;
            case 'createdBy':
                setCreatedBy(value);
                break;
            case 'lastModifiedBy':
                setLastModifiedBy(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your submit logic here
        console.log('Form submitted with the following data:');
        console.log('Login ID:', loginId);
        console.log('Entity Type:', entityType);
        console.log('Entity Code:', entityCode);
        console.log('User Name:', userName);
        console.log('Email ID:', emailID);
        console.log('Mobile Number:', mobileNumber);
        console.log('CEL User Type:', celUserType);
        console.log('Status:', status);
        console.log('Is Deleted:', isDeleted);
        console.log('Created By:', createdBy);
        console.log('Last Modified By:', lastModifiedBy);

        setLoginId('');
        setEntityType('');
        setEntityCode('');
        setUserName('');
        setEmailID('');
        setMobileNumber('');
        setCelUserType('Admin');
        setStatus('Active');
        setIsDeleted('No');
        setCreatedBy('');
        setLastModifiedBy('');
    };

    return (
        <>
            <h1>CEL User Management</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="form-group">
                        <label htmlFor="loginId">Login ID:</label>
                        <input type="text" name="loginId" id="loginId" value={loginId} onChange={handleChange} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="entityType">Entity Type:</label>
                        {/* <input type="text" name="entityType" id="entityType" value={entityType} onChange={handleChange} /> */}
                    </div>
                    <div className="form-group" >
                        <label htmlFor="entityCode">Entity Code:</label>
                        {/* <input type="text" name="entityCode" id="entityCode" value={entityCode} onChange={handleChange} /> */}
                    </div>
                    <div className="form-group" >
                        <label htmlFor="userName">User Name:</label>
                        <input type="text" name="userName" id="userName" value={userName} onChange={handleChange} />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="form-group" >
                        <label htmlFor="emailID">Email ID: <a style={{paddingLeft:"100px"}} href="">send Verification link</a></label>
                        
                        <input type="email" name="emailID" id="emailID" value={emailID} onChange={handleChange} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="mobileNumber">Mobile Number:</label>
                        <input type="number" name="mobileNumber" id="mobileNumber" value={mobileNumber} onChange={handleChange} />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="celUserType">CEL User Type:</label>
                        <select name="celUserType" id="celUserType" value={celUserType} onChange={handleChange}>
                            <option value="Admin">Admin</option>
                            <option value="superAdmin">SuperAdmin</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="form-group" >
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status" value={status} onChange={handleChange}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div style={{width:"340px"}} className="form-group" >
                    <label htmlFor="isDeleted">Is Deleted:</label>
                    <select name="isDeleted" id="isDeleted" value={isDeleted} onChange={handleChange}>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
                <div className="form-group" >
                    <label htmlFor="createdBy">Created By:</label>
                    {/* <input type="text" name="createdBy" id="createdBy" value={createdBy} onChange={handleChange} /> */}
                </div>
                
                </div>
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </>
    );
};

export default Edituser;
