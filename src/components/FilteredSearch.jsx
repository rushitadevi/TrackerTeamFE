import React from "react";
import { getSearch,} from "../Actions/apiFetches";
import { connect } from "react-redux";
import { Input, Container } from "reactstrap";
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getSearchThunk: (url) => dispatch(getSearch(url)),
});

class FilteredSearch extends React.Component {

    state = {
        company: "",
        role: "",
        level: "senior",
        location: "",
    };

    searchInput = async (value) => {
        value.preventDefault();

        // debugger;

        let url = "search=";

        if (this.state.company.length >= 4)
            url += "+" + this.state.company
        
        if (this.state.role.length >= 4)
            url += "+" + this.state.role
        
        if (this.state.level.length) 
            url += "+" + this.state.level
        
        if (this.state.location.length >= 4) 
            url += "&location=" + this.state.location
        
        // else{
        //     await this.props.getSearchThunk("");
        // }
        console.log(url)

        await this.props.getSearchThunk(url);
        //if fetch is an empty array return a (no results)
    }

    render() {
        return (
            <Container className="filterBar">
                <h5 id="logo">TrackeR</h5>
                <hr
                    style={{
                        backgroundColor: "#fcffff",
                        height: 0.2,
                        marginTop: "93px"
                    }}
                />

                <i className="material-icons" id="searchIcon"> search</i>
                <Input className="searchCompany"
                    id="search"
                    placeholder="Company"
                    value={this.state.company || ''}
                    onChange={(e) => this.setState({ company: e.currentTarget.value })} />

                <i className="material-icons" id="roleIcon"> work_outline</i>
                <Input id="jobRole"
                    placeholder="Role"
                    value={this.state.role || ''}
                    onChange={(e) => this.setState({ role: e.currentTarget.value })} />

                <i className="material-icons" id="entryLevelIcon"> file_copy</i>
                <select className="form-control" id="entryLevel" value={this.state.level || 'senior'} onChange={(e) => this.setState({ level: e.currentTarget.value })}>
                    {/* <option selected="selected"> Entry Level </option> */}
                    <option value="senior">Senior</option>
                    <option value="junior">Junior</option>
                </select>
                <img
                    className="locationImg"
                    src="https://www.freeiconspng.com/uploads/simple-location-icon-png-22.png"
                    alt="/"
                />
                
                <Input
                    className="location"
                    id="location"
                    placeholder="Location"
                    value={this.state.location || ''}
                    onChange={(e) => this.setState({ location: e.currentTarget.value })}
                // onKeyUp={this.searchInput}
                />

                <button className="searchButton" type='submit' onClick={this.searchInput}>Search</button>
                {/* </form> */}

            </Container>

        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredSearch);
