import React from 'react'
import {Form, Input, Button} from 'antd'
import '../../../Styles/Newsletter.css'
import validator from 'validator'
import { Link } from 'react-router-dom';

const Newsletter = ({email,handleOnChangeEmail,handelSendEmail})=>{
    return (
        <Form layout="inline" className="newsletter-form" method="POST">
          <Form.Item>
              <Input  onChange={({target}) => handleOnChangeEmail(target.value)}
              placeholder="Email" value={email}/>
          </Form.Item>
          <Form.Item>
              <Link to='/ThanksForSubscribing'><Button onClick={() => handelSendEmail(email)}  disabled={!validator.isEmail(email)}
               htmlType="submit" type="primary" className="btnEmail">Send</Button></Link>
          </Form.Item>
          </Form>
    );
}

export default Newsletter
