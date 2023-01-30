import React,{useEffect} from 'react';

const Table = ({data, userDelete}) => {
   
  return (
    <div className='w-3/4'>
        <table className='border w-full text-center mt-8 mx-4'>
            <tr>
                <th className='font-semibold border'>Name:</th>
                <th className='font-semibold border'>Contact:</th>
                <th className='font-semibold border'>Laptop-Name:</th>
                <th className='font-semibold border'>Laptop-sl-no:</th>
                <th className='font-semibold border'>Laptop-Problem:</th>
            </tr>
            {data.map((value, id) => (
                <tr>
                <td className='border'>{value.name}</td>
                <td className='border'>{value.contact}</td>
                <td className='border'>{value.laptop}</td>
                <td className='border'>{value.laptopNumber}</td>
                <td className='border'>{value.problem}</td>
                <button type='button' onClick={() => userDelete(value.id)}>Delete</button>
                
            </tr>
            ))}
        </table>
    </div>
  )
}

export default Table