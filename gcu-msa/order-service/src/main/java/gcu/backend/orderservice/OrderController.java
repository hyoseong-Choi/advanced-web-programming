package gcu.backend.orderservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
    @Autowired
    private MemberServiceFeignClient memberServiceFeignClient;

    @GetMapping("/order")
    public String order() {
        return memberServiceFeignClient.getMember().getName() + " requested and order.";
    }
}
