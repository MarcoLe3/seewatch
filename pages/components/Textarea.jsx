import React, {useState} from 'react'
import SubmitButton from './Buttons/SubmitButton'

function Textarea() {
  const [value, setvalue] = useState('');

  return (
    <div className='flex flex-col gap-2'>
        <textarea
            value={value}
            onChange ={(e) => setvalue(e.target.value)}
            rows={6}
            cols = {60}
            className = 'border-2 border-black rounded-[16px] p-2'
        />
        <div className='flex justify-end w-full'>
            <SubmitButton />
        </div>
    </div>
  )
}

export default Textarea