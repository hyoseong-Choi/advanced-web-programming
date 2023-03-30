package gcu.backend.gcurest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.service.annotation.PutExchange;

import java.util.List;

@RestController
public class UserRest {
    @Autowired
    private UserDaoService service;
    
    @GetMapping("/users")
    public List<User> retriveAllUsers()
    {
        return service.findAll();
    }
    //retrieves a specific user detail
    @GetMapping("/users/{id}")
    public User retriveUser(@PathVariable int id)
    {
        return service.findOne(id);
    }
    
    @PutMapping("/users")
    public String updateUser(@PathVariable int id, @RequestBody User user) {
        service.updateUser(id, user);
        return "update OK";
    }
}
