import React, { useContext } from 'react';
import { CurrencyContext } from '../context/Context';


const Currency = () => {
    const {moola, setMoola} = useContext(CurrencyContext);

    return (
        
        <div className='alert alert-success'>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="currency" 
                style={{background: '#1C2C40', color: 'white'}}>Currency</label>
            </div>
            <select className='form-select form-select-md' 
            id="currency" name="currency" 
            onChange={(event) => setMoola(event.target.value)} 
            value={moola}
            style={{background: '#D1E7DD'}}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>                   
        </div>
        );
};

export default Currency;