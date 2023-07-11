import React, {useState, useEffect} from 'react'

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState(["A thing that needs done"]);

  useEffect(() => {
    console.log(listItems);
  }, [listItems])

  const addItem = (event) => {
    if (event.key === 'Enter') {
        if (inputValue.length > 0) setListItems([...listItems,inputValue]);
        setInputValue('');
    }
  }

  return (
    <div className='accordion w-50 m-auto'>
        <div className='accordion-item p-1'>
            <input className='w-75' type='text' onChange={e => setInputValue(e.target.value)} onKeyDown={addItem} value={inputValue} />
        </div>
        {listItems.map((item, idx) => {
            return (
                <div key={idx} className='accordion-item px-2 py-1 d-flex justify-content-between align-items-center'>
                    <strong>{item}</strong>
                    <button className='btn btn-danger' onClick={() => setListItems(listItems.toSpliced(idx, 1))}>
                        <i className="fa-solid fa-trash-can" title='Delete'></i>
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default ToDoList