const db = require("../../config/connection")

module.exports ={
    serviceAddPetugas: (data, callBack)=>{
        db.query(
            'insert into petugas(nm_Petugas, jabatan, tlpn_Petugas) values (?,?,?)',
            [
                data.nm_petugas,
                data.jabatan,
                data.tlpn_petugas
            ],
            (err, result, fields) =>{
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, result)
                }
            }
        )
    },

serviceUpdatePetugas: (data, callBack) =>{
    db.query(
        'insert into petugas(nm_petugas=?, jabatan=?, tlpn_petugas=?)',
        [
            data.nm_petugas,
            data.jabatan,
            data.tlpn_petugas,
            data.kd_petugas
        ],
        (err, results, fields) =>{
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, results)
            }
        }
        )
    },

    serviceDeletePetugas: (data, callBack) =>{
        db.query(
            'delete from where kd_petugas=?',
            [data],
            (err, result, fields)=>{
                if (err) {
                    return callBack(err)
                } else {
                    return callBack(null, result)
                }
            }
        )
    }
}