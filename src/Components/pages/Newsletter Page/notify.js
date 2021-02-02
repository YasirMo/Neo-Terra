import {notification } from 'antd'

const notify  = (type, msg, desc) =>{
 notification.destroy();
 notification[type]({
    message:msg,
    decription: desc
 })
}
export default notify;