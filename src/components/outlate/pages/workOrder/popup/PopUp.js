import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Input, InputLabel, TextField } from '@mui/material';
import './PopUp.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center'
};

export default function PopUp({ open, setOpen, onSave }) {
    const [name, setName] = useState('')
    // const [tostMessage, setTostMessage] = useState('')
    // const [response, setResponse] = useState(null)
    const [donor, setDonor] = useState('');
    const [panels, setPanels] = useState('');
    const [barcodes, setBarcodes] = useState('');
    const [sources, setSources] = useState('');
    const [status, setStatus] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSave = () => {
       
    };
    async function getFormData(e) {
        e.preventDefault()
        const newData = {
            donor,
            panels,
            barcodes,
            sources,
            status,
        };
console.log(newData ,"newData");
        onSave(newData);
        setOpen(false);
    }

    return (
        <>
            <div >
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box component='form'
                        onSubmit={
                            getFormData

                        } Validate autoComplete="off" sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            Enter Details
                        </Typography>
                        <div style={{
                            display: 'flex',
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Donor</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setDonor(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Panels</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setPanels(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Barcodes</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setBarcodes(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Sources</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setSources(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                                <InputLabel htmlFor='name'>Status</InputLabel>
                                <TextField style={{ padding: "0.2rem" }} onChange={(e) => setStatus(e.target.value)} required id='adminid' vatiant=' outlined' placeholder="" />
                            </div>
                            <Button
                                // onClick={handleSave}
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ margin: "2rem" }}
                            >
                                ADD
                            </Button>
                        </div>
                    </Box >

                </Modal >
            </div >
        </>
    );
}
