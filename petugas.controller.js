const {
    serviceAddPetugas,

} = require("./petugas.service")

module.exports = {
    controllerAddPetugas: (req, res)=>{
        const body = req.body;
        serviceAddPetugas(body, (err, results)=>{
            if (err) {
                console.log(err)
                return res.status(500).json({
                    success : 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                body
            })
        })
    },
    controllerUpdatePetugas: (req,res) =>{
        const body = req.body
        const param = req.params
        const data = {
            nm_petugas  : body.nm_petugas,
            jabatan     : body.jabatan,
            tlpn_petugas: body.tlpn_petugas,
            kd_petugas  : param
        }
        serviceUpdatePetugas(body, (err, results) =>{
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message:"update failed"
                })
            }else{
                return res.json({
                    success: 1,
                    message: "update berhasil",
                    body
                })
            }
        })
    },
    controllerDeletePetugas: (req, res) =>{
        const param = req.params.serviceAddPetugas

        serviceDeletePetugas(param, (err, result)=>{
            if (err) {
                console.log(err)
                return res.json({
                    message: "Delete Petugas Failed"
                })
            } else {
                res.json({
                    message: "Data berhasil dihapus"
                })
            }
        })
    }
}

