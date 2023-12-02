import "./entryComponent.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';


const EntryComponent = ({ entry, handleEdit, handleDelete, handleCheckboxChange, isChecked, isHeaderCheckboxChecked,selectedEntriesOnPage }) => {
    
  const handleChange = () => {
    if (isHeaderCheckboxChecked) {
      handleCheckboxChange(entry.id);
    } else {
      isChecked ? handleCheckboxChange(entry.id) : handleCheckboxChange(entry.id);
    }
  };
  
    return (
      <div key={entry.id} className={`dashbarEntry ${isChecked ? 'checkedEntry' : ''}`}>
        {/* Displaying entries */}
        <input 
           type="checkbox" 
           className="checkbox" 
           onChange= {handleChange}
           checked={
              isHeaderCheckboxChecked
              ? selectedEntriesOnPage.includes(entry.id)
              : isChecked
           }
        />
        <div>{entry.name}</div>
        <div>{entry.email}</div>
        <div>{entry.role}</div>
        <div>
          <button className="edit" onClick={() => handleEdit(entry.id)}><EditIcon /></button>
          <button className="delete" onClick={() => handleDelete(entry.id)}> <DeleteOutlineIcon /> </button>
        </div>
      </div>
    );
  };
  
  export default EntryComponent;
  