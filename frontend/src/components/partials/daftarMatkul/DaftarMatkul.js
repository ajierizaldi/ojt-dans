import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getData } from '../../../redux/action/action'

export const DaftarMatkul = () => {
    const { isResult, isFetching, isError } = useSelector(state => state.identity)

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
                            <div key={index}>
                                <p>{item.nama} - {item.sks}</p>
                            </div>
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