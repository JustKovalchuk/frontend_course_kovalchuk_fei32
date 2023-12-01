import CourseBox from "./CourseBox/CourseBox"
import SearchBar from "./Searchbar/SearchBar"

function Courses() {
    return (
        <>
            <h1>COURSES</h1>
            
            <SearchBar />
            <div className="center-box">
                <form action="index.php" method="get" title="sort">
                    <label htmlFor="sort">Sort by</label>
                    <select name="Sortby" id="Sortby">
                        <option value="Popular">Popular</option>
                        <option value="Rating">Rating</option>
                        <option value="Newest" selected>Newest</option>
                        <option value="Price (low)">Price (low)</option>
                        <option value="Price (high)">Price (high)</option>
                    </select>
                </form>

                <form action="index.php" method="get" title="filter">
                    <label htmlFor="Topic">Topic</label>
                    <select name="Topic" id="Topic">
                        <option value="Web Development">Web Development</option>
                        <option value="Data Sience">Data Sience</option>
                        <option value="Programming Languages" selected>Programming Languages</option>
                        <option value="Game Development">Game Development</option>
                        <option value="Mobile Development">Mobile Development</option>
                    </select>

                    <label htmlFor="Rating">Rating</label>
                    <select name="Rating" id="Rating">
                        <option value="4.5+">4.5+</option>
                        <option value="4+">4+</option>
                        <option value="3.5+">3.5+</option>
                        <option value="3+">3+</option>
                        <option value="0+" selected>0+</option>
                    </select>

                    <label htmlFor="Duration">Duration</label>
                    <select name="Duration" id="Duration">
                        <option value="1-3 month">1-3 month</option>
                        <option value="1-4 weeks">1-4 weeks</option>
                        <option value="1-7 days">1-7 days</option>
                        <option value="12-24 hours">12-24 hours</option>
                        <option value="8-12 hours">8-12 hours</option>
                        <option value="4-8 hours">4-8 hours</option>
                        <option value="2-4 hours">2-4 hours</option>
                        <option value="0-2 hours" selected>0-2 hours</option>
                    </select>

                    <label htmlFor="Price">Price</label>
                    <select name="Price" id="Price">
                        <option value="Paid">Paid</option>
                        <option value="Free">Free</option>
                    </select>

                    <input type="reset"/>
                    <input type="submit"/>
                </form>
            </div>
            <div className="courses-table">
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />
                <CourseBox />

            </div>
            <div id="page-selector">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                    </li>
                    </ul>
                </nav>
            </div>
        </>
        
      );
}

export default Courses