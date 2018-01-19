import React from 'react'
import dataset from './dataset'
import {Grid, Row, Col} from 'react-bootstrap'


class List extends React.Component {
  render() {

    return (
      <Grid>
        <Row>
          <Col xs={12}>
            {dataset.map((item) => <h5> {item.title}</h5>)}
          </Col>
        </Row>
      </Grid>
    )

  }


}

export default List;