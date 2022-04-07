import React,{useState} from "react";
import {Modal , Button , FormControl}from 'react-bootstrap'

const AddMovie = ({handleData}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie]=useState({})
const handleChange=e=>{
    setNewMovie({...newMovie, [e.target.name]:e.target.value})
}

const handleSubmit=()=>{
    handleData(newMovie)
    handleClose()
}
  
  return (
    <div>
      <>
        <Button className="addMovie" variant="primary" onClick={handleShow}>
          Add Movie
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="Modal">Modal heading</Modal.Title>
          </Modal.Header>
          <FormControl className="titlee"
            type="text"
            placeholder="Enter title"
            name="title"
            onChange={handleChange}
          />
          <FormControl className="year"
            type="number"
            placeholder="Enter the year of the film"
            name="year"
            onChange={handleChange}
          />
          <FormControl className="ratingg"
            type="number"
            placeholder="Enter the rating of the film"
            name="rating"
            onChange={handleChange}
          />
          <FormControl className="urll"
            type="text"
            placeholder="Enter the URL.."
            name="posterUrl"
            onChange={handleChange}
          />

          <Modal.Footer>
            <Button  variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddMovie;
