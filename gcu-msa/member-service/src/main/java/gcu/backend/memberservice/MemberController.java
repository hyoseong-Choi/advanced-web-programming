package gcu.backend.memberservice;

import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MemberController {
    final MemberRepository memberRepository;

    public MemberController(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @PostMapping("/api/member")
    public EntityModel create(@RequestBody Member member) {
        memberRepository.save(member);
        EntityModel entityModel = EntityModel.of(member);
        return entityModel;
    }

    @GetMapping("/api/member/{id}")
    public Optional<Member> show(@PathVariable("id") Long id) {
        return memberRepository.findById(id);
    }

    @GetMapping("/api/member")
    public List<Member> showAll() {
        return memberRepository.findAll();
    }


}
