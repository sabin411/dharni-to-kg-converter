import React from 'react'

function Home() {
    const [kg, setKg] = React.useState(2.5)
    const [dharni, setDharni] = React.useState(1)
    const [costPerDharni, setCostPerDharni] = React.useState(50)
    const [isEditRateMode, setIsEditRateMode] = React.useState(false)
    const [totalAmount, setTotalAmount] = React.useState()
    const rateInputRef = React.useRef(null)

    React.useEffect(() => {
        setTotalAmount((dharni * costPerDharni).toFixed(2))
    }, [dharni, costPerDharni])


    const onKgChange = (e) => {
        setKg(e.target.value)
        setDharni((e.target.value * 0.4).toFixed(2))
    }
    const onDharniChange = (e) => {
        setDharni(e.target.value)
        setKg((e.target.value * 2.5).toFixed(2))
    }

    React.useEffect(() => {
        if(isEditRateMode) {
            rateInputRef.current.focus()
        }
    }, [isEditRateMode])

  return (
    <main>
        {isEditRateMode ? <div className='overLay' onClick={() => {
            setIsEditRateMode(false)
        }}></div>: null}
        <h1>Convert KG to DHARNI</h1>
        <p>Enter a value in KG to convert to DHARNI</p>
        <section className='converter-container'>
            <div className='input-group'>
                <label htmlFor="kg">KG</label>
                <input className='app-input' type="number" name = "kg" id="kg" value = {kg} onChange={onKgChange} />
            </div>
            
            <div className='input-group'>
                <label htmlFor="dharni">DHARNI</label>
                <input className='app-input' type="number" name = "dharni" id="dharni" value = {dharni} onChange={onDharniChange} />
            </div>
        </section>
        
        <p className='cost-per-dharni-text'>
            Calculation total amount of money based on {" "}
            {!isEditRateMode ? <span> {costPerDharni} 
                <button onClick={() => {
                    setIsEditRateMode(true)
                }}><i className="fa-solid fa-pen-to-square"></i></button>
            </span> : 
            <input ref={rateInputRef} className='cost-per-dharni-input' type="number" name = "cost-per-dharni" id="cost-per-dharni" value = {costPerDharni} onChange={(e) => setCostPerDharni(e.target.value)} />
            }
            Rs per dharni.
        </p>

        <h3>Grand Total: {totalAmount}</h3>

    </main>
  )
}

export default Home