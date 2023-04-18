package gcu.backend.orderservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {
    @Autowired
    private MemberServiceFeignClient memberServiceFeignClient;
    @Autowired
    private ProductServiceFeignClient productServiceFeignClient;
    
//    @GetMapping("/order")
//    public String order() {
//        return memberServiceFeignClient.getMember().getName() + " requested an order.";
//    }
    
    @GetMapping("/order/{id}")
    public String orderId(@PathVariable Long id) {
        return memberServiceFeignClient.getMember().getName() + " " +
                productServiceFeignClient.getProduct(id).getProductname()+" " + " requested an order.";
    }
}
