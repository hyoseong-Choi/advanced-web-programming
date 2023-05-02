package gcu.backend.orderservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class OrderController {
    final OrderRepository orderRepository;
    
    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    
    @Autowired
    private MemberServiceFeignClient memberServiceFeignClient;
    @Autowired
    private ProductServiceFeignClient productServiceFeignClient;
    
//    @GetMapping("/order")
//    public String order() {
//        return memberServiceFeignClient.getMember().getName() + " requested an order.";
//    }
    
    @GetMapping("/api/order/{id}")
    public Optional<Order> orderId(@PathVariable Long id) {
        return orderRepository.findById(id);
    }
    @PostMapping("/api/order")
    public EntityModel create(@RequestBody Order order) {
        orderRepository.save(order);
        EntityModel entityModel = EntityModel.of(order);
        return entityModel;
    }
}
