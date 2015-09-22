package com.nibado.examples.chat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.web.SpringBootServletInitializer;

@SpringBootApplication
public class WebApplication extends SpringBootServletInitializer {
    public static void main(final String[] args) throws Exception {
        SpringApplication.run(WebApplication.class, args);
    }

}