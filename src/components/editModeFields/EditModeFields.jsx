import "./editModeFields.css"
import SaveIcon from '@mui/icons-material/Save';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'

const EditModeFields = ({
    entry,
    handleInputChange,
    handleSave,
    handleCancel,
  }) => {
    return (
      <div className="editModeFields">
        <input type="checkbox" className="checkbox" />
        
        <div>
          <input
            type="text"
            name="name"
            value={entry.name}
            onChange={(e) => handleInputChange(e, entry.id)}
          />
        </div>
  
        <div>
          <input
            type="text"
            name="email"
            value={entry.email}
            onChange={(e) => handleInputChange(e, entry.id)}
          />
        </div>
  
        <div>
          <input
            type="text"
            name="role"
            value={entry.role}
            onChange={(e) => handleInputChange(e, entry.id)}
          />
        </div>
  
        <div>
          <button className="save" onClick={handleSave}><SaveIcon /></button>
          <button className="cancel" onClick={handleCancel}><CancelPresentationIcon /></button>
        </div>
        
      </div>
    );
  };
  
  export default EditModeFields;
  