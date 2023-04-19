import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import SignatureCanvas from 'react-signature-canvas';


import LOGO from './../assets/logo.png'

const Assinatura = (props) => {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState()

    const canvasRef = useRef(null);
    const inputRef = useRef(null);

    const clearSignature = (e) => {
        canvasRef.current.clear();

        inputRef.current.focus();
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        const image = canvasRef.current.getTrimmedCanvas().toDataURL('image/png')
        if (props.setImage)
            props.setImage(image)

        clearSignature()
    }

    useEffect(() => {
        if (inputRef?.current)
            inputRef.current.focus();
    }, [])

    return (
        <>
            <div className='box-signature'>
                <div style={{ textAlign: "center" }}>
                    <Image src={LOGO} alt="logo" className='logo-register' />
                </div>
                <div style={{ border: "1px dashed #cacaca", borderRadius: "5px", width: "100%", height: "50vh", padding: "5px", marginTop: "5px" }}>
                    <SignatureCanvas ref={canvasRef} canvasProps={{ className: 'board-signature' }} maxWidth={3} minWidth={1} />
                </div>
                <div style={{ display: "flex", gap: "5px", marginTop: "15px", flexDirection: "column" }}>
                    <div>
                        <input type="text" className='form-control'
                            placeholder="Nome do Responsável"
                            style={{ textTransform: "capitalize" }} autoFocus ref={inputRef}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                        <button className='btn btn-secondary' type="button" disabled={loading} onClick={e => clearSignature()} style={{ width: "150px" }} ><i className='fa fa-eraser' /> Limpar</button>
                        <button className='btn btn-primary' type="button" disabled={loading} onClick={e => handleSubmit(e)} style={{ width: "150px", marginLeft: "10px" }}><i className={`fa ${loading ? 'fa-spinner fa-spin' : 'fa-circle-right'}`} /> Avançar</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Assinatura;