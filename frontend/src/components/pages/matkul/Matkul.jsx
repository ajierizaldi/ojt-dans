import React from 'react'

import Sidebar from '../../partials/Sidebar'
import DaftarMatkul from './DaftarMatkul'

const Matkul = () => {
    <div>
        <div className="row">
            <div className="col-md-4">
                <Sidebar />
            </div>
            <div className="col-md-8">
                <DaftarMatkul />
            </div>
        </div>
    </div>
}

export default Matkul