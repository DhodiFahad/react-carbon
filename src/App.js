import { ComboBox } from '@carbon/react';
import './App.css';

const theData = [
  {id:"1",name: "fahad"},
  {id:"2",name: "kinene"},
  {id:"3",name: "dhodi"}
]

function App() {
  const theInputOnChangeFunc = (e) =>{
    console.log("theInputOnChangeFunc")
    console.log(e.selectedItem)
  }
  const theOnChangeFunc = (e) =>{
    console.log("theOnChangeFunc")
    if(Boolean(e.selectedItem)){
      console.log(e.selectedItem.id)
    }else{
      console.log("error")
    }
       
  }
  return (
    <div className="App">
      <ComboBox 
        id="1"
        items={theData} 
        // onInputChange={(event)=>{theInputOnChangeFunc(event)}}
        itemToString={(item)=>item?.name??''}
        onChange={(e)=>{theOnChangeFunc(e)}}
        titleText="Hi"
      />
    </div>
  );
}

export default App;
