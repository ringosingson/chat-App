import React, { useEffect } from "react";
import Members from "./Members";
import ChannelInfo from "./ChannelInfo";
import Messages from "./Messages";
import ChatInputBox from "./ChatInputBox";
import { db } from "./firebase";

function Channel({ user, channelId }) {
  useEffect(() => {
    db.doc(`users/${user.uid}`).update({
      [`channels.${channelId}`]: true
    });
  }, [channelId, user.uid]);

  return (
    <div className="Channel">
      <div className="ChannelMain">
        <ChannelInfo channelId={channelId} />
        <Messages channelId={channelId} />
        <ChatInputBox channelId={channelId} user={user} />
      </div>
      <Members channelId={channelId} />
    </div>
  );
}

export default Channel;
