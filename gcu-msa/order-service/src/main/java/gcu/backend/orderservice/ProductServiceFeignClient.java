package gcu.backend.orderservice;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name="productservice")
public interface ProductServiceFeignClient {
    @GetMapping(value = "/product/{id}", consumes = "application/json")
    Product getProduct(@PathVariable("id") Long id);
    
}
