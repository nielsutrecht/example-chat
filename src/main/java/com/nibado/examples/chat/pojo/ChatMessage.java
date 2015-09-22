package com.nibado.examples.chat.pojo;

import java.time.LocalDateTime;

public class ChatMessage {
    private User user;
    private LocalDateTime time;
    private String message;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime time) {
        this.time = time;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public static ChatMessage of(User user, String message) {
        ChatMessage msg = new ChatMessage();
        msg.setUser(user);
        msg.setMessage(message);;
        msg.setTime(LocalDateTime.now());

        return msg;
    }
}
