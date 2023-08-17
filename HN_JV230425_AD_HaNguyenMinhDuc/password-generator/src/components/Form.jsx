const Form = () => {
    return (
    <div className="form">
        <form>
            <h1>Password Generator</h1>
            <div className="form-item">
                <input type="text" id="result"/>
                <span class="material-symbols-outlined">
                    content_paste
                </span>
            </div>
            <div className="form-item">
                <label>Password Length</label>
                <input type="number" id="length" maxLength={20} readOnly/>
            </div>
            <div className="form-item">
                <label>Include UpperCase Letters</label>
                <input type="checkbox" id="upper"/>
            </div>
            <div className="form-item">
                <label>Include LowerCase Letters</label>
                <input type="checkbox" id="lower" />
            </div>
            <div className="form-item">
                <label>Include Number</label>
                <input type="checkbox" id="number" />
            </div>
            <div className="form-item">
                <label>Include Symbol</label>
                <input type="checkbox"  id="symbol" />
            </div>
            <button type="submit">Generator New Password</button>
        </form>
    </div>
    )
}

export default Form;