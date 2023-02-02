import { useParams, useLocation } from 'react-router';
import { useState } from "react"

import TimeNow from '../partials/TimeNow';
import Sidebar from '../partials/Sidebar';
import RegisteredStudentList from "../../components/bin/RegisteredStudentList.json"

const Dashboard = () => {
    const location = useLocation();
    const firstName = location.state?.data?.firstName;
    let { uid } = useParams();

    const [student, setStudent] = useState({
        id: 0,
        nik: "-",
        name: "-",
        alamat: "-",
        certificate: "-",
        gender: "-",
        kelas: "-"
    })

    return (
        <div className="dashboard">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <div className="main">
                        <TimeNow /> {firstName}
                        <div className="mt-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <h3>Daftar Mahasiswa</h3>
                                    {/* fetch data dari json */}
                                    {
                                        RegisteredStudentList.map((item, index) => {
                                            return (
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div key={index}>
                                                            <p>{item.nik}</p>
                                                            <p>{item.name}</p>
                                                            <p>{item.kelas}</p>
                                                            <button
                                                                onClick={() => {
                                                                    setStudent({
                                                                        id: item.id,
                                                                        nik: item.nik,
                                                                        name: item.name,
                                                                        alamat: item.alamat,
                                                                        certificate: 'yes',
                                                                        gender: item.gender,
                                                                        kelas: item.kelas
                                                                    })
                                                                }}
                                                            >Preview</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                </div>
                                <div className="col-md-6">
                                    {/* preview data */}
                                    <h3>Preview</h3>
                                    <div className="border">
                                        <p>ID           : {student.id}</p>
                                        <p>NIM          : {student.nik}</p>
                                        <p>Nama         : {student.name}</p>
                                        <p>Alamat       : {student.alamat}</p>
                                        <p>Certificate  : {student.certificate}</p>
                                        <p>Gender       : {student.gender}</p>
                                        <p>Kelas        : {student.kelas}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;