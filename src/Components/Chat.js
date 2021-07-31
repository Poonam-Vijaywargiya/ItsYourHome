
import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import Login from './Login';

 function Chat() {
    if (!localStorage.getItem('username')) return <Login />;
	return (
    <div className="App">
    <ChatEngine
        height='100vh'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        projectID='702e2973-e506-449f-afc8-c3212d6645d1'
        />
  </div>
		
	);
}

export default Chat;



