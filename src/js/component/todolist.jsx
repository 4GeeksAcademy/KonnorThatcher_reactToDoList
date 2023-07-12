import React, {useState, useEffect} from 'react'

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([{task: "A thing that needs done", priority: false}]);

  useEffect(() => {
    console.log(listItems);
  }, [listItems])

  const addItem = (event) => {
    if (event.key === 'Enter') {
        if (inputValue.length > 0){
          let newObj = {task: inputValue, priority: false}
          setListItems([...listItems,newObj])
        };
        setInputValue('');
    }
  }

  const prioritized = (obj, idx) => {
    obj.priority = !obj.priority;
    setListItems(listItems.splice(idx,1));
    if (obj.priority === true)setListItems([obj,...listItems])
    else setListItems([...listItems, obj])
  }

  return (
    <div className='accordion w-50 m-auto'>
        <div className='accordion-item p-1'>
            <input className='w-75' type='text' onChange={e => setInputValue(e.target.value)} onKeyDown={addItem} value={inputValue} />
        </div>
        {listItems.map((item, idx) => {
            return (
                <div key={idx} className={`accordion-item px-2 py-1 d-flex justify-content-between align-items-center ${item.priority ? "bg-warning-subtle" : ""}`}>
                    <strong>{item.priority ? "* " : ""}{item.task}</strong>
                    <div>
                      <button className="btn btn-warning me-1" onClick={() => prioritized(item, idx)} title={item.priority ? "Make Not A Priority" : "Make Priority"}>
                        <i className="fa-solid fa-circle-exclamation" style={{color: "#fff"}}></i>
                      </button>
                      <button className='btn btn-danger' onClick={() => setListItems(listItems.toSpliced(idx, 1))} title='Delete'>
                          <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ToDoList