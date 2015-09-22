package com.nibado.examples.chat.pojo;

import java.util.logging.Level;

public class User {
    private String name;
    private Level level;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public static User of(String name, Level level) {
        User user = new User();
        user.setName(name);
        user.setLevel(level);

        return user;
    }

    public static User of(String name) {
        return of(name, Level.USER);
    }

    public enum Level {
        USER,
        ADMIN;

        @Override
        public String toString() {
            return super.toString().toLowerCase();
        }
    }
}
