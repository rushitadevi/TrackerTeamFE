import React, { Component } from "react";
import { connect } from "react-redux";
import { getCompanyVacancies } from "../Actions/apiFetches";
import { Row, Col } from "reactstrap";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    getCompanyVacanciesThunk: query => dispatch(getCompanyVacancies(query))
});

class DirectoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: undefined,
      companyName: undefined
    };
  }

  componentDidMount = async () => {
    let query = "search=";

    if (this.props.companyName) {
      
      let compName = this.props.companyName;    
        
        this.setState({
            companyName: compName
          });

          query += compName;

          this.setState({
            query: query
          });
    }
   
    await this.props.getCompanyVacanciesThunk(query);
    this.setState({
        query: undefined,
        companyName: undefined
      });
  };

  render() {
    return (     
        <>
        {this.props.publicAPI.companyVacancies &&
        this.props.publicAPI.companyVacancies.map(
          (companyVacancies, index) => {
              return(
                  <>
                  <Row key={index} className="sm-col-12 moreVacanciesRow">   
                  <Col sm="12" className="moreVacanciesCol">       
                              <Card className="card">
                              <CardContent>
                                <Typography className="title" color="textSecondary" gutterBottom>
                                {companyVacancies.company}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                </Typography>
                                <Typography className="pos" color="textSecondary">
                                {companyVacancies.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                  well meaning and kindly.
                                  <br />
                                  {'"a benevolent smile"'}
                                </Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small">Learn More</Button>
                              </CardActions>
                            </Card>    
                            </Col>              
                            </Row>
                            </>
              )
        }
      )}
      
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DirectoryComponent);
