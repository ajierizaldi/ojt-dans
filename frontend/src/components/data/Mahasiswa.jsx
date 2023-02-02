import { useDispatch, useSelector } from "react-redux"

const Mahasiswa = () => {
    // const { isResult, isFetching, isError } = useSelector(state => state.mahasiswa)

    return (
        <div>
            <h1>Daftar Mahasiswa</h1>
            <ol>
                <li>Andi</li>
                <li>Budi</li>
                <li>Caca</li>
            </ol>
        </div>
    )
}

export default Mahasiswa