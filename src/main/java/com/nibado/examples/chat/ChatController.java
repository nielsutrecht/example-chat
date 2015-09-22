package com.nibado.examples.chat;

import com.nibado.examples.chat.pojo.ChatIn;
import com.nibado.examples.chat.pojo.ChatMessage;
import com.nibado.examples.chat.pojo.User;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public ChatMessage greeting(ChatIn message) throws Exception {
        return ChatMessage.of(User.of(message.getUser()), message.getMessage());
    }

}