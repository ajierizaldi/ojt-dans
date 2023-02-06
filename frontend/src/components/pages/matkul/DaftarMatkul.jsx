import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getData } from '../../../redux/action/action'

const DaftarMatkul = () => {
    const { isResult, isFetching, isError } = useSelector((state) => state.identity)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <div>
            <h3>Daftar Matakuliah</h3>
            {
                isResult ? (
                    isResult.map((item, index) => {
                        return (
                            <p key={index}>{item.nama} - {item.sks}</p>
                        )
                    }
                    )
                ) : isFetching ? (
                    <p>Loading...</p>
                ) : (
                    <p>
                        {isError ? isError : "Data tidak ditemukan"}
                    </p>
                )
            }
        </div>
    )
}

export default DaftarMatkul