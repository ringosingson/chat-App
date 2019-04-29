import React from "react";

function Messages() {
  return (
    <div className="Messages">
      <div className="EndOfMessages">That's every message!</div>
      <div>
        <div className="Day">
          <div className="DayLine" />
          <div className="DayText">29/3/2019</div>
          <div className="DayLine" />
        </div>
        <div className="Message with-avatar">
          <div className="Avatar" />
          <div className="Author">
            <div>
              <span className="UserName">Ringo Singson </span>
              <span className="TimeStamp">3:37 PM</span>
            </div>
            <div className="MessageContent">Alright, lets do this.</div>
          </div>
        </div>
      </div>
      <div>
        <div className="Message no-avatar">
          <div className="MessageContent">works now?</div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
