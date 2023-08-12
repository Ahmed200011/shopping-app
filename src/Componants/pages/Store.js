import React, { Fragment } from 'react'
import {Row,Col} from 'react-bootstrap'
import items from "../../data/items.json"
import StoreItem from '../storeItem/StoreItem'


const Store = () => {
  return <Fragment>
      <Row lg={3} md={2} xs={1} className='mb-3' >
      {items.map((item)=>(
        <Col className='mb-5' key={item.id}>
          <StoreItem {...item}/>
        </Col>
      ))}
      
      </Row>
    </Fragment>

}

export default Store

