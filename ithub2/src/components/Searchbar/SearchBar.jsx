import searchIcon from "../../assets/icons/search.svg"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./search_bar.css"

const SearchBar = () => <>
    <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 "
            aria-label="Search"
        />
        <Button variant="warning">Search</Button>
    </Form>
    {/* <div className="center-box search-bar">
        <img className="icon" src={searchIcon} alt="search icon"/>
        <input type="text" required placeholder="search"/>
    </div> */}
</>

export default SearchBar