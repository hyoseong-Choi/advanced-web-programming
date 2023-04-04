package gcu.backend.productservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProductController {
    private final ProductService productservice;
    @Autowired
    public ProductController(@Lazy ProductService productservice) {
        this.productservice = productservice;
    }
    @GetMapping("/product/{id}")
    public Product getProductId(@PathVariable Long id) {
        return productservice.findOne(id);
    }
    
    @Service
    public class ProductService {
        private static List<Product> products = new ArrayList<>();
        static {
            products.add(new Product(1L, "smartRobot", 5000));
            products.add(new Product(2L, "smartCar", 3000));
            products.add(new Product(3L, "smartNotebook", 2000));
        }
        public Product findOne(Long id) {
            for(Product product: products)
            {
                if(product.getId()==id) return product;
            }
            return null;
        }
        
    }
}
