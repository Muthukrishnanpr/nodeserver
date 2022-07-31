import React from 'react';
import { FaBeer } from 'react-icons/fa';
const MainPage = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        Table
                    </div>
                    <div className="col-4">
                        <div className="upload-cards">
                            <h3 className="py-5 text-black">hello <FaBeer /></h3>
                            <form>
                                <div className="input-group">
                                    <label className="form-label" htmlFor="author">Author Name</label>
                                    <input type="text" placeholder="Author Name" name="name" id="author" className="form-control" />
                                </div>
                                <div className="input-group">
                                    <label className="form-label" htmlFor="role">Role</label>
                                    <input type="text" placeholder="Role" name="role" id="role" className="form-control" />
                                </div>
                                <div className="input-group">
                                    <label className="form-label" htmlFor="description">Description</label>
                                    <textarea id="description" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="contact" className="form-label">Contact Detailes</label>
                                    <input type="text" className="form-control" id="contact" />
                                </div>
                                <div className="submit-btn">
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;