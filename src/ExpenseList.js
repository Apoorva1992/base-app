import React from 'react'
export default function ExpenseList({ todo, deleteExpense}) {
    return (
        <tr >
            <td className='text-right'>
                <p >{todo.name}</p>
            </td>
            <td className='text-right'>
                <p >{todo.category}</p>
            </td>
            <td className='text-right'>
                <p >{todo.amount}</p>
            </td>
            <td className='text-center'
                onClick={() => deleteExpense(todo)}
            >x</td>
        </tr>
    )
}