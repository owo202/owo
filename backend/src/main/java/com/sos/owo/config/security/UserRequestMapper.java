package com.sos.owo.config.security;

import com.sos.owo.service.UserDto;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Component;

@Component
public class UserRequestMapper {
    public UserDto toDto(OAuth2User oAuth2User){
        var attibutes = oAuth2User.getAttributes();
        return UserDto.builder()
                .email((String)attibutes.get("email"))
                .name((String)attibutes.get("name"))
                .build();
    }

}
