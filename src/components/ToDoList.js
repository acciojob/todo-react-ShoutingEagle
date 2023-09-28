import React, {useState} from "react";



function ToDoList() {
  const [inputList, setInputList] = useState('');
  const [items,setItems] = useState([]);
  

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setInputList('');
    setItems((oldItems) => {
      return [...oldItems,inputList];
    })
    
  }

  // const deleteItems = (index1) => {
  //     console.log('Hi');
  //     const filterData = items.filter((element,index) => {
  //       return index != index1
  //     } )

  //     console.log(filterData);
  // }


  return (
    <>
    <div>To-Do-List</div>
    <input type="text" onChange={itemEvent} value={inputList}/>
    <button onClick={listOfItems}>Add ToDo</button>
    <ul>
      {items.map((element,index) => {
        return <li><span>{element}</span><button key={index} id={index} onClick={() => {
          const filterData = items.filter((element,index1) => {
            return index != index1
          })
    
          setItems(filterData);
      }}>Delete</button></li>
      })}
      
    </ul>
    </>
  )
}

export default ToDoList