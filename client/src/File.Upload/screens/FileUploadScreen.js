import React, { useState } from 'react';
import { MultipleFileUpload, singleFileUpload } from '../data/api';

const FileUploadScreen = (props) => {
    const [singleFile, setSingleFile] = useState('')
    const [multipleFiles, setMultipleFiles] = useState('')
    const [title, setTitle] = useState('')
    
    const singleFileChange = e => {
        setSingleFile(e.target.files[0])
        console.log(e.target.files[0])
    }
    const multipleFilesChange = e => {
        setMultipleFiles(e.target.files)
        console.log(e.target.files)
    }
    const uploadSingleFile = async () => {
        try {
            const formData = new FormData()
            formData.append('title', title)
            formData.append('file', singleFile)
            // await singleFileUpload(formData)
            console.log(singleFile.name)
            props.getSingle()
        }
        catch (error) {
            console.log(error)
        }
    }
    const uploadMultipleFile = async () => {
        try {
            const formData = new FormData()
            formData.append('title', title)
            for (let i = 0; i < multipleFiles.length; i++) {
                formData.append('files', multipleFiles[i].name)
            }
            // await MultipleFileUpload(formData)
            console.log(multipleFiles)
            props.getMultiple()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div className="row border-end my-2">
                        <div className="col-12 pe-5">
                            <label className="text-uppercase mt-3 mb-2">Title</label>
                            <input type="text" placeholder="Enter title for your gallery" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="form-group col-12 pe-5">
                            <label className="text-uppercase mt-3 mb-2">Select Single File</label>
                            <input type="file" className="form-control" onChange={(e) => singleFileChange(e)} />
                        </div>
                        <div className="row mt-3">
                            <div className="text-center pe-4">
                                <button type="button" className="btn btn-danger w-25 text-uppercase" onClick={() => { uploadSingleFile() }}>Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row my-2">
                        <div className="col-12 pe-5">
                            <label className="text-uppercase mt-3 mb-2">Title</label>
                            <input type="text" placeholder="Enter title for your gallery" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="col-12 pe-5">
                            <label className="text-uppercase mt-3 mb-2">Select Multiple Files</label>
                            <input type="file" className="form-control" multiple onChange={(e) => multipleFilesChange(e)} />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="text-center pe-4">
                            <button type="button" className="btn btn-danger w-25 text-uppercase" onClick={() => { uploadMultipleFile() }}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileUploadScreen;