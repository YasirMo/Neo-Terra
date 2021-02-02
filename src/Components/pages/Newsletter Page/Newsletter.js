import React from 'react'
import {Form, Input, Button} from 'antd'
import '../../../Styles/Newsletter.css'
import validator from 'validator'

const Newsletter = ({email,handleOnChangeEmail,handelSendEmail})=>{
    return (
        <Form layout="inline" className="newsletter-form" method="POST">
          <Form.Item>
              <Input  onChange={({target}) => handleOnChangeEmail(target.value)}
              placeholder="Email" value={email}/>
          </Form.Item>
          <Form.Item>
              <Button onClick={() => handelSendEmail(email)}  disabled={!validator.isEmail(email)}
               htmlType="submit" type="primary" className="btnEmail">Send</Button>
          </Form.Item>
          </Form>
    );
}

export default Newsletter
