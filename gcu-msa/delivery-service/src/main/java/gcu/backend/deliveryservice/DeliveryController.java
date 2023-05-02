package gcu.backend.deliveryservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;

@RestController
public class DeliveryController {
    final DeliveryRepository deliveryRepository;
    
    public DeliveryController(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }
    @Autowired
    private OrderServiceFeignClient orderServiceFeignClient;
    
    @GetMapping("/api/orderdelivery/{id}")
    public String deliveryId(@PathVariable Long id) {
        return orderServiceFeignClient.getOrder(id).getMember()+" customer's order: " + orderServiceFeignClient.getOrder(id).getProduct()+" " +
                LocalDate.now() + " Delivery Ok";
    }
}
