package com.example.demo.login.security.oauth2;

import java.util.Map;

import com.example.demo.login.common.exception.OAuth2AuthenticationProcessingException;
import com.example.demo.login.security.oauth2.user.GoogleOAuth2UserInfo;
import com.example.demo.login.security.oauth2.user.KakaoOAuth2UserInfo;
import com.example.demo.login.security.oauth2.user.OAuth2UserInfo;
import com.example.demo.user.AuthProvider;

public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(AuthProvider.GOOGLE.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else if (registrationId.equalsIgnoreCase(AuthProvider.KAKAO.toString())) {
            return new KakaoOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}