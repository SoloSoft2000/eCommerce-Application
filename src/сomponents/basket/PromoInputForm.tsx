import React from 'react';
import SubmitFormButton from '../forms/SubmitFormBtn';

function PromoInputForm(): React.JSX.Element {
    return (
    <form className='ml-[5%] mb-8'>
        <label className='pr-1'>
            <input className='border rounded p-1' placeholder='Promocode' type="text" name="name" />
        </label>
        <SubmitFormButton
        value="Apply Promo"
        classes='w-1/6 text-xs text-center rounded bg-black p-2 text-white uppercase drop-shadow-sm hover:bg-slate-600 cursor-pointer;'
        />
    </form>
    );
}

export default PromoInputForm;
