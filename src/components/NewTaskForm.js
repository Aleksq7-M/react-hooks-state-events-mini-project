import React, {useState} from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    text:'',
    category:'Code'
  })

  function handleFormChange(e){
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const exceptAll = CATEGORIES.filter(c => c !== 'All')
  
  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={formData.text}
          onChange={handleFormChange}
        />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleFormChange}>
          {exceptAll.map(category => <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
