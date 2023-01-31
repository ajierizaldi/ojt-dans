import TimeNow from '../partials/TimeNow';
import Sidebar from '../partials/Sidebar';
import { useParams, useLocation } from 'react-router';
import Mahasiswa from '../data/Mahasiswa';



const Dashboard = () => {
    const location = useLocation();
    const firstName = location.state?.data?.firstName;
    let uid = useParams()

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
                            <Mahasiswa />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;