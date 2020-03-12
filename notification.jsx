import React from "react"
import styles from './notification.css';

const Notification = (props)=>{
    if(!followYs(props)){
      return(
        <Fragment>
            {props.notification.map((elem) => (
                <div key={elem.notification_id}>
                    <NotiTile store={elem} />
                </div>
            ))}
        </Fragment>
      )
    }else{
      <div>
          <p className="no-noti-header">No Notification</p>
          <h5 ClassName="no-noti-msg">Follow YorStore to <br/> get notifications.</h5>
      </div>
    }
}

export default Notification
