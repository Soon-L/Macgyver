package com.example.demo;

import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class IpController {

    @GetMapping("/get-ip")
    public Map<String, String> getClientIp(HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty() || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }

        Map<String, String> response = new HashMap<>();
        response.put("ip", ip);
        return response;
    }
}