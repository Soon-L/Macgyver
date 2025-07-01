package com.example.demo;
import com.example.demo.dto.UserInfoResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import com.example.demo.login.security.UserPrincipal;

@RestController
public class AuthController {

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/logout")
    public String logout() {
        return "redirect:/login?logout";
    }
    
    @GetMapping("/api/me")
    public ResponseEntity<UserInfoResponse> getUserInfo(@AuthenticationPrincipal UserPrincipal user) {
        UserInfoResponse userInfo = new UserInfoResponse(
            user.getId(),
            user.getUsername(),
            user.getEmail(),
            user.getImageUrl() // 이게 null이면 프론트에서 빈 이미지 뜰 수 있음
        );
        
        return ResponseEntity
        .ok()
        .header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        .header("Pragma", "no-cache")
        .header("Expires", "0")
        .body(userInfo);
    }
}