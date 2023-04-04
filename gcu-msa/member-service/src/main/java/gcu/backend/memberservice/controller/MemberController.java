package gcu.backend.memberservice.controller;

import gcu.backend.memberservice.domain.Member;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
    @GetMapping("/member")
    public Member getMember() {
        return new Member(1L, "Gachon", "gcu");
    }
}
