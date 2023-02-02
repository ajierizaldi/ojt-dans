// import { useState } from "react"

// import RegisteredStudentList from "../../components/bin/RegisteredStudentList"

// const Mahasiswa = () => {
//     const [student, setStudent] = useState({
//         id: 1,
//         nik: "",
//         name: "",
//         alamat: "",
//         certificate: "",
//         gender: "",
//         kelas: ""
//     })
//     return (
//         <div>
//             <h1>Daftar Mahasiswa</h1>
//             {/* fetch data dari json */}
//             {
//                 RegisteredStudentList.map((item, index) => {
//                     return (
//                         <div key={index}>
//                             <p>{item.nik}</p>
//                             <p>{item.name}</p>
//                             <p>{item.kelas}</p>
//                             <button
//                                 onClick={() => {
//                                     setStudent({
//                                         id: item.id,
//                                         nik: item.nik,
//                                         name: item.name,
//                                         alamat: item.alamat,
//                                         certificate: 'yes',
//                                         gender: item.gender,
//                                         kelas: item.kelas
//                                     })
//                                 }}
//                             >Preview</button>
//                         </div>
//                     )
//                 })}

//             {/* preview data */}
//             <div className="border">
//                 <h1>Preview</h1>
//                 <p>{student.id}</p>
//                 <p>{student.nik}</p>
//                 <p>{student.name}</p>
//                 <p>{student.alamat}</p>
//                 <p>{student.certificate}</p>
//                 <p>{student.gender}</p>
//                 <p>{student.kelas}</p>
//             </div>
//         </div>
//     )
// }

// export default Mahasiswa