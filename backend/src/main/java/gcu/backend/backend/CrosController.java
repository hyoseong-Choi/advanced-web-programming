package gcu.backend.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CrosController {
    @GetMapping(value = "/not-cors")
    public String notCros() {
        System.out.println("not-cors");
        return "notCors";
    }

    @CrossOrigin("http://localhost:3000")
    @GetMapping(value = "/cors")
    public String Cors() {
        System.out.println("cors");
        return "cors";
    }
}
