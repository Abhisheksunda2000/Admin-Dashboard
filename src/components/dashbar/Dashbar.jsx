// Dashbar.jsx
import React, { useState } from 'react';
import Pagination from '../pagination/Pagination';
import EntryComponent from '../entryComponent/EntryComponent';
import EditModeFields from '../editModeFields/EditModeFields';

import './dashbar.css';
import Topbar from '../topbar/Topbar';

const Dashbar = ({ data }) => {
  const [entries, setEntries] = useState(data);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [editMode, setEditMode] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const [selectedEntries, setSelectedEntries] = useState([]);
  const [isHeaderCheckboxChecked, setIsHeaderCheckboxChecked] = useState(false);
  const [selectedEntriesOnPage, setSelectedEntriesOnPage] = useState([]);



  const handleEdit = (id) => {
    setEditedIndex(id);
    setEditMode(true);
    console.log(`Edit entry with ID: ${id}`);
  };

  const handleSave = () => {
    setEditMode(false);
    setEditedIndex(null);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedIndex(null);
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, [name]: value } : entry
      )
    );
  };

  const handleDelete = (id) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    console.log(`Delete entry with ID: ${id}`);
  };

  const handleCheckboxChange = (id) => {
     const selectedIndex = selectedEntries.indexOf(id);
     let newSelected = [];


     if(selectedIndex === -1){
       newSelected = [...selectedEntries, id];
     } else {
       newSelected = selectedEntries.filter((entryId) => entryId !== id);
     }

     setSelectedEntries(newSelected);
  }

  const handleDeleteMultiple = () => {
     const updatedEntries = entries.filter((entry) => !selectedEntries.includes(entry.id));
     setEntries(updatedEntries);
     setSelectedEntries([]);
     setIsHeaderCheckboxChecked(false);
     console.log(`Delete multiple entries: ${selectedEntries}`);
  }

  const handleHeaderCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setIsHeaderCheckboxChecked(isChecked);
  
    if (isChecked) {
      const currentPageEntries = searchResults.length > 0 ? searchResults.slice(indexOfFirstEntry, indexOfLastEntry) : entries.slice(indexOfFirstEntry, indexOfLastEntry);
      const currentPageEntryIds = currentPageEntries.map((entry) => entry.id);
      setSelectedEntriesOnPage(currentPageEntryIds);
      setSelectedEntries(currentPageEntryIds); // Set selectedEntries to IDs on current page
    } else {
      setSelectedEntriesOnPage([]);
      setSelectedEntries([]);
    }
  };
  
  

  const handleSearch = (searchTerm) => {
    const filteredResults = entries.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries =
    searchResults.length > 0
      ? searchResults.slice(indexOfFirstEntry, indexOfLastEntry)
      : entries.slice(indexOfFirstEntry, indexOfLastEntry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Topbar handleSearch={handleSearch} handleDeleteMultiple={handleDeleteMultiple} />
      <div className="dashbarContainer">
       
       <div className="dashbarHeader">
          <input 
            type="checkbox" 
            className="checkbox" 
            onChange={handleHeaderCheckboxChange}
            checked={isHeaderCheckboxChecked}/>
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Actions</div>
        </div>

        {currentEntries.map((entry) => (
          <React.Fragment key={entry.id}>
            {editMode && editedIndex === entry.id ? (
              <EditModeFields
                entry={entry}
                handleInputChange={handleInputChange}
                handleSave={handleSave}
                handleCancel={handleCancel}
              />
            ) : (
              <EntryComponent
                entry={entry}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleCheckboxChange={handleCheckboxChange}
                isChecked={selectedEntries.includes(entry.id)}
                isHeaderCheckboxChecked={isHeaderCheckboxChecked}
                selectedEntriesOnPage={selectedEntriesOnPage}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Pagination */}
     
        
      <div className="footer">
        <div className='footerText'> <span>{selectedEntries.length} of {entries.length} row(s) selected.</span> </div>
        <div className="pagesBar">
        <Pagination
          entriesPerPage={entriesPerPage}
          totalEntries={
            searchResults.length > 0 ? searchResults.length : entries.length
          }
          currentPage={currentPage}
          paginate={paginate}
        />
        </div>

      </div>


      
    </>
  );
};

export default Dashbar;
