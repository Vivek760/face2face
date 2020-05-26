import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import './PostList.css';


class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResp: [] };

  }

  callAPI() {
    fetch('http://localhost:3004/data')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          apiResp: myJson
        })
      });
  }
  componentDidMount() {

    this.callAPI();
  }

  render() {

    return (

      <div>
        {this.state.apiResp.map((item, index) => {
          return (
            <SwipeableList>
              <SwipeableListItem
                swipeLeft={{
                  content: <div style={{ marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'coral' }}>NO</div>,
                  action: () => console.info('swipe action triggered')
                }}
                swipeRight={{
                  content: <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '10%', backgroundColor: 'green' }}>YES</div>,
                  action: () => console.info('swipe action triggered')
                }}
                onSwipeProgress={progress => console.info(`Swipe progress: ${progress}%`)}
              >
                <div className="hell">
                
                  <Card style={{ width: '300px' }}>
                  
                  
                    <CardActionArea>
                      <CardMedia
                        style={{ height: '400px' }}
                        image={item.image}
                        title={item.first_name}

                      />
                    </CardActionArea>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.first_name} {item.last_name}
                    </Typography>
                    <CardActions>
                    <Button size="small">Know More</Button>
                   </CardActions>
                  </Card>
                  <br></br>
                  <br></br>


                </div>
              </SwipeableListItem>
            </SwipeableList>




          )
        })}
      </div>


    );
  };
}

export default PostList;


